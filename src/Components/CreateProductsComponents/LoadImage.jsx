import SliderImages from "../ProductComponents/SliderImg"



const EmptyState = ({onUploadClick }) => (
    <div className="flex flex-col items-center justify-center gap-4 md:h-full h-80 text-center px-10">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 text-marron_claro/40"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h2l2-3h10l2 3h2a1 1 0 011 1v11a1 1 0 01-1 1H3a1 1 0 01-1-1V8a1 1 0 011-1z" />
            <circle cx="12" cy="13" r="3.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="flex flex-col gap-1">
            <p
                className="text-2xl text-marron_claro/60"
                style={{ fontFamily: "var(--principal)" }}
            >
                Subí las fotos de tu pieza
            </p>
            <p
                className="text-xs text-marron_claro/40 uppercase tracking-widest"
                style={{ fontFamily: "var(--secundario)" }}
            >
                JPG, PNG o Video · Máximo 10 archivos
            </p>
        </div>
        <button
            type="button"
            className="cursor-pointer mt-2 border-1 border-marron_claro/50 text-marron_claro/60 text-xs uppercase tracking-widest px-6 py-2 rounded-sm hover:border-marron_oscuro hover:text-marron_oscuro transition-colors duration-300"
            style={{ fontFamily: "var(--secundario)" }}
            onClick={(e) => { e.stopPropagation(); onUploadClick(); }}
        >
            Seleccionar archivos
        </button>
    </div>
)
const LoadImage = ({ onUploadClick, files, existingUrls = [] }) => {
    const localUrls = files.map(f => URL.createObjectURL(f))
    const urls = localUrls.length > 0 ? localUrls : existingUrls

    if (urls.length === 0) return (
        <div
            className="w-full md:max-w-[50%] md:sticky top-[128px] md:h-[calc(100vh-128px)] h-80 flex flex-col py-10 cursor-pointer"
            onClick={onUploadClick}
        >
            <div className="flex-1 border border-dashed border-marron_claro/40 rounded-sm flex flex-col">
                <EmptyState onUploadClick={onUploadClick} />
            </div>
        </div>
    )

    return (
        <div className="md:relative w-full md:sticky top-[128px]">
            <SliderImages images={urls} bg="bg-blanco" />
            <button
                type="button"
                onClick={onUploadClick}
                className="md:absolute block bottom-0 left-0 z-20 text-xs uppercase tracking-widest px-4 py-2 bg-blanco/80 hover:bg-blanco text-marron_oscuro border-1 border-marron_claro/50 hover:border-marron_oscuro transition-colors duration-300 cursor-pointer"
                style={{ fontFamily: "var(--secundario)" }}
            >
                Cambiar fotos
            </button>
        </div>
    )
}


export default LoadImage
