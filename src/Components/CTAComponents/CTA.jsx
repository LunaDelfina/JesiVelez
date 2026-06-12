import MainTitle from "../Titles.jsx"
import Cards from "./CTACards.jsx"
import Footer from "../Footer.jsx"

const btnBase = "group flex items-center gap-3 justify-center cursor-pointer tracking-[0.15em] transition-colors duration-300"

const ArrowIcon = () => (
    <svg className="transition-transform duration-300 group-hover:translate-x-1.5" width="19" height="8" viewBox="0 0 19 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.5 3.18188H0L0 4.18188H0.5L0.5 3.68188L0.5 3.18188ZM18.7492 4.03544C18.9445 3.84018 18.9445 3.52359 18.7492 3.32833L15.5672 0.146351C15.372 -0.0489113 15.0554 -0.0489113 14.8601 0.146351C14.6649 0.341613 14.6649 0.658195 14.8601 0.853458L17.6885 3.68188L14.8601 6.51031C14.6649 6.70557 14.6649 7.02216 14.8601 7.21742C15.0554 7.41268 15.372 7.41268 15.5672 7.21742L18.7492 4.03544ZM0.5 3.68188L0.5 4.18188L18.3957 4.18188V3.68188V3.18188L0.5 3.18188L0.5 3.68188Z" fill="currentColor" />
    </svg>
)

const CTA = () => {
    return (
        <section className="relative bg-blanco h-[100dvh] snap-start flex flex-col overflow-x-clip">
            <div className="flex flex-1 min-h-0 justify-center items-center flex-col md:flex-row gap-6 md:gap-20 md:px-[15%] px-10">
                <div className="hidden md:flex w-full h-[35vh] md:flex-1 md:h-full md:overflow-hidden  min-w-0">
                    <Cards />
                </div>
                <div className="flex flex-col gap-4 max-w-sm">
                    <MainTitle eyebrow="Asesoramiento Personalizado" title="Diseñemos juntas" accent="tu look ideal" />
                    <div className="flex md:hidden w-full h-[35vh] md:flex-1 md:h-full md:overflow-hidden  min-w-0">
                    <Cards />
                </div>
                    <p className="text-sm md:text-base">Ese día merece algo único, elegido con tiempo y con amor. Escribime y encontramos juntas la pieza perfecta — ya sea en el estudio, por mensaje o en una videollamada.</p>

                    <button className={`${btnBase} bg-marron_claro text-blanco px-6 py-3 font-light lg:text-lg text-xs hover:bg-transparent hover:text-marron_claro border border-transparent hover:border-marron_claro mt-5`}>
                        Quiero asesoramiento
                        <ArrowIcon />
                    </button>
                    <button className={`${btnBase} text-marron_claro w-fit px-1 py-1 text-sm border-b border-marron_claro`}>
                        Ver colección completa
                        <ArrowIcon />
                    </button>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default CTA
