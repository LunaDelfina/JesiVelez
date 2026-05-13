import MainTitle from "../Titles.jsx"
import Search from "./Search.jsx"

const TopCatalog = () => {
    return(
        <div className="flex items-center justify-between mt-10 w-full">
            <MainTitle eyebrow="Colección completa" title="Cada pieza," accent="única como vos"/>
            <Search />
        </div>
    )
}

export default TopCatalog