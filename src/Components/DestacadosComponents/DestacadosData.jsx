import {supabase} from "../../supabase/client"

const DestacadosData = async () => {
    const { data, error } = await supabase
        .from('productos')
        .select(`id, titulo, precio_desde, producto_categorias ( categorias (nombre) ), producto_fotos (path, es_principal)`)
        .eq('destacado', true)
        .eq('activo', true)
        .order('created_at', { ascending: false })
        .limit(16)

    if (error) {
        console.log(error)
        return []
    }
    return data.map(producto => ({
        id: producto.id,
        name: producto.titulo,
        price: producto.precio_desde,
        categorie: producto.producto_categorias[0]?.categorias?.nombre || null,
        image: producto.producto_fotos.find(f => f.es_principal)?.path
            ? supabase.storage.from('JesiVelez').getPublicUrl(producto.producto_fotos.find(f => f.es_principal).path).data.publicUrl
            : null
    }))
}

export default DestacadosData
