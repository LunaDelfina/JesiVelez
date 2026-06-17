
import NavBar from "../Components/NavBar"
import Curve from "../Components/Curve.jsx"
import CurveMobile from "../Components/CatalogComponents/CurveMobile.jsx"
import Catalog from "../Components/CatalogComponents/Catalog.jsx"
import Footer from "../Components/Footer.jsx"

export default function Productos() {
  return (
    <section className="App min-h-screen bg-blanco">
      <div className="bg-carbon_claro md:px-[15%] px-10 pb-4 sticky top-0 w-full z-15">
        <NavBar  />
      </div>
      <div className="hidden md:block">
      <Curve />
      </div>
      <div className="block md:hidden">
      <CurveMobile />
      </div>
      <Catalog />
      <Footer />
    </section>
  )
}
