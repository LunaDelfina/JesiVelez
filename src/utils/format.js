export const formatPrecio = (precio) =>
    new Intl.NumberFormat('es-AR', { maximumFractionDigits: 0 }).format(precio)
