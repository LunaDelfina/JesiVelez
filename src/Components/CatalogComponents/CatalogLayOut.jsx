import ProductCard from "../ProductCard.jsx";
import { supabase } from "../../supabase/client";

const CatalogLayOut = ({ data }) => {
    const getImageUrl = (path) => {
        if (!path) return null;
        return supabase.storage.from("JesiVelez").getPublicUrl(path).data.publicUrl;
    };

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-8 gap-4 mt-2">
            {data.map((item) => (
                <ProductCard
                    key={item.id}
                    name={item.titulo}
                    image={getImageUrl(item.producto_fotos[0]?.path)}
                    price={item.precio_desde}
                    categorie={item.producto_categorias[0]?.categorias?.nombre}
                    showBadge
                    tall
                />
            ))}
        </div>
    );
};

export default CatalogLayOut;