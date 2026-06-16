import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import MobileMenu from './NavComponents/MobileMenu'

const NAV_LINKS = [
    { to: "/", label: "INICIO" },
    { to: "/productos", label: "COLECCIÓN" },
]

const navLinkClass = "px-4 py-2 font-light tracking-[0.1em] hover:bg-marron_claro hover:text-blanco transition-colors duration-300"

const NavBar = ({ line }) => {
    const { user, logout } = useAuth()

    return (
        <div className="pt-5 md:pt-9">
            <div className="flex justify-between items-start">
                <Link to="/" className="flex flex-col md:gap-[1vh] gap-1">
                    <h1 className="text-blanco md:text-4xl text-3xl font-principal font-bold">Jesi Velez</h1>
                    <h3 className="tracking-[0.15em] text-marron_claro text-xs">Tocados · Alta Gracia, Córdoba</h3>
                </Link>
                <nav className="hidden md:flex items-center">
                    {NAV_LINKS.map(({ to, label }) => (
                        <Link key={to} to={to} className={navLinkClass}>{label}</Link>
                    ))}
                    {user ? (
                        <button onClick={logout} className={navLinkClass}>CERRAR SESIÓN</button>
                    ) : (
                        <Link to="/IniciarSesion" className={navLinkClass}>INGRESAR</Link>
                    )}
                    <a
                        href="https://wa.me/5493547598074?text=Hola!%20Me%20gustar%C3%ADa%20hacer%20una%20consulta."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-marron_claro text-carbon_oscuro px-4 py-2 font-light tracking-[0.1em] hover:bg-transparent hover:text-marron_claro border border-transparent hover:border-marron_claro transition-colors duration-300"
                    >
                        CONSULTAR
                    </a>
                </nav>
                <MobileMenu user={user} logout={logout} />
            </div>
            <div className= {`${line? "flex" : "hidden" } "w-[90%] h-[1px] bg-marron_claro/50 mt-5 md:hidden mx-auto`}></div>
        </div>
    )
}

export default NavBar