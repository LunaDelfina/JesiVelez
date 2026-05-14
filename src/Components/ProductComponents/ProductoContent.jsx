import SliderImages from "./SliderImg";
import ProductDescription from "./ProductDescription";


const ProductoContent = ({ product }) => {
    return (
        <div className="w-full flex gap-10 justify-center px-[15%] items-start">
            <SliderImages images={product.images} />
            <ProductDescription product={product} />
        </div>
    )
}

export default ProductoContent

