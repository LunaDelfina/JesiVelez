import MainTitle from "../Titles.jsx"
import Search from "./Search.jsx"

const TopCatalog = () => {
    return(
        <div className="flex items-center justify-between mt-10 w-full">
            <div className="hidden md:block">
            <MainTitle eyebrow="Colección completa" title="Cada pieza," accent="única como vos" />
            </div>
            <Search />
        </div>
    )
}

export default TopCatalog