const NavBar = () => {
    return (
        <div className="flex pt-9 justify-between ">
            <div className="gap-[1vh] flex flex-col">
                <h1 className="text-blanco text-4xl font-principal font-bold">Jesi Velez</h1>
                <h3 className="tracking-[0.15em] text-marron_claro">Tocados · Alta Gracia, Córdoba</h3>
            </div>
            <div>
                <button className="px-4 py-2 font-light tracking-[0.1em] hover:bg-marron_claro hover:text-blanco transition-colors duration-300">COLECCIÓN</button>
                <button className="px-4 py-2 font-light tracking-[0.1em] hover:bg-marron_claro hover:text-blanco transition-colors duration-300">PEINADOS</button>
                <button className=" px-4 py-2 font-light tracking-[0.1em] hover:bg-marron_claro hover:text-blanco transition-colors duration-300">OPINIONES</button>
                <button className="bg-marron_claro text-carbon_oscuro px-4 py-2 font-light tracking-[0.1em] hover:bg-transparent hover:text-marron_claro border border-transparent hover:border-marron_claro transition-colors duration-300">CONSULTAR</button>

            </div>
        </div>
    )
}

export default NavBar