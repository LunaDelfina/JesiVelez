import OrderLogo from "../../assets/images/icons/OrderBy.svg"

const CatalogAmuntOrder=({amount})=>{
    return(
        <div className="flex justify-between items-center w-full  text-sm text-marron_oscuro/75 font-light">
            <p className="">{amount} piezas disponibles</p>
            <div>
            <button className="flex items-center gap-2 uppercase">
                <img src={OrderLogo} alt="order by" />
                Ordenar por
            </button>
        </div>
        </div>
        
    )
}

export default CatalogAmuntOrder