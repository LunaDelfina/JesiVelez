import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import OrderLogo from "../../assets/images/icons/OrderBy.svg"

const SORT_OPTIONS = [
    { value: "",            label: "Recientes" },
    { value: "precio-asc",  label: "Precio: menor a mayor" },
    { value: "precio-desc", label: "Precio: mayor a menor" },
    { value: "nombre-asc",  label: "Nombre: A-Z" },
]

const CatalogAmuntOrder = ({ amount }) => {
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()
    const ordenActual = searchParams.get("orden") ?? ""

    const handleSort = (value) => {
        setSearchParams(prev => {
            const next = new URLSearchParams(prev)
            value ? next.set("orden", value) : next.delete("orden")
            return next
        })
        setDrawerOpen(false)
    }

    return (
        <>
            <div className="flex justify-between items-center w-full text-sm text-marron_oscuro/75 font-light">
                <p>{amount} piezas disponibles</p>
                <button
                    onClick={() => setDrawerOpen(true)}
                    className="flex items-center gap-2 uppercase tracking-[0.1em] hover:text-marron_oscuro transition-colors duration-200 cursor-pointer"
                >
                    <img src={OrderLogo} alt="order by" />
                    Ordenar por
                </button>
            </div>

            {/* Overlay */}
            <div
                onClick={() => setDrawerOpen(false)}
                className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
                    drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
            />

            {/* Drawer */}
            <div
                className={`fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-2xl shadow-xl transition-transform duration-300 ease-in-out ${
                    drawerOpen ? "translate-y-0" : "translate-y-full"
                }`}
            >
                <div className="flex justify-center pt-3 pb-1">
                    <div className="w-10 h-1 rounded-full bg-marron_oscuro/20" />
                </div>
                <div className="px-6 pb-8 pt-4">
                    <h3 className="text-xs tracking-[0.2em] uppercase text-marron_oscuro/50 mb-4">
                        Ordenar por
                    </h3>
                    <div className="flex flex-col gap-1">
                        {SORT_OPTIONS.map((opt) => (
                            <button
                                key={opt.value}
                                onClick={() => handleSort(opt.value)}
                                className={`w-full text-left px-4 py-3 rounded-lg md:text-sm text-xs tracking-[0.1em] uppercase transition-colors duration-200 cursor-pointer ${
                                    ordenActual === opt.value
                                        ? "bg-marron_oscuro text-white"
                                        : "text-marron_oscuro/75 hover:bg-marron_oscuro/10"
                                }`}
                            >
                                {opt.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CatalogAmuntOrder
