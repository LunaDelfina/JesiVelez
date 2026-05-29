import { useState, useEffect } from "react"
import { supabase } from "../supabase/client"
import NavBar from "../Components/NavBar.jsx"
import Curve from "../Components/Curve.jsx"
import ProductoContent from "../Components/ProductComponents/ProductoContent.jsx"
import { useParams } from "react-router-dom"
import Bubble from "../Components/ProductComponents/Bubble.jsx"



export default function ProductoDetalle() {

  const { id } = useParams()

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProduct = async () => {
      const { data, error } = await supabase
        .from('productos')
        .select(`
    id,
    titulo,
    precio_desde,
    descripcion,
    tiempo_entrega,
    disponibilidad,
    envio,
    personalizable,
    producto_fotos (path, es_principal),
    producto_categorias (
        categorias (nombre)
    ),
    producto_materiales (
        materiales (nombre)
    )
`)
        .eq('activo', true)
        .eq('titulo', id)
        .single()

      if (error) {
        console.error('Error fetching product:', error)
        return
      }
      setProduct({
    ...data,
    title: data.titulo,
    price: data.precio_desde,
    description: data.descripcion,
    categorie: data.producto_categorias[0]?.categorias?.nombre,
    materials: data.producto_materiales.map(m => m.materiales?.nombre),
    info: [
        { Label: 'Disponibilidad', Value: data.disponibilidad },
        { Label: 'Envío', Value: data.envio },
        { Label: 'Tiempo de entrega', Value: data.tiempo_entrega },
        { Label: '¿Personalizable?', Value: data.personalizable },
    ],
    images: data.producto_fotos.map(f => supabase.storage.from('JesiVelez').getPublicUrl(f.path).data.publicUrl),
})
      setLoading(false)
    }
    fetchProduct()
  }, [id])


  return (
    <section className="App h-screen overflow-y-scroll bg-blanco ">
      <div className="bg-carbon_claro px-[15%] pb-4 sticky top-0 w-full z-10">
        <NavBar />
      </div>
      <Curve />
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <p>Cargando...</p>
        </div>
      ) : (
        <ProductoContent product={product} />
      )}

      <Bubble />

    </section>
  )
}
