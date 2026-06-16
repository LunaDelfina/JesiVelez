import { Link } from "react-router-dom";
import { formatPrecio } from "../utils/format";

const ProductCard = ({ name, image, price, categorie, showBadge = false, tall = false }) => {
    return (
        <div className="relative group">
            <Link to={`/productos/${name}`} className="flex flex-col gap-0">
                {showBadge && (
                    <div className="bg-marron_oscuro/75 text-white text-xs font-light tracking-[0.1em] p-2 w-fit rounded absolute m-2 z-10">
                        <p>{categorie}</p>
                    </div>
                )}
                <div className={`overflow-hidden ${tall ? "lg:h-96 h-60" : "lg:h-80 h-45"}`}>
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                </div>
                <h3 className="lg:text-4xl text-2xl font-principal text-marron_oscuro font-bold">{name}</h3>
                <p className="text-marron_claro lg:text-lg text-xs">{categorie}</p>
                <div className="h-[1px] bg-marron_oscuro/30 lg:my-2 my-1 rounded" />
                <p className="lg:text-2xl text-sm text-marron_oscuro italic font-light text-right">${formatPrecio(price)}</p>
            </Link>
        </div>
    );
};

export default ProductCard;
