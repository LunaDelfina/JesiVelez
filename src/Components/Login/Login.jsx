import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'



const Login = () => {

    const { login } = useAuth()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError(null)
        try {
            await login(email, password)
            navigate('/productos')
        } catch (err) {
            setError('Email o Contraseña incorrectos')
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className="flex justify-center items-center px-4 py-16">
            <div className="w-full max-w-md">
                <h1
                    className="text-center text-4xl text-marron_oscuro mb-2 font-bold"
                    style={{ fontFamily: "var(--principal)" }}
                >
                    Bienvenida
                </h1>
                <p
                    className="text-center text-marron_oscuro text-sm mb-10"
                    style={{ fontFamily: "var(--secundario)" }}
                >
                    Iniciá sesión para continuar
                </p>

                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-1">
                        <label
                            htmlFor="email"
                            className="text-marron_oscuro text-sm uppercase tracking-widest"
                            style={{ fontFamily: "var(--secundario)" }}
                        >
                            Correo electrónico
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="hola@ejemplo.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-transparent border-b border-marron_claro text-carbon_oscuro placeholder-marron_claro/60 py-2 outline-none focus:border-marron_oscuro transition-colors duration-200"
                            style={{ fontFamily: "var(--secundario)" }}
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label
                            htmlFor="password"
                            className="text-marron_oscuro text-sm uppercase tracking-widest"
                            style={{ fontFamily: "var(--secundario)" }}
                        >
                            Contraseña
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="bg-transparent border-b border-marron_claro text-carbon_oscuro placeholder-marron_claro/60 py-2 outline-none focus:border-marron_oscuro transition-colors duration-200"
                            style={{ fontFamily: "var(--secundario)" }}
                        />
                    </div>

                    <div className="flex justify-end">
                        <a
                            href="#"
                            className="text-marron_oscuro text-xs hover:text-carbon_oscuro transition-colors duration-200"
                            style={{ fontFamily: "var(--secundario)" }}
                        >
                            ¿Olvidaste tu contraseña?
                        </a>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="mt-4 bg-carbon_claro text-crema py-3 tracking-widest text-sm uppercase hover:bg-carbon_oscuro transition-colors duration-300 cursor-pointer"
                        style={{ fontFamily: "var(--secundario)" }}
                    >
                        {loading ? 'Ingresando...' : 'Ingresar'}
                    </button>
                    {error && (
                        <p className="text-red-500 text-sm text-center">{error}</p>
                    )}
                </form>

                <p
                    className="text-center text-marron_oscuro text-sm mt-8"
                    style={{ fontFamily: "var(--secundario)" }}
                >
                    ¿No tenés cuenta?{" "}
                    <a
                        href="#"
                        className="text-carbon_oscuro underline underline-offset-4 hover:text-marron_oscuro transition-colors duration-200"
                    >
                        Registrate
                    </a>
                </p>
            </div>
        </div>

    )
}

export default Login