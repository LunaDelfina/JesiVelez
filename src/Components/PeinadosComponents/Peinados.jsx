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
        <div className="flex items-center gap-4 border border-marron_claro rounded-full px-3 py-2">
            
            <p className="text-sm tracking-[0.1em] font-light">{title}</p>
        </div>
    )
}

const Peinados = () => {
    return (

         <section className="bg-gradient-to-t from-carbon_oscuro to-carbon_claro h-screen snap-start px-[15%] flex flex-col  ">
            <div className="flex h-full justify-center items-center ">
                <div className="flex flex-col gap-4 max-w-sm">
                   <MainTitle eyebrow="Servicio de peinados" title="Tu peinado, " accent="Tu historia"/>
                    <p>Te acompaño desde la primera prueba hasta el momento en que salís por esa puerta. Juntas encontramos el look que combina con tu tocado, tu rostro y lo que sentís ese día.</p>
                    
                    <div className="flex flex-wrap gap-3 mt-5">
                        {Pins.map((pin, index) => (
                            <PinsCard key={index} title={pin.title} />
                        ))}
                    </div>

                    <button className="group flex items-center gap-3 justify-center bg-marron_claro text-carbon_oscuro px-6 py-3 font-light text-lg tracking-[0.15em] hover:bg-transparent hover:text-marron_claro border border-transparent hover:border-marron_claro transition-colors duration-300 mt-5 cursor-pointer">
                        Consultar Disponibilidad
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

export default Peinados