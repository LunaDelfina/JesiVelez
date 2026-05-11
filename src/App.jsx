
import './App.css'
import Hero from './Components/IndexComponents/Hero.jsx'
import Categorias from './Components/CategoriesComponents/Categories.jsx'
import Destacados from './Components/DestacadosComponents/Destacados.jsx'
import Peinados from './Components/PeinadosComponents/Peinados.jsx'
import Reviews from './Components/ReviewComponents/Reviews.jsx'

function App() {


  return (
    <div className="App h-screen overflow-y-scroll snap-y snap-mandatory">
      <Hero />
      <Categorias />
      <Destacados />
      <Peinados />
      <Reviews />
    </div>
  )
}

export default App
