import TopCatalog from "./TopCatalog";
import CatalogList from "./CatalogList";
import { useAuth } from '../../context/AuthContext'
import { Link } from "react-router-dom";

const Catalog = () => {
    const { user } = useAuth()

    return(
        <div className="px-[15%] justify-center flex flex-col items-center">
            <TopCatalog />
            <CatalogList />

            {user && (
                <Link to="/AgregarProducto"
                    title="Agregar producto"
                    className="group fixed bottom-8 right-8 flex items-center gap-2 pr-5 pl-4 h-14 rounded-full bg-marron_oscuro text-crema shadow-lg hover:bg-carbon_oscuro active:scale-95 transition-all duration-300 cursor-pointer z-50"
                >
                    <span className="flex items-center justify-center w-7 h-7 rounded-full border-2 border-crema/60 group-hover:border-crema transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </span>
                    <span className="text-sm font-medium tracking-wide">Agregar producto</span>
                </Link>
            )}
        </div>
    )
}

export default Catalog