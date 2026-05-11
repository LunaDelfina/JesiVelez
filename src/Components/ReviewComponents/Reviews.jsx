import MainTitle from "../Titles.jsx"
const Reviews = () => {
    return (
        <section className="bg-gradient-to-b from-carbon_oscuro to-carbon_claro h-screen snap-start px-[15%] flex flex-col justify-center  gap-10">
            
                
                    <MainTitle eyebrow="Lo que dicen ellas" title="Palabras que nos " accent="llenan el alma"  />

                    <div className="flex w-full h-[40vh] gap-5">
                        <div className="bg-crema w-full h-full"></div>
                        <div className="bg-crema w-full h-full"></div>
                        <div className="bg-crema w-full h-full"></div>
                    </div>
               
            
        </section>
    )
}
export default Reviews