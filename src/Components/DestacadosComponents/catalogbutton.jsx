
import { Link } from 'react-router-dom'
export default function CatalogButton() {
    return(
        <Link to="/productos" className="group tracking-[0.15em] relative overflow-hidden border flex items-center py-2.5 px-5 gap-3 border-marron_oscuro text-marron_oscuro rounded-xs h-fit cursor-pointer hover:bg-marron_oscuro hover:text-blanco hover:shadow-lg active:scale-95 transition-all duration-300 ease-out">
                    Ver catálogo completo
                    <svg className="transition-transform duration-300 group-hover:translate-x-1.5" width="19" height="8" viewBox="0 0 19 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 3.18188H0L0 4.18188H0.5L0.5 3.68188L0.5 3.18188ZM18.7492 4.03544C18.9445 3.84018 18.9445 3.52359 18.7492 3.32833L15.5672 0.146351C15.372 -0.0489113 15.0554 -0.0489113 14.8601 0.146351C14.6649 0.341613 14.6649 0.658195 14.8601 0.853458L17.6885 3.68188L14.8601 6.51031C14.6649 6.70557 14.6649 7.02216 14.8601 7.21742C15.0554 7.41268 15.372 7.41268 15.5672 7.21742L18.7492 4.03544ZM0.5 3.68188L0.5 4.18188L18.3957 4.18188V3.68188V3.18188L0.5 3.18188L0.5 3.68188Z" fill="currentColor" />
                    </svg>
        </Link>
    )
}