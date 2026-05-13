const Footer = () => {
    return (
        <footer className="absolute bottom-0 left-0 w-full bg-carbon_oscuro px-[15%] py-6">
            <div className="flex justify-between items-center">

                <div className="flex flex-col gap-1">
                    <h2 className="text-blanco font-principal font-bold text-xl tracking-wide">Jesi Velez</h2>
                    <p className="text-marron_claro text-xs tracking-[0.15em] uppercase">Tocados · Alta Gracia, Córdoba</p>
                </div>

                <nav className="flex gap-8 text-xs tracking-[0.15em] text-marron_claro uppercase">
                    <button className="hover:text-crema transition-colors duration-300">Colección</button>
                    <button className="hover:text-crema transition-colors duration-300">Peinados</button>
                    <button className="hover:text-crema transition-colors duration-300">Opiniones</button>
                    <button className="hover:text-crema transition-colors duration-300">Consultar</button>
                </nav>

                <div className="flex flex-col items-end gap-1">
                    <p className="text-xs text-marron_claro tracking-[0.1em]">Desarrollo y Diseño por LunaCodeStudio</p>
                    <p className="text-xs text-carbon_claro tracking-[0.1em]">© 2025 Jesi Vélez Tocados</p>
                </div>

            </div>
        </footer>
    )
}

export default Footer
