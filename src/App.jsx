
import './App.css'
import Hero from './Components/IndexComponents/Hero.jsx'
import Categorias from './Components/CategoriesComponents/Categories.jsx'
import Destacados from './Components/DestacadosComponents/Destacados.jsx'

function App() {


  return (
    <div className="App h-screen overflow-y-scroll snap-y snap-mandatory">
      <Hero />
      <Categorias />
    </div>
  )
}

export default App
