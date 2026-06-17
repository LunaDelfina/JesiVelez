
import MainTitle from "../Titles.jsx";
import NavBar from "../NavBar.jsx";
import Cards from "./PolaroidDeck/Deck.jsx";
import card1 from "../../assets/images/cards/card1.png";
import card2 from "../../assets/images/cards/card2.png";
import card3 from "../../assets/images/cards/card3.png";


const HERO_CARDS = [
  { url: card1 },
  { url: card2 },
  { url: card3 },
  
];

const Hero = () => {
    return (
        <section className="bg-gradient-to-t from-carbon_oscuro to-carbon_claro h-[100vh] snap-start md:px-[15%] px-10 flex flex-col overflow-x-clip">
            <NavBar line={true} />
            <div className="flex flex-1 min-h-0 justify-center items-center flex-col-reverse md:flex-row gap-4">
                <div className="flex flex-col md:gap-4 gap-2 max-w-sm text-sm md:text-base">
                    <MainTitle eyebrow="Accesorios para Novias" title="El día que " accent="siempre imaginaste" extra="empieza aquí" />
                    <p>Tocados, pins y velos diseñados a mano en Alta Gracia. Cada pieza, única como vos.</p>
                    <p className="italic">+200 novias acompañadas desde 2019</p>

                    <button className="group flex items-center gap-3 justify-center bg-marron_claro text-carbon_oscuro px-6 py-3 font-light md:text-lg text-sm tracking-[0.15em] hover:bg-transparent hover:text-marron_claro border border-transparent hover:border-marron_claro transition-colors duration-300 mt-5 cursor-pointer">
                        Quiero mi tocado ideal
                        <svg className="transition-transform duration-300 group-hover:translate-x-1.5" width="19" height="8" viewBox="0 0 19 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.5 3.18188H0L0 4.18188H0.5L0.5 3.68188L0.5 3.18188ZM18.7492 4.03544C18.9445 3.84018 18.9445 3.52359 18.7492 3.32833L15.5672 0.146351C15.372 -0.0489113 15.0554 -0.0489113 14.8601 0.146351C14.6649 0.341613 14.6649 0.658195 14.8601 0.853458L17.6885 3.68188L14.8601 6.51031C14.6649 6.70557 14.6649 7.02216 14.8601 7.21742C15.0554 7.41268 15.372 7.41268 15.5672 7.21742L18.7492 4.03544ZM0.5 3.68188L0.5 4.18188L18.3957 4.18188V3.68188V3.18188L0.5 3.18188L0.5 3.68188Z" fill="currentColor" />
                        </svg>
                    </button>
                </div>
                <div className="w-full h-[35vh] md:flex-1 md:h-full min-w-0">
                    <Cards cards={HERO_CARDS} />
                </div>

            </div>

        </section>
    )
}

export default Hero;