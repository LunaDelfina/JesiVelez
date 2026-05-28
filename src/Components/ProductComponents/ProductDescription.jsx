import MainTitle from "../Titles.jsx"
import Pins from "./MaterialsPins.jsx"
import InfoCard from "./InfoCard.jsx"
import BuyNow from "./BuyNow.jsx"
import Share from "./Share.jsx"

const line = "w-full h-[2px] bg-marron_oscuro/50 rounded my-6"
const title = " uppercase tracking-[0.1em] text-sm font-bold text-marron_oscuro mb-2"




const ProductDescription = ({ product }) => {
    

    
    return (
        <div className="flex flex-col w-full max-w-[50%] pb-15 h-fit py-10">
            <div>
                <MainTitle title={product.title} eyebrow={`colección 2026`} />
                <p className="font-light tracking-[0.1em] text-marron_oscuro/75 mt-2">{product.categorie} · Hecho a mano</p>
                <h2 className="text-2xl italic font-bold  tracking-[0.1em] text-marron_oscuro/75  mt-2">${product.price.toFixed(2)}</h2>
            </div>
            <div className={line} />
            <div>
                <h3 className={title}>Sobre esta pieza</h3>
                <p className="italic font-principal font-bold text-marron_oscuro/75 text-xl">{product.description}</p>
            </div>
            <div className={line} />
            <div>
                <h3 className={title}>Materiales</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                    {product.materials.map((material, index) => (
                        <Pins key={index} material={material} />
                    ))}
                </div>
            </div>
            <div className={line} />
            <div>
                <h3 className={title}>Información</h3>
                <div className="grid grid-cols-2 gap-4 mt-2">
                    {product.info.map((item, index) => (
                        <InfoCard key={index} Label={item.Label} Value={item.Value} />
                    ))}
                </div>
            </div>

            <div className={line} />
            <BuyNow price={product.price} />
            <Share />

        </div>
    )
}

export default ProductDescription