import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const NAV_LINKS = [
    { to: "/", label: "INICIO" },
    { to: "/productos", label: "COLECCIÓN" },
]

const navLinkClass = "px-4 py-2 font-light tracking-[0.1em] hover:bg-marron_claro hover:text-blanco transition-colors duration-300"

const NavBar = () => {
    const { user, logout } = useAuth()

    return (
        <div className="flex pt-9 justify-between">
            <Link to="/" className="flex flex-col gap-[1vh]">
                <h1 className="text-blanco text-4xl font-principal font-bold">Jesi Velez</h1>
                <h3 className="tracking-[0.15em] text-marron_claro">Tocados · Alta Gracia, Córdoba</h3>
            </Link>
            <nav className="flex items-center">
                {NAV_LINKS.map(({ to, label }) => (
                    <Link key={to} to={to} className={navLinkClass}>{label}</Link>
                ))}

                {user ? (
                    <button onClick={logout} className={navLinkClass}>
                        CERRAR SESIÓN
                    </button>
                ) : (
                    <Link to="/IniciarSesion" className={navLinkClass}>
                        INGRESAR
                    </Link>
                )}

                <button className="bg-marron_claro text-carbon_oscuro px-4 py-2 font-light tracking-[0.1em] hover:bg-transparent hover:text-marron_claro border border-transparent hover:border-marron_claro transition-colors duration-300">
                    CONSULTAR
                </button>
            </nav>
        </div>
    )
}

export default NavBar