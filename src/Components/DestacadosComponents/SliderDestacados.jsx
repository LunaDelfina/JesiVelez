import { useState } from "react"
import DestacadoCards from "./DestacadosCard.jsx"
import DestacadosData from "./DestacadosData.jsx"

const ITEMS_POR_PAGINA = 4

const SliderDestacados = () => {
    const [pagina, setPagina] = useState(0)
    const totalPaginas = Math.ceil(DestacadosData.length / ITEMS_POR_PAGINA)
    
    const productosPagina = DestacadosData.slice(
        pagina * ITEMS_POR_PAGINA,
        pagina * ITEMS_POR_PAGINA + ITEMS_POR_PAGINA
    )

    return (
        <div className="flex flex-col gap-8 w-full">
            <DestacadoCards productos={productosPagina} />

            {/* Dots */}
            <div className="flex justify-center gap-2">
                {Array.from({ length: totalPaginas }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setPagina(i)}
                        className={` cursor-pointer h-2  transition-all duration-300 ${
                            i === pagina ? "w-10 bg-marron_oscuro" : "w-6 bg-crema"
                        }`}
                    />
                ))}
            </div>
        </div>
    )
}

export default SliderDestacados