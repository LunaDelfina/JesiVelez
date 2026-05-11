import MainTitle from "../Titles.jsx"
import SliderDestacados from "./SliderDestacados.jsx";


const Destacados = () => {
    return (
        <section className="bg-blanco h-screen snap-start flex flex-col items-center justify-center gap-10 px-[15%]">
            <div className="flex justify-between w-full items-center">
                <MainTitle eyebrow="Piezas Destacadas" title="Lo que más" accent="te enamora" />
                <button className="group tracking-[0.15em] relative overflow-hidden border flex items-center py-2.5 px-5 gap-3 border-marron_oscuro text-marron_oscuro rounded-xs h-fit cursor-pointer hover:bg-marron_oscuro hover:text-blanco hover:shadow-lg  active:scale-95 transition-all duration-300 ease-out">
                    Ver catálogo completo
                    <svg className="transition-transform duration-300 group-hover:translate-x-2" width="30" height="20" viewBox="0 0 30 20" fill="none">
                        
                        <line x1="6.5" y1="10" x2="22" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M17 4 L27 10 L17 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                </button>
            </div>
            <SliderDestacados />

        </section>
    )
}

export default Destacados