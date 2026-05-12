import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Productos from './Pages/Productos.jsx'
import ProductoDetalle from './Pages/ProductoDetalle.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/productos/:id" element={<ProductoDetalle />} />
    </Routes>
  )
}
