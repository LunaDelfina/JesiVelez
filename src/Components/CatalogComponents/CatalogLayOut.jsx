
import ProductCard from "./ProductCard.jsx";
import { supabase } from "../../supabase/client";

const CatalogLayOut = ({ data}) => {

    const getImageUrl = (path) => {
        if (!path) return null
        return supabase.storage.from('JesiVelez').getPublicUrl(path).data.publicUrl
    }

    return(
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mt-2">
            {data.map((item) => (
                <div key={item.id}>
                    <ProductCard name={item.titulo} image={getImageUrl(item.producto_fotos[0]?.path)} price={item.precio_desde} categorie={item.producto_categorias[0]?.categorias?.nombre}/>
                </div>
            ))}
        </div>
    )
}

export default CatalogLayOut