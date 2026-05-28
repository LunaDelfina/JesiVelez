import { useState, useEffect } from 'react'
import { supabase } from '../../supabase/client'
import CatalogAmuntOrder from "./CatalogAmuntOrder.jsx"
import CatalogLayOut from "./CatalogLayOut.jsx"
import { useSearchParams } from "react-router-dom"

const CatalogoList = () => {
    const [searchParams] = useSearchParams()
    const CategoriaSeleccionada = searchParams.get("categoria")


    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProducts = async () => {
            const { data, error } = await supabase
                .from('productos')
                .select(`
        id,
        titulo,
        precio_desde,
        producto_fotos (path, es_principal),
        producto_categorias (
            categorias (nombre)
        )
    `)
                .eq('activo', true)

            if (error) {
                console.error('Error fetching products:', error)
                return
            }
            setProductos(data)
            setLoading(false)
        }
        fetchProducts()
    }, [])


    const filteredData = CategoriaSeleccionada && CategoriaSeleccionada !== "Todos"
        ? productos.filter(item => item.producto_categorias[0]?.categorias?.nombre === CategoriaSeleccionada)
        : productos

        console.log("Productos filtrados:", filteredData) // Verifica los productos filtrados en la consola


    return (
        <div className="w-full mt-10 mb-50">
            <CatalogAmuntOrder amount={filteredData.length} />
            {loading ? <p>Cargando productos...</p> : <CatalogLayOut data={filteredData} />}
        </div>
    )
}

export default CatalogoList