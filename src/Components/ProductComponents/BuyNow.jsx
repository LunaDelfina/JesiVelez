import { formatPrecio } from "../../utils/format"

const WA = "5493547598074"

const BuyNow = ({ price, title }) => {
    const mensaje = title
        ? `Hola! Me interesa la pieza *${title}*. ¿Podés darme más información?`
        : "Hola! Me gustaría hacer una consulta sobre una pieza."
    const href = `https://wa.me/${WA}?text=${encodeURIComponent(mensaje)}`

    return (
        <div className="w-full flex items-center gap-4">
            <div className="shrink-0">
                <p className="text-xs uppercase tracking-[0.1em] text-marron_oscuro/50">Precio</p>
                <h3 className="text-marron_oscuro/75 md:text-2xl text-lg italic font-bold">${formatPrecio(price)}</h3>
            </div>
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-marron_claro flex items-center justify-center gap-2 px-4 py-3 rounded-sm cursor-pointer hover:bg-marron_oscuro transition-colors duration-300"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="currentColor" className="w-5 h-5 shrink-0 text-blanco">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.121 1.532 5.851L.057 23.55a.75.75 0 0 0 .916.932l5.849-1.53A11.953 11.953 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 0 1-4.951-1.354l-.355-.21-3.676.963.98-3.585-.23-.368A9.713 9.713 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
                </svg>
                <span className="text-blanco uppercase tracking-[0.1em] text-sm whitespace-nowrap">
                    <span className="hidden md:inline">Consultar por </span>Whatsapp
                </span>
            </a>
        </div>
    )
}

export default BuyNow
