import SliderImages from "./SliderImg";
import ProductDescription from "./ProductDescription";


const ProductoContent = ({ product }) => {
    return (
        <div className="w-full h-screen flex gap-10 items-center justify-center px-[15%]">
            <SliderImages />
            <ProductDescription product={product} />
        </div>
    )
}

export default ProductoContent

