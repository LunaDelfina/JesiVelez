import { useRef, useState } from "react"
import MainTitle from "../Titles.jsx"
import Data from "./ReviewData.jsx"
import ReviewCards from "./ReviewCards.jsx"
import Stats from "./ReviewStats.jsx"

const Reviews = () => {
    const sliderRef = useRef(null);
    const [current, setCurrent] = useState(0);

    const handleScroll = () => {
        const el = sliderRef.current;
        if (!el) return;
        setCurrent(Math.round(el.scrollLeft / el.offsetWidth));
    };

    return (
        <section className="bg-gradient-to-b from-carbon_oscuro to-carbon_claro h-[100dvh] snap-start md:px-[15%] px-10 flex flex-col justify-center gap-10 overflow-x-clip">

            <MainTitle eyebrow="Lo que dicen ellas" title="Palabras que nos " accent="llenan el alma" />

            <div className="w-full overflow-hidden">
                <div
                    ref={sliderRef}
                    onScroll={handleScroll}
                    className="flex h-[40vh] gap-0 md:gap-10
                        overflow-x-auto snap-x snap-mandatory md:overflow-x-visible md:snap-none
                        [&::-webkit-scrollbar]:hidden"
                    style={{ scrollbarWidth: "none" }}
                >
                    {Data.map((review) => (
                        <div key={review.id} className="flex-none w-full snap-center md:flex-1 md:w-auto h-full">
                            <ReviewCards review={review} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex gap-2 justify-center md:hidden -mt-6">
                {Data.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => sliderRef.current?.scrollTo({ left: i * sliderRef.current.offsetWidth, behavior: "smooth" })}
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${i === current ? "bg-marron_claro" : "bg-crema/30"}`}
                    />
                ))}
            </div>

            <Stats />
        </section>
    )
}
export default Reviews
