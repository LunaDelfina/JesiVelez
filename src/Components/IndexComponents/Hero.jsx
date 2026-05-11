
import MainTitle from "../Titles.jsx";
import NavBar from "./NavBar.jsx";
import Cards from "./Cards.jsx";
const Hero = () => {
    return (
        <section className="bg-gradient-to-t from-carbon_oscuro to-carbon_claro h-screen snap-start px-[15%] flex flex-col  ">
            <NavBar />
            <div className="flex h-full justify-center items-center ">
                <div className="flex flex-col gap-4 max-w-sm">
                    <MainTitle eyebrow="Accesorios para Novias" title="El día que " accent="siempre imaginaste" extra="empieza aquí" />
                    <p>Tocados, pins y velos diseñados a mano en Alta Gracia. Cada pieza, única como vos.</p>
                    <p className="italic">+200 novias acompañadas desde 2019</p>

                    <button className="group flex items-center gap-3 justify-center bg-marron_claro text-carbon_oscuro px-6 py-3 font-light text-lg tracking-[0.15em] hover:bg-transparent hover:text-marron_claro border border-transparent hover:border-marron_claro transition-colors duration-300 mt-5 cursor-pointer">
                        Quiero mi tocado ideal
                        <svg className="transition-transform duration-300 group-hover:translate-x-1.5" width="26" height="20" viewBox="0 0 26 20" fill="none">
                            <line x1="0" y1="10" x2="18" y2="10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                            <path d="M13 3 L22 10 L13 17" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
                <div className="flex-1 h-full overflow-hidden min-w-0">
                    <Cards />
                </div>

            </div>

        </section>
    )
}

export default Hero