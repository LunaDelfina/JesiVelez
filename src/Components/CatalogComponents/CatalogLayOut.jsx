
import ProductCard from "./ProductCard.jsx";

const CatalogLayOut = ({ data}) => {


    return(
        <div className="flex flex-wrap gap-10 mt-2">
            {data.map((item) => (
                <div className="flex-1 min-w-[220px]" key={item.id}>
                    <ProductCard name={item.name} image={item.image} price={item.price} categorie={item.categorie}/>
                </div>
            ))}
        </div>
    )
}

export default CatalogLayOut