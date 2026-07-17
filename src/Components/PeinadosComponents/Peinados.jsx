import MainTitle from "../Titles"
import Cards from "./CardsPeinados.jsx";
const Pins=[
    {
        title: "Prueba Previa"
    },
    {
        title: "Asesoramiento Personalizado"
    },
    {
        title: "Alta Gracia y alrededores"
    }
]

const PinsCard = ({ title }) => {
    return (
        <div className="flex items-center md:gap-3 lg:gap-4 border border-marron_claro rounded-full px-3 py-2">

            <p className="md:text-sm lg:text-sm text-xs tracking-[0.1em] font-light">{title}</p>
        </div>
    )
}

const Peinados = () => {
    return (

         <section id="Peinados" className="bg-gradient-to-t from-carbon_oscuro to-carbon_claro h-[100vh] snap-start md:px-[15%] px-10 flex flex-col overflow-x-clip">
            <div className="flex h-full justify-center items-center ">
                <div className="flex flex-col md:gap-3 lg:gap-4 gap-2 max-w-sm">
                   <MainTitle eyebrow="Servicio de peinados" title="Tu peinado, " accent="Tu historia"/>
                   <div className="w-full h-[35vh] min-w-0 relative md:overflow-hidden overflow-visible md:hidden my-2">
                    <Cards />
                </div>
                    <p className="text-sm md:text-base">Te acompaño desde la primera prueba hasta el momento en que salís por esa puerta. Juntas encontramos el look que combina con tu tocado, tu rostro y lo que sentís ese día.</p>
                    
                    <div className="flex flex-wrap gap-3 mt-5">
                        {Pins.map((pin, index) => (
                            <PinsCard key={index} title={pin.title} />
                        ))}
                    </div>

                    <a
                        href="https://wa.me/5493547598074?text=Hola!%20Quiero%20consultar%20disponibilidad%20para%20un%20peinado."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 justify-center bg-marron_claro text-carbon_oscuro px-6 py-3 font-light md:text-base lg:text-lg text-sm tracking-[0.15em] hover:bg-transparent hover:text-marron_claro border border-transparent hover:border-marron_claro transition-colors duration-300 mt-5 cursor-pointer w-fit"
                    >
                        Consultar Disponibilidad
                        <svg className="transition-transform duration-300 group-hover:translate-x-1.5" width="19" height="8" viewBox="0 0 19 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.5 3.18188H0L0 4.18188H0.5L0.5 3.68188L0.5 3.18188ZM18.7492 4.03544C18.9445 3.84018 18.9445 3.52359 18.7492 3.32833L15.5672 0.146351C15.372 -0.0489113 15.0554 -0.0489113 14.8601 0.146351C14.6649 0.341613 14.6649 0.658195 14.8601 0.853458L17.6885 3.68188L14.8601 6.51031C14.6649 6.70557 14.6649 7.02216 14.8601 7.21742C15.0554 7.41268 15.372 7.41268 15.5672 7.21742L18.7492 4.03544ZM0.5 3.68188L0.5 4.18188L18.3957 4.18188V3.68188V3.18188L0.5 3.18188L0.5 3.68188Z" fill="currentColor" />
                        </svg>
                    </a>
                </div>
                <div className="flex-1 h-full overflow-hidden min-w-0 hidden md:flex lg:flex">
                    <Cards />
                </div>

            </div>

        </section>
    )
}

export default Peinados