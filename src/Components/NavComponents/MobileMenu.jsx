import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const MobileMenu = ({ user, logout }) => {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const app = document.querySelector('.App')
        if (app) app.style.overflow = open ? 'hidden' : ''
        return () => { if (app) app.style.overflow = '' }
    }, [open])

    return (
        <div className="md:hidden">

            {/* Botón hamburguesa */}
            <button
                onClick={() => setOpen(!open)}
                className="flex flex-col gap-[5px] p-2 cursor-pointer"
            >
                <span className={`block w-6 h-[1.5px] bg-blanco transition-all duration-300 ${open ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
                <span className={`block w-6 h-[1.5px] bg-blanco transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
                <span className={`block w-6 h-[1.5px] bg-blanco transition-all duration-300 ${open ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
            </button>

            {/* Panel */}
            <div className={`
                fixed top-0 right-0 h-[100vh] w-[75vw] max-w-[320px] z-50
                bg-carbon_claro flex flex-col
                transition-transform duration-500 ease-in-out
                ${open ? 'translate-x-0' : 'translate-x-full'}
            `}>
                {/* Header del panel */}
                <div className="flex justify-between items-center px-8 pt-10 pb-8 border-b border-marron_claro/20">
                    <div>
                        <p className="text-blanco font-principal font-bold text-2xl">Jesi Velez</p>
                        <p className="text-marron_claro text-xs tracking-widest mt-1">Tocados · Alta Gracia</p>
                    </div>
                    <button
                        onClick={() => setOpen(false)}
                        className="text-marron_claro hover:text-blanco transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-6 h-6">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                {/* Links */}
                <nav className="flex flex-col px-8 pt-8 gap-1 flex-1">
                    {[
                        { to: "/", label: "Inicio" },
                        { to: "/productos", label: "Colección" },
                    ].map(({ to, label }) => (
                        <Link
                            key={to}
                            to={to}
                            onClick={() => setOpen(false)}
                            className="text-blanco font-principal text-3xl font-bold py-3 border-b border-marron_claro/10 hover:text-marron_claro transition-colors duration-300"
                        >
                            {label}
                        </Link>
                    ))}

                    {user ? (
                        <button
                            onClick={() => { logout(); setOpen(false) }}
                            className="text-blanco font-principal text-3xl font-bold py-3 border-b border-marron_claro/10 hover:text-marron_claro transition-colors duration-300 text-left"
                        >
                            Salir
                        </button>
                    ) : (
                        <Link
                            to="/IniciarSesion"
                            onClick={() => setOpen(false)}
                            className="text-blanco font-principal text-3xl font-bold py-3 border-b border-marron_claro/10 hover:text-marron_claro transition-colors duration-300"
                        >
                            Ingresar
                        </Link>
                    )}
                </nav>

                {/* CTA abajo */}
                <div className="px-8 pb-12">
                    <a
                        href="https://wa.me/5493547598074?text=Hola!%20Me%20gustar%C3%ADa%20hacer%20una%20consulta."
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setOpen(false)}
                        className="block w-full text-center py-4 border border-marron_claro text-marron_claro tracking-widest text-sm uppercase hover:bg-marron_claro hover:text-carbon_oscuro transition-colors duration-300"
                    >
                        Consultar
                    </a>
                    <p className="text-marron_claro/40 text-xs text-center mt-6 tracking-widest">+200 novias acompañadas desde 2019</p>
                </div>
            </div>

            {/* Overlay */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={() => setOpen(false)}
                />
            )}
        </div>
    )
}

export default MobileMenu