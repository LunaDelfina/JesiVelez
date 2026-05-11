import { useLayoutEffect, useRef, useState } from "react";
import { animated, to as interpolate, useSprings } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { to, from, trans } from "./utils";
import "./deck.css";

const TIMEOUT_MS = 5000;
const PADDING = 48;

const DIMENSIONS = {
  portrait: {
    frameWidth: 272, frameHeight: 428,
    photoWidth: 240, photoHeight: 320,
    topHeight: 32,   bottomHeight: 76,
  },
  landscape: {
    frameWidth: 352, frameHeight: 344,
    photoWidth: 320, photoHeight: 240,
    topHeight: 32,   bottomHeight: 72,
  },
};

function getOrientationKey(orientation) {
  return orientation ?? "portrait";
}

function getDimensions(key) {
  return DIMENSIONS[key];
}

function scaleDimensions(dims, containerWidth, containerHeight) {
  const scaleW = containerWidth  > 0 ? (containerWidth  - PADDING) / dims.frameWidth  : 1;
  const scaleH = containerHeight > 0 ? (containerHeight - PADDING) / dims.frameHeight : 1;
  const scale  = Math.min(1, scaleW, scaleH);
  return {
    frameWidth:   dims.frameWidth   * scale,
    frameHeight:  dims.frameHeight  * scale,
    photoWidth:   dims.photoWidth   * scale,
    photoHeight:  dims.photoHeight  * scale,
    topHeight:    dims.topHeight    * scale,
    bottomHeight: dims.bottomHeight * scale,
  };
}

function loadOrientation(card) {
  return new Promise((resolve) => {
    const img = new Image();
    const timer = window.setTimeout(() => {
      img.onload = null;
      img.onerror = null;
      resolve(null);
    }, TIMEOUT_MS);
    const done = (result) => {
      window.clearTimeout(timer);
      img.onload = null;
      img.onerror = null;
      resolve(result);
    };
    img.onload  = () => done(img.naturalHeight > img.naturalWidth ? "portrait" : "landscape");
    img.onerror = () => done(null);
    img.src = card.url;
  });
}

export default function Deck({ cards, className, style }) {
  const gone         = useState(() => new Set())[0];
  const containerRef = useRef(null);
  const resetCount   = useRef(0);

  const [containerSize, setContainerSize] = useState(() => ({
    width:  typeof window === "undefined" ? 0 : window.innerWidth,
    height: typeof window === "undefined" ? 0 : window.innerHeight,
  }));
  const [orientations,  setOrientations] = useState(() => cards.map(() => null));
  const [isReady,       setIsReady]      = useState(false);
  const [hiddenCards,   setHiddenCards]  = useState(() => new Set());

  const [springs, api] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  }));

  // Observar tamaño del contenedor
  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const measure = () => {
      const { width, height } = el.getBoundingClientRect();
      setContainerSize({ width, height });
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Cargar imágenes y animar entrada
  useLayoutEffect(() => {
    let active = true;
    let rafId;
    gone.clear();
    resetCount.current += 1;
    /* eslint-disable react-hooks/set-state-in-effect */
    setIsReady(false);
    setOrientations(cards.map(() => null));
    setHiddenCards(new Set());
    /* eslint-enable react-hooks/set-state-in-effect */

    Promise.all(cards.map(loadOrientation)).then((results) => {
      if (!active) return;
      setOrientations(results);
      api.start((i) => ({ ...from(i), immediate: true }));
      setIsReady(true);
      rafId = window.requestAnimationFrame(() => {
        if (active) api.start((i) => to(i));
      });
    });

    return () => {
      active = false;
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [cards]); // eslint-disable-line react-hooks/exhaustive-deps

  const bind = useDrag(({ args: [index], active, movement: [mx], direction: [dx], velocity: [vx] }) => {
    if (!active && vx > 0.2) gone.add(index);

    const gen = resetCount.current;
    api.start((i) => {
      if (i !== index) return;
      const isGone         = gone.has(index);
      const containerWidth = containerRef.current?.getBoundingClientRect().width ?? window.innerWidth;
      return {
        x:     isGone ? (200 + containerWidth) * dx : active ? mx : 0,
        rot:   mx / 100 + (isGone ? dx * 10 * vx : 0),
        scale: active ? 1.1 : 1,
        delay: undefined,
        config: { friction: 50, tension: active ? 300 : isGone ? 120 : 400 },
        onRest: isGone
          ? () => { if (resetCount.current === gen) setHiddenCards((prev) => new Set([...prev, index])); }
          : undefined,
      };
    });

    if (!active && gone.size === cards.length) {
      window.setTimeout(() => {
        gone.clear();
        resetCount.current += 1;
        setHiddenCards(new Set());
        api.start((i) => ({
          ...to(i),
          from: { x: 0, rot: 0, scale: 1.5, y: -1000 },
          delay: i * 150,
        }));
      }, 600);
    }
  });

  return (
    <div
      ref={containerRef}
      className={className ? `photo-deck ${className}` : "photo-deck"}
      style={style}
    >
      {isReady && springs.map(({ x, y, rot, scale }, index) => {
        if (hiddenCards.has(index)) return null;
        const orientationKey = getOrientationKey(orientations[index]);
        const dims           = scaleDimensions(getDimensions(orientationKey), containerSize.width, containerSize.height);
        const card           = cards[index];
        const cssVars = {
          "--photo-deck-photo-width":          `${dims.photoWidth}px`,
          "--photo-deck-photo-height":         `${dims.photoHeight}px`,
          "--photo-deck-card-top-height":      `${dims.topHeight}px`,
          "--photo-deck-card-bottom-height":   `${dims.bottomHeight}px`,
        };

        return (
          <animated.div
            key={index}
            className="photo-deck__card-shell"
            style={{ x, y }}
          >
            <animated.div
              {...bind(index)}
              className={`photo-deck__card photo-deck__card--${orientationKey}`}
              style={{
                transform: interpolate([rot, scale], trans),
                width:  `${dims.frameWidth}px`,
                height: `${dims.frameHeight}px`,
                ...cssVars,
              }}
            >
              <div className="photo-deck__date-row">
                {card.date && <span className="photo-deck__date">{card.date}</span>}
              </div>
              <div
                className="photo-deck__photo"
                style={{ backgroundImage: `url(${card.url})` }}
              />
              <div className="photo-deck__caption-row">
                {card.caption && <span className="photo-deck__caption">{card.caption}</span>}
              </div>
            </animated.div>
          </animated.div>
        );
      })}
    </div>
  );
}
