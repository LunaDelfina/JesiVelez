import NavBar from "../Components/NavBar";
import Curve from "../Components/Curve.jsx"
import Content from "../Components/CreateProductsComponents/Content.jsx";


const SubirProducto = () => {
    return (
        <section>
            <div className="bg-carbon_claro md:px-[15%] px-10 pb-4 sticky top-0 w-full z-30">
                <NavBar />
            </div>
            <Curve />
            <Content />

        </section>
    )
}

export default SubirProducto