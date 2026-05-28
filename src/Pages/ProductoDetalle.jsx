import { useState, useEffect } from "react"
import { supabase } from "../supabase/client"
import NavBar from "../Components/NavBar.jsx"
import Curve from "../Components/Curve.jsx"
import ProductoContent from "../Components/ProductComponents/ProductoContent.jsx"
import { useParams } from "react-router-dom"



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
          title:titulo,
          price:precio,
          images:producto_fotos (path, es_principal),
          producto_categorias (
              categorias (nombre)
          ),
          description:descripcion,
          materials:materiales (nombre),
          info (Label, Value)
        `)
        .eq('activo', true)
        .eq('id', id)
        .single()

      if (error) {
        console.error('Error fetching product:', error)
        return
      }
      setProduct({
        ...data,
        categorie: data.producto_categorias[0]?.categorias?.nombre,
      })
      setLoading(false)
    }
    fetchProduct()
  }, [id])


  return (
    <section className="App h-screen overflow-y-scroll bg-blanco ">
      <div className="bg-carbon_claro px-[15%] pb-4 sticky top-0 w-full z-10">
        <NavBar  />
      </div>
      <Curve />
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <p>Cargando...</p>
        </div>
      ) : (
        <ProductoContent product={product} />
      )}

    </section>
  )
}
