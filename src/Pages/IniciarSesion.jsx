import NavBar from "../Components/NavBar"
import Curve from "../Components/Curve"
import Login from "../Components/Login/Login"

const IniciarSesion = () => {
    return (
        <section className="App min-h-screen bg-blanco flex flex-col">
            <div className="bg-carbon_claro md:px-[15%] px-10 pb-4 sticky top-0 w-full z-10">
                <NavBar />
            </div>
            <Curve />
            <Login />

            
        </section>
    )
}

export default IniciarSesion
