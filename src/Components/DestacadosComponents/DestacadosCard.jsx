import { formatPrecio } from "../../utils/format"
import { Link } from "react-router-dom"

const DestacadoTemplate = ({ name, image, price, categorie }) => {
    return (
        <Link to={`/productos/${name}`} className="flex flex-col cursor-pointer group gap-0">
            <div className="overflow-hidden lg:h-80 h-45">
                <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="lg:text-4xl text-2xl font-principal text-marron_oscuro font-bold">{name}</h3>
            <p className="text-marron_claro lg:text-lg text-xs">{categorie}</p>
            <div className="h-[1px] bg-marron_oscuro/30 lg:my-2 my-1 rounded"></div>
            <p className="lg:text-2xl text-sm text-marron_oscuro  italic font-light text-right">${formatPrecio(price)}</p>
        </Link>
    )
}

// Ahora recibe productos como prop, no los importa directamente
const DestacadoCards = ({ productos }) => {
    return (
        <div className="grid grid-cols-2  lg:grid-cols-4 md:gap-8 gap-4">
            {productos.map((item) => (
                <DestacadoTemplate key={item.id} {...item} />
            ))}
        </div>
    )
}

export default DestacadoCards

