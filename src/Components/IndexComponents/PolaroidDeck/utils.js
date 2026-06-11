// Posiciones fijas por índice para efecto "fotos tiradas sobre una mesa"
// Orden del stack: índice 0 = fondo, índice 2 = frente
const CARD_POSITIONS = [
  { xBase: -100, yBase: 20, rotMin: -18, rotRange: 5, cardScale: 0.88 }, // izquierda atrás
  { xBase:  100, yBase: 18, rotMin:  13, rotRange: 5, cardScale: 0.88 }, // derecha atrás
  { xBase:    0, yBase: -5, rotMin:  -4, rotRange: 4, cardScale: 1.12 }, // centro al frente (más grande)
];

const jitter = (range) => Math.random() * range - range / 2;

export const getCardScale = (i) => CARD_POSITIONS[i % CARD_POSITIONS.length].cardScale ?? 1;

export const to = (i, xScale = 1, rotScale = 1) => {
  const pos = CARD_POSITIONS[i % CARD_POSITIONS.length];
  return {
    x:     (pos.xBase + jitter(8)) * xScale,
    y:     pos.yBase + jitter(5),
    scale: pos.cardScale,
    rot:   (pos.rotMin + Math.random() * pos.rotRange) * rotScale,
    delay: i * 100,
  };
};

export const from = (_i) => ({
  x: 0,
  rot: 0,
  scale: 1.5,
  y: -1000,
});

export const trans = (r, s) =>
  `perspective(1500px) rotateX(0deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;
