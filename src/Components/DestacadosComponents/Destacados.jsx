import CatalogButton from "./catalogbutton.jsx"
import MainTitle from "../Titles.jsx"
import SliderDestacados from "./SliderDestacados.jsx";


const Destacados = () => {
    return (
        <section className="bg-blanco h-[100vh] snap-start flex flex-col items-center justify-center md:gap-6 lg:gap-8 2xl:gap-10 gap-4 md:px-[15%] px-10 overflow-x-clip">
            <div className="flex justify-between w-full items-center">
                <MainTitle eyebrow="Piezas Destacadas" title="Lo que más " accent=" te enamora" line="true"/>
                <div className="hidden md:block lg:block">
                <CatalogButton />
                </div>
                
            </div>
            <SliderDestacados />
            <div className="block md:hidden lg:hidden">
                <CatalogButton />
                </div>

        </section>
    )
}

export default Destacados