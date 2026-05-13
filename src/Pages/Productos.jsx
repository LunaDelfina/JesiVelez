
import NavBar from "../Components/NavBar"
import Curve from "../Components/Curve.jsx"
import Catalog from "../Components/CatalogComponents/Catalog.jsx"
import Footer from "../Components/Footer.jsx"

export default function Productos() {
  return (
    <section className="App h-screen overflow-y-scroll bg-blanco ">
      <div className="bg-carbon_claro px-[15%] pb-4 sticky top-0 w-full z-10">
        <NavBar  />
      </div>
      <Curve />
      <Catalog />
      <div className="relative">
      <Footer />
      </div>
    </section>
  )
}
