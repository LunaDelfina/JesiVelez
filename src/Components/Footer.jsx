import { Link } from "react-router-dom"

const buttonBase = "hover:text-crema transition-colors duration-300 ";

const textCreditsBase= "md:text-xs text-[0.45rem] tracking-[0.1em]";

const Footer = ({ absolute }) => {
    return (
        <footer className={`${absolute ? 'absolute bottom-0 left-0' : ''} w-full bg-carbon_oscuro md:px-[15%] px-10 py-6`}>
            <div className="flex justify-between items-center">

                <div className="flex flex-col gap-1">
                    <h2 className="text-blanco font-principal font-bold md:text-xl text-lg tracking-wide">Jesi Velez</h2>
                    <p className="text-marron_claro md:text-xs text-[0.45rem] tracking-[0.15em] uppercase">Tocados · Alta Gracia, Córdoba</p>
                </div>

                <nav className="hidden md:flex gap-8 text-xs  tracking-[0.15em] text-marron_claro uppercase ">
                    <Link to="/productos" className={buttonBase}>Colección</Link>
                    <Link to="/#Peinados" className={buttonBase}>Peinados</Link>
                    <Link to="/#Opiniones" className={buttonBase}>Opiniones</Link>
                    <a
                        href="https://wa.me/5493547598074?text=Hola!%20Me%20gustar%C3%ADa%20hacer%20una%20consulta."
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonBase}
                    >
                        Consultar
                    </a>
                </nav>

                <div className="flex flex-col items-end gap-1">
                    <p className={`${textCreditsBase} text-marron_claro`}>Desarrollo y Diseño por LunaCodeStudio</p>
                    <p className={`${textCreditsBase} text-carbon_claro`}>© 2025 Jesi Vélez Tocados</p>
                </div>

            </div>
        </footer>
    )
}

export default Footer
