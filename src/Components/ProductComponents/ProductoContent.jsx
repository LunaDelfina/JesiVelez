import SliderImages from "./SliderImg";
import ProductDescription from "./ProductDescription";
import Curve from "../Curve.jsx";
const ProductoContent = ({ product }) => {
    return (
        <div className="w-full flex flex-col md:flex-row md:px-[15%] md:gap-10">
            <div className="w-full md:w-1/2">
                <SliderImages images={product.images} bg="bg-carbon_claro"  />
            </div>
            <div className="block md:hidden w-full">
            <Curve />
            </div>
            <div className="w-full px-8 md:px-0 md:w-1/2">
                <ProductDescription product={product} />
            </div>
        </div>
    )
}

export default ProductoContent
