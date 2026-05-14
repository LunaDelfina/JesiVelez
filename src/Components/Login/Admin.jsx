import { useAuth } from "../../context/AuthContext"

const Admin = () => {
  const { user, logout } = useAuth()
  return (
    <div>
      <h1>Bienvenida, {user?.email}</h1>
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  )
}

export default Admin