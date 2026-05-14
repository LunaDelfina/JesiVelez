import { useState } from "react"

const ArrowLeft = () => (
    <svg width="19" height="8" viewBox="0 0 19 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
        <path d="M0.5 3.18188H0L0 4.18188H0.5L0.5 3.68188L0.5 3.18188ZM18.7492 4.03544C18.9445 3.84018 18.9445 3.52359 18.7492 3.32833L15.5672 0.146351C15.372 -0.0489113 15.0554 -0.0489113 14.8601 0.146351C14.6649 0.341613 14.6649 0.658195 14.8601 0.853458L17.6885 3.68188L14.8601 6.51031C14.6649 6.70557 14.6649 7.02216 14.8601 7.21742C15.0554 7.41268 15.372 7.41268 15.5672 7.21742L18.7492 4.03544ZM0.5 3.68188L0.5 4.18188L18.3957 4.18188V3.68188V3.18188L0.5 3.18188L0.5 3.68188Z" fill="currentColor" />
    </svg>
)

const ArrowRight = () => (
    <svg width="19" height="8" viewBox="0 0 19 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.5 3.18188H0L0 4.18188H0.5L0.5 3.68188L0.5 3.18188ZM18.7492 4.03544C18.9445 3.84018 18.9445 3.52359 18.7492 3.32833L15.5672 0.146351C15.372 -0.0489113 15.0554 -0.0489113 14.8601 0.146351C14.6649 0.341613 14.6649 0.658195 14.8601 0.853458L17.6885 3.68188L14.8601 6.51031C14.6649 6.70557 14.6649 7.02216 14.8601 7.21742C15.0554 7.41268 15.372 7.41268 15.5672 7.21742L18.7492 4.03544ZM0.5 3.68188L0.5 4.18188L18.3957 4.18188V3.68188V3.18188L0.5 3.18188L0.5 3.68188Z" fill="currentColor" />
    </svg>
)

const SliderImages = ({ images = [] }) => {
    const [active, setActive] = useState(0)

    if (images.length === 0) return (
        <div className="w-full max-w-[50%] h-full bg-crema" />
    )

    const prev = () => setActive(i => (i - 1 + images.length) % images.length)
    const next = () => setActive(i => (i + 1) % images.length)

    return (
        <div className="w-full max-w-[50%] flex flex-col gap-3 py-10 sticky top-[128px] h-[calc(100vh-128px)]">

            {/* Imagen principal */}
            <div className="relative flex-1 overflow-hidden bg-crema">
                {images.map((img, i) => (
                    <img
                        key={i}
                        src={img}
                        alt={`Vista ${i + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
                            i === active ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                    />
                ))}

                {images.length > 1 && (
                    <>
                        <button
                            onClick={prev}
                            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 text-marron_claro hover:text-marron_oscuro transition-colors duration-200 bg-blanco/60 hover:bg-blanco/90 p-3 cursor-pointer"
                            aria-label="Imagen anterior"
                        >
                            <ArrowLeft />
                        </button>
                        <button
                            onClick={next}
                            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 text-marron_claro hover:text-marron_oscuro transition-colors duration-200 bg-blanco/60 hover:bg-blanco/90 p-3 cursor-pointer"
                            aria-label="Siguiente imagen"
                        >
                            <ArrowRight />
                        </button>

                        {/* Contador */}
                        <span className="absolute bottom-3 right-4 z-20 text-xs tracking-[0.15em] text-marron_oscuro/75 bg-blanco/70 px-2 py-1">
                            {active + 1} / {images.length}
                        </span>
                    </>
                )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1">
                    {images.map((img, i) => (
                        <button
                            key={i}
                            onClick={() => setActive(i)}
                            className={`shrink-0 w-16 h-16 overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                                i === active
                                    ? "border-marron_oscuro opacity-100"
                                    : "border-transparent opacity-50 hover:opacity-80"
                            }`}
                            aria-label={`Ver imagen ${i + 1}`}
                        >
                            <img
                                src={img}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SliderImages
