
import { useState } from "react"
import {useAuth} from "../../context/AuthContext.jsx"
const Bubble = () => {

    const user=useAuth().user
    const [isOpen, setIsOpen] = useState(false)

    if (!user) return null

    const toggleBubble = () => setIsOpen(!isOpen)


    return (
        <div className="fixed bottom-8 right-8 z-50   flex flex-col items-end gap-2 cursor-pointer">


            {isOpen && (
                <div className="flex flex-col gap-2 mouseover" >

                    <button id="editarBubble" className="bg-marron_oscuro/75 text-blanco text-xs font-light tracking-[0.1em] p-3 w-fit rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                    </button>


                    <button id="destacarBubble" className="bg-marron_oscuro/75 text-blanco text-xs font-light tracking-[0.1em] p-3 w-fit rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                    </button>


                    <button id="eliminarBubble" className="bg-marron_oscuro/75 text-blanco text-xs font-light tracking-[0.1em] p-3 w-fit rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                            <path d="M3 6h18" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        </svg>
                    </button>


                    <button id="inhabilitarBubble" className="bg-marron_oscuro/75 text-blanco text-xs font-light tracking-[0.1em] p-3 w-fit rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                            <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                            <line x1="1" y1="1" x2="23" y2="23" />
                        </svg>
                    </button>
                </div>
            )}


            {/* boton para abrir */}
            <div
                onClick={toggleBubble}
                className="bg-marron_oscuro/75 text-blanco text-xs font-light tracking-[0.1em] p-3 w-fit rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <circle cx="12" cy="5" r="2" />
                    <circle cx="12" cy="12" r="2" />
                    <circle cx="12" cy="19" r="2" />
                </svg>
            </div>
        </div>
    )
}

export default Bubble