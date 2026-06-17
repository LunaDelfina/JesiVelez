
import MainTitle from "../Titles.jsx";
import { Link } from 'react-router-dom'
import CategorieData from "./CategoriesData.jsx";

const CategorieCard = ({ title, number, img, categorie }) => {
    return(
        <Link to={"/productos?categoria=" + categorie} className="relative overflow-hidden group cursor-pointer">
            <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-carbon_oscuro flex flex-col justify-end p-4 mt-[40%]">
                <p className="text-marron_claro text-sm">{number}</p>
                <h3 className="text-crema md:text-4xl text-2xl font-bold font-principal mb-1">{title}</h3>
            </div>
        </Link>
    )
}


const Categorias = () => {
    return(
        <section className="bg-gradient-to-b from-carbon_oscuro to-carbon_claro h-[100vh] snap-start flex flex-col justify-center md:px-[15%] px-10 px-6 py-8 md:py-0 lg:gap-0 gap-10 overflow-x-clip">
            <MainTitle eyebrow="Explora las categorias" title="Cada pieza," accent="un mundo propio"/>

            <div className="grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-4 lg:gap-8 mt-4 lg:mt-10 h-[55vh] lg:h-[420px] min-h-0">
                {CategorieData.map((cat) => (
                    <CategorieCard key={cat.number} title={cat.title} number={cat.number} img={cat.img} categorie={cat.categorie}/>
                ))}
            </div>

        </section>
    )
}

export default Categorias