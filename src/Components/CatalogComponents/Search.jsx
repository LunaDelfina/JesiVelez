import { Link, useSearchParams } from "react-router-dom";
import { useState, useRef, useEffect, useCallback } from "react";
import Lupa from "../../assets/images/icons/Lupa.svg";
import Categories from "./CategoriesData.jsx";
import { useAuth } from "../../context/AuthContext";

const GAP = 12;

const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { user } = useAuth();
    const CategoriaSeleccionada = searchParams.get("categoria");
    const buscarActual = searchParams.get("buscar") ?? "";
    const [visibleCount, setVisibleCount] = useState(Categories.length);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const containerRef = useRef(null);
    const pillRefs = useRef([]);
    const overflowRef = useRef(null);

    const handleSearch = (e) => {
        const val = e.target.value;
        setSearchParams(prev => {
            const next = new URLSearchParams(prev);
            if (val) next.set("buscar", val);
            else next.delete("buscar");
            return next;
        });
    };

    const recalculate = useCallback(() => {
        if (!containerRef.current || !overflowRef.current) return;
        const maxW = containerRef.current.offsetWidth;
        const overflowW = overflowRef.current.offsetWidth;
        let used = 0;
        let count = 0;

        for (let i = 0; i < Categories.length; i++) {
            const el = pillRefs.current[i];
            if (!el) break;
            const w = el.offsetWidth;
            const prefix = count > 0 ? GAP : 0;
            const isLast = i === Categories.length - 1;
            const fits = isLast
                ? used + prefix + w <= maxW
                : used + prefix + w + GAP + overflowW <= maxW;

            if (fits) {
                used += prefix + w;
                count++;
            } else {
                break;
            }
        }

        setVisibleCount(Math.max(1, count));
    }, []);

    useEffect(() => {
        recalculate();
        const ro = new ResizeObserver(recalculate);
        if (containerRef.current) ro.observe(containerRef.current);
        return () => ro.disconnect();
    }, [recalculate]);

    useEffect(() => {
        if (drawerOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [drawerOpen]);

    const hiddenCount = Categories.length - visibleCount;

    return (
        <>
            <div className="w-full md:w-fit lg:w-fit flex flex-col items-center gap-4">
                {/* Contenedor invisible solo para medir anchos de pills */}
                <div
                    aria-hidden="true"
                    style={{
                        position: "absolute",
                        top: "-9999px",
                        visibility: "hidden",
                        pointerEvents: "none",
                        display: "flex",
                        gap: `${GAP}px`,
                    }}
                >
                    {Categories.map((cat, i) => (
                        <span
                            key={i}
                            ref={el => (pillRefs.current[i] = el)}
                            className="shrink-0 md:text-sm text-xs tracking-[0.1em] px-3 py-1 border rounded-md uppercase whitespace-nowrap"
                        >
                            {cat.title}
                        </span>
                    ))}
                    <span
                        ref={overflowRef}
                        className="shrink-0 md:text-sm text-xs tracking-[0.1em] px-3 py-1 border rounded-md uppercase whitespace-nowrap"
                    >
                        +{Categories.length} categorías
                    </span>
                </div>

                <div className="relative flex items-center w-full">
                    <input
                        value={buscarActual}
                        onChange={handleSearch}
                        className="bg-white text-marron_oscuro/75 tracking-[0.1em] pl-4 pr-10 w-full py-2 border border-marron_oscuro/50 focus:outline-none focus:ring-2 focus:ring-marron_oscuro/50 rounded-md"
                        type="text"
                        placeholder="¿Qué estás buscando?"
                    />
                    <img src={Lupa} alt="buscar" className="absolute right-3 w-4 h-4 opacity-50 pointer-events-none" />
                </div>

                <div ref={containerRef} className="flex gap-3 w-full overflow-hidden">
                    {Categories.slice(0, visibleCount).map((cat, i) => (
                        <Link
                            key={i}
                            to={`/productos?categoria=${cat.title}`}
                            className={`shrink-0 whitespace-nowrap md:text-sm text-xs tracking-[0.1em] px-3 py-1 border rounded-md transition-colors duration-300 uppercase ${
                                CategoriaSeleccionada === cat.title
                                    ? "bg-marron_oscuro text-white border-marron_oscuro"
                                    : "text-marron_oscuro/75 border-marron_oscuro/50 hover:bg-marron_oscuro/10"
                            }`}
                        >
                            {cat.title}
                        </Link>
                    ))}
                    {hiddenCount > 0 && (
                        <button
                            onClick={() => setDrawerOpen(true)}
                            className="shrink-0 whitespace-nowrap md:text-sm text-xs tracking-[0.1em] px-3 py-1 border rounded-md uppercase text-marron_oscuro/75 border-marron_oscuro/50 hover:bg-marron_oscuro/10 transition-colors duration-300 cursor-pointer"
                        >
                            +{hiddenCount} {hiddenCount === 1 ? "categoría" : "categorías"}
                        </button>
                    )}
                </div>

                {user && (
                    <div className="flex w-full">
                        <Link
                            to="/productos?categoria=Deshabilitados"
                            className={`shrink-0 whitespace-nowrap md:text-sm text-xs tracking-[0.1em] px-3 py-1 border rounded-md uppercase transition-colors duration-300 ${
                                CategoriaSeleccionada === "Deshabilitados"
                                    ? "bg-marron_oscuro text-white border-marron_oscuro"
                                    : "text-marron_oscuro/40 border-marron_oscuro/25 hover:bg-marron_oscuro/10"
                            }`}
                        >
                            Deshabilitados
                        </Link>
                    </div>
                )}
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
                        Categorías
                    </h3>
                    <div className="flex flex-col gap-1">
                        {Categories.map((cat, i) => (
                            <Link
                                key={i}
                                to={`/productos?categoria=${cat.title}`}
                                onClick={() => setDrawerOpen(false)}
                                className={`w-full text-left px-4 py-3 rounded-lg md:text-sm text-xs tracking-[0.1em] uppercase transition-colors duration-200 ${
                                    CategoriaSeleccionada === cat.title
                                        ? "bg-marron_oscuro text-white"
                                        : "text-marron_oscuro/75 hover:bg-marron_oscuro/10"
                                }`}
                            >
                                {cat.title}
                            </Link>
                        ))}
                        {user && (
                            <>
                                <div className="h-[1px] bg-marron_oscuro/10 my-2" />
                                <Link
                                    to="/productos?categoria=Deshabilitados"
                                    onClick={() => setDrawerOpen(false)}
                                    className={`w-full text-left px-4 py-3 rounded-lg md:text-sm text-xs tracking-[0.1em] uppercase transition-colors duration-200 ${
                                        CategoriaSeleccionada === "Deshabilitados"
                                            ? "bg-marron_oscuro text-white"
                                            : "text-marron_oscuro/40 hover:bg-marron_oscuro/10"
                                    }`}
                                >
                                    Deshabilitados
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Search;
