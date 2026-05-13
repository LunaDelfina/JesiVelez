import TopCatalog from "./TopCatalog";
import CatalogList from "./CatalogList";

const Catalog = () => {
    return(
        <div className="px-[15%] justify-center flex flex-col items-center ">
            <TopCatalog />
            <CatalogList />
        </div>
    )
}

export default Catalog