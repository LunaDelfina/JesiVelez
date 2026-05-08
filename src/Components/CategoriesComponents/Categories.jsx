
import MainTitle from "../Titles.jsx";

import Tocados from "../../assets/images/categories/Tocados.png";
import Pins from "../../assets/images/categories/Pins.png";
import Guias from "../../assets/images/categories/Guias.png";
import Joyeria from "../../assets/images/categories/Joyeria.png";

const CategorieData = [
    {
        title: "Tocados",
        number: "01",
        img: Tocados
    },
    {
        title: "Pins",
        number: "02",
        img: Pins
    },
    {
        title: "Guias",
        number: "03",
        img: Guias
    },
    {
        title: "Joyeria",
        number: "04",
        img: Joyeria
    }
]

const CategorieCard = ({ title, number, img }) => {
    return(
        <div className="h-100 relative overflow-hidden group cursor-pointer">
            <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-carbon_oscuro flex flex-col justify-end p-4 mt-[40%]">
                <p className="text-marron_claro text-sm">{number}</p>
                <h3 className="text-crema text-4xl font-bold font-principal mb-2">{title}</h3>
            </div>
        </div>
    )
}


const Categorias =() =>{
    return(
        <section className="bg-gradient-to-b from-carbon_oscuro to-carbon_claro h-screen snap-start flex flex-col justify-center px-[15%] " >
            <MainTitle eyebrow="Explora las categorias" title="Cada pieza," accent="un mundo propio"/>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
                {CategorieData.map((cat)=>(
                    <CategorieCard key={cat.number} title={cat.title} number={cat.number} img={cat.img}/>
                ))}
            </div>

        </section>
    )
}

export default Categorias