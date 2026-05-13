const CardInfo = ({ Label, Value }) => {
    return (
        <div className="flex flex-col p-4 bg-white rounded-lg "> 
            <h4 className="font-bold text-marron_oscuro/75 uppercase tracking-[0.1em] text-sm">{Label}</h4>
            <p className="font-principal text-marron_oscuro text-lg font-bold">{Value}</p>
        </div>
    )
}

export default CardInfo