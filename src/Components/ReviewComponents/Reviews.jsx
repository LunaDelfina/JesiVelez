import MainTitle from "../Titles.jsx"
import Data from "./ReviewData.jsx"
import ReviewCards from "./ReviewCards.jsx"
import Stats from "./ReviewStats.jsx"
const Reviews = () => {
    return (
        <section className="bg-gradient-to-b from-carbon_oscuro to-carbon_claro h-screen snap-start px-[15%] flex flex-col justify-center  gap-10">
            
                
                    <MainTitle eyebrow="Lo que dicen ellas" title="Palabras que nos " accent="llenan el alma"  />

                    <div className="flex w-full h-[40vh] gap-10">
                        {Data.map((review)=>
                        <ReviewCards key={review.id} review={review} />)}
                    </div>
                    <Stats />
               
            
        </section>
    )
}
export default Reviews