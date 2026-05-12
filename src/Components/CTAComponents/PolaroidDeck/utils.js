// Posiciones fijas por índice para efecto "fotos tiradas sobre una mesa"
// Orden del stack: índice 0 = fondo, índice 2 = frente
const CARD_POSITIONS = [
  { xBase:    0, yBase:  0,  rotMin:  -5, rotRange:  6 }, // centro (carta única)
  { xBase:  150, yBase: 25,  rotMin:  14, rotRange: 12 }, // derecha atrás
  { xBase:  -15, yBase: -10, rotMin:  -6, rotRange: 12 }, // centro al frente
];

// jitter leve para que no sea 100% mecánico
const jitter = (range) => Math.random() * range - range / 2;

export const to = (i) => {
  const pos = CARD_POSITIONS[i % CARD_POSITIONS.length];
  return {
    x:     pos.xBase + jitter(24),
    y:     pos.yBase + jitter(16),
    scale: 1,
    rot:   pos.rotMin + Math.random() * pos.rotRange,
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
