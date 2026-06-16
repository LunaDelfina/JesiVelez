import { useState, useEffect } from 'react'
import { supabase } from '../../supabase/client'
import CatalogAmuntOrder from "./CatalogAmuntOrder.jsx"
import CatalogLayOut from "./CatalogLayOut.jsx"
import { useSearchParams } from "react-router-dom"

const CatalogoList = () => {
    const [searchParams] = useSearchParams()
    const CategoriaSeleccionada = searchParams.get("categoria")
    const ordenSeleccionado = searchParams.get("orden") ?? ""


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


    const normalize = (str) => str?.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase() ?? ""

    const filteredData = CategoriaSeleccionada && normalize(CategoriaSeleccionada) !== "todos"
        ? productos.filter(item => normalize(item.producto_categorias[0]?.categorias?.nombre) === normalize(CategoriaSeleccionada))
        : productos

    const sortedData = [...filteredData].sort((a, b) => {
        switch (ordenSeleccionado) {
            case "precio-asc":  return (a.precio_desde ?? 0) - (b.precio_desde ?? 0)
            case "precio-desc": return (b.precio_desde ?? 0) - (a.precio_desde ?? 0)
            case "nombre-asc":  return a.titulo.localeCompare(b.titulo, "es")
            default:            return 0
        }
    })

    return (
        <div className="w-full mt-10 lg:mb-50 md:mb-20 mb-15">
            <CatalogAmuntOrder amount={sortedData.length} />
            {loading ? <p>Cargando productos...</p> : <CatalogLayOut data={sortedData} />}
        </div>
    )
}

export default CatalogoList