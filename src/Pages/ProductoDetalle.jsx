import NavBar from "../Components/NavBar.jsx"
import Curve from "../Components/Curve.jsx"
import ProductoContent from "../Components/ProductComponents/ProductoContent.jsx"
import Aurora from "../assets/images/products/Aurora.png"
import Cristal from "../assets/images/products/Cristal.png"
import Eclipsa from "../assets/images/products/Eclipsa.png"
import Flora from "../assets/images/products/Flora.png"


const product = {
  title: "Aurora",
  year: 2023,
  images: [Aurora, Cristal, Eclipsa, Flora],
  price: 100,
  categorie: "Tocados",
  materials: ["Porcelana Fría", "Perlas Naturales", "Alambre Dorado", "Cristales Swarovski"],
  description: "El tocado Aurora es una pieza única y elegante, inspirada en la belleza de las auroras boreales. Cada detalle ha sido cuidadosamente elaborado a mano, utilizando porcelana fría de alta calidad para crear flores delicadas y hojas intrincadas. Las perlas naturales añaden un toque de sofisticación, mientras que el alambre dorado aporta un brillo sutil. Los cristales Swarovski capturan la luz de manera deslumbrante, haciendo que este tocado sea perfecto para ocasiones especiales como bodas o eventos formales.",
  info:[
    {Label: "Tiempo de entrega", Value: "2-3 semanas"},
    {Label: "Disponibilidad", Value: "En stock"},
    {Label: "Envío", Value: "Todo el país"},
    {Label: "Personalizable", Value: "Sí, consulta"}
  ]

}

export default function ProductoDetalle() {


  return (
    <section className="App h-screen overflow-y-scroll bg-blanco ">
      <div className="bg-carbon_claro px-[15%] pb-4 sticky top-0 w-full z-10">
        <NavBar  />
      </div>
      <Curve />
      <ProductoContent product={product} />
      

    </section>
  )
}
