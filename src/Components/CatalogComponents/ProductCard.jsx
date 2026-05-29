import {Link} from "react-router-dom"

const ProductTemplate = ({ name, image, price, categorie }) => {
    return (
        <div className="relative">
        <Link to={`/productos/${name}`}>
            <div className="bg-marron_oscuro/75 text-white text-xs font-light tracking-[0.1em] p-2 w-fit rounded absolute m-2 z-0">
            <p className=" relative ">{categorie}</p>
            </div>
            <div className="overflow-hidden h-80">
                <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-4xl font-principal text-marron_oscuro font-bold">{name}</h3>
            <p className="text-marron_claro">{categorie}</p>
            <div className="h-[1px] bg-marron_oscuro/30 my-2 rounded"></div>
            <p className="text-2xl text-marron_oscuro  italic font-light text-right">${price}</p>
        </Link>
        </div>
    )
}

export default ProductTemplate

