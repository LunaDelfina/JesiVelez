import CatalogData from "./CatalogData.jsx"
import CatalogAmuntOrder from "./CatalogAmuntOrder.jsx"
import CatalogLayOut from "./CatalogLayOut.jsx"
import { useSearchParams } from "react-router-dom";


const CatalogoList = () => {
const [searchParams] = useSearchParams();
const CategoriaSeleccionada = searchParams.get("categoria");

const filteredData = CategoriaSeleccionada && CategoriaSeleccionada !=="Todos"
    ?CatalogData.filter(item=>item.categorie===CategoriaSeleccionada)
    :CatalogData;

    return (
        <div className="w-full mt-10 mb-50">
            <CatalogAmuntOrder amount={filteredData.length}/>
            <CatalogLayOut data={filteredData}/>
        </div>
    )
}

export default CatalogoList