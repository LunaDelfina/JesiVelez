

const ReviewCards = ({ review }) => {
    return (
        <div className={`relative p-6 md:p-8 flex flex-col gap-3 bg-gradient-to-b from-carbon_claro to-carbon_oscuro border-carbon_oscuro border-1 shadow-lg text-crema justify-center h-full w-full min-w-0 ${review.destacado ? "border-crema/35" : ""}`}>
            <div>
                {review.destacado ? (
                    <p className="absolute uppercase top-0 tracking-[0.1em] bg-crema text-marron_oscuro px-4 py-2 text-sm">Destacado</p>
                ) : null}
            </div>
            <p className="font-principal font-bold md:text-xl lg:text-xl 2xl:text-2xl text-xl text-crema/75 italic break-words leading-snug">
            {review.review}</p>
            <div className="h-[1px] bg-marron_claro w-45  rounded-full "></div>
            <div className="flex gap-4 items-center">
                <div className="border-1 border-crema rounded-full md:w-10 md:h-10 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 w-9 h-9 flex items-center justify-center font-principal font-bold md:text-base lg:text-base 2xl:text-2xl text-sm italic">
                    <p>{review.initials}</p>
                </div>
                <div className="flex flex-col md:text-base lg:text-base 2xl:text-lg text-sm gap-0">
                    <p className="text-marron_claro">{review.name}</p>
                    <p className="text-marron_oscuro/75 italic text-xs">{review.rol} · {review.date}</p>
                </div>
            </div>
        </div>
    )
}

export default ReviewCards