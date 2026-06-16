import ProductCard from "../ProductCard.jsx";

const DestacadoCards = ({ productos }) => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-8 gap-4">
            {productos.map((item) => (
                <ProductCard key={item.id} {...item} />
            ))}
        </div>
    );
};

export default DestacadoCards;
