import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import '../App.css'
import Hero from '../Components/IndexComponents/Hero.jsx'
import Categorias from '../Components/CategoriesComponents/Categories.jsx'
import Destacados from '../Components/DestacadosComponents/Destacados.jsx'
import Peinados from '../Components/PeinadosComponents/Peinados.jsx'
import Reviews from '../Components/ReviewComponents/Reviews.jsx'
import CTA from '../Components/CTAComponents/CTA.jsx'

export default function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [hash])

  return (
    <div className="App h-[100vh] overflow-y-scroll snap-y snap-mandatory">
      <Hero />
      <Categorias />
      <Destacados />
      <Peinados />
      <Reviews />
      <CTA />
    </div>
  )
}
