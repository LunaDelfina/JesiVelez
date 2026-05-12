import MainTitle from "../Titles.jsx"
import Cards from "./CTACards.jsx"
import Footer from "./Footer.jsx"


const CTA = () => {
    return (
        <section className="relative bg-blanco h-screen snap-start px-[15%] flex items-center gap-20">
            <div className="flex-1 h-full overflow-hidden min-w-0">
                <Cards />
            </div>

            <div className="flex flex-col gap-4 max-w-sm">
                <MainTitle eyebrow="Asesoramiento Personalizado" title="Diseñemos juntas" accent="tu look ideal" />
                <p>Ese día merece algo único, elegido con tiempo y con amor. Escribime y encontramos juntas la pieza perfecta — ya sea en el estudio, por mensaje o en una videollamada.</p>


                <button className="group flex items-center gap-3 justify-center bg-marron_claro text-blanco px-6 py-3 font-light text-lg tracking-[0.15em] hover:bg-transparent hover:text-marron_claro border border-transparent hover:border-marron_claro transition-colors duration-300 mt-5 cursor-pointer">
                    Quiero asesoramiento
                    <svg className="transition-transform duration-300 group-hover:translate-x-1.5" width="19" height="8" viewBox="0 0 19 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 3.18188H0L0 4.18188H0.5L0.5 3.68188L0.5 3.18188ZM18.7492 4.03544C18.9445 3.84018 18.9445 3.52359 18.7492 3.32833L15.5672 0.146351C15.372 -0.0489113 15.0554 -0.0489113 14.8601 0.146351C14.6649 0.341613 14.6649 0.658195 14.8601 0.853458L17.6885 3.68188L14.8601 6.51031C14.6649 6.70557 14.6649 7.02216 14.8601 7.21742C15.0554 7.41268 15.372 7.41268 15.5672 7.21742L18.7492 4.03544ZM0.5 3.68188L0.5 4.18188L18.3957 4.18188V3.68188V3.18188L0.5 3.18188L0.5 3.68188Z" fill="currentColor" />
                    </svg>
                </button>
                <button className="group flex items-center gap-3 justify-center text-marron_claro w-fit px-1 py-1 text-sm tracking-[0.15em] border-b border-marron_claro hover:border-marron_claro transition-colors duration-300 cursor-pointer">
                    Ver colección completa
                    <svg width="19" height="8" viewBox="0 0 19 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 3.18188H0L0 4.18188H0.5L0.5 3.68188L0.5 3.18188ZM18.7492 4.03544C18.9445 3.84018 18.9445 3.52359 18.7492 3.32833L15.5672 0.146351C15.372 -0.0489113 15.0554 -0.0489113 14.8601 0.146351C14.6649 0.341613 14.6649 0.658195 14.8601 0.853458L17.6885 3.68188L14.8601 6.51031C14.6649 6.70557 14.6649 7.02216 14.8601 7.21742C15.0554 7.41268 15.372 7.41268 15.5672 7.21742L18.7492 4.03544ZM0.5 3.68188L0.5 4.18188L18.3957 4.18188V3.68188V3.18188L0.5 3.18188L0.5 3.68188Z" fill="#C9A882" />
                    </svg>
                </button>


            </div>
            <Footer />

        </section>
    )
}

export default CTA