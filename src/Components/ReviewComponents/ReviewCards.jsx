

const ReviewCards = ({ review }) => {
    return (
        <div className={`relative p-10 flex flex-col gap-4 bg-gradient-to-b from-carbon_claro to-carbon_oscuro border-carbon_oscuro border-1 shadow-lg text-crema justify-center ${review.destacado ? "border-crema/35" : ""}`}>
            <div>
                {review.destacado ? (
                    <p className="absolute uppercase top-0 tracking-[0.1em] bg-crema text-marron_oscuro px-4 py-2 text-sm">Destacado</p>
                ) : null}
            </div>
            <p className="font-principal font-bold text-2xl  text-crema/75 italic" >{review.review}</p>
            <div className="h-[1px] bg-marron_claro w-45  rounded-full "></div>
            <div className="flex gap-4 items-center">
                <div className="border-1 border-crema rounded-full w-12 h-12 flex items-center justify-center font-principal font-bold text-2xl italic">
                    <p>{review.initials}</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-marron_claro">{review.name}</p>
                    <p className="text-marron_oscuro/75 italic text-xs">{review.rol} · {review.date}</p>
                </div>
            </div>
        </div>
    )
}

export default ReviewCards