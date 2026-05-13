import { Link, useSearchParams } from "react-router-dom";
import Lupa from "../../assets/images/icons/Lupa.svg";
import Categories from "./CategoriesData.jsx";

const Search = () => {
    const [searchParams] = useSearchParams();
    const CategoriaSeleccionada = searchParams.get("categoria");

    return (
        <div className="w-fit flex flex-col items-center gap-4">
            <div className="relative flex items-center w-full">
                <input
                className="bg-white text-marron_oscuro/75 tracking-[0.1em] pl-4 pr-10 w-full py-2 border border-marron_oscuro/50 focus:outline-none focus:ring-2 focus:ring-marron_oscuro/50 rounded-md"
                type="text" placeholder="¿Qué estás buscando?" />
                <img src={Lupa} alt="buscar" className="absolute right-3 w-4 h-4 opacity-50 pointer-events-none" />
            </div>
            <div className="flex gap-3">
                {Categories.map((category, index) => (
                    <Link key={index} to={`/productos?categoria=${category.title}`}
                    className={`text-sm tracking-[0.1em] px-3 py-1 border rounded-md transition-colors duration-300 uppercase ${
                        CategoriaSeleccionada === category.title
                            ? "bg-marron_oscuro text-white border-marron_oscuro"
                            : "text-marron_oscuro/75 border-marron_oscuro/50 hover:bg-marron_oscuro/10"
                    }`}>
                        {category.title}
                    </Link>
                ))}

            </div>
        </div>
    )
}

export default Search