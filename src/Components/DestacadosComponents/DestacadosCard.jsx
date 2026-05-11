const DestacadoTemplate = ({ name, image, price, categorie }) => {
    return (
        <div className="flex flex-col cursor-pointer group">
            <div className="overflow-hidden h-80">
                <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-4xl font-principal text-marron_oscuro font-bold">{name}</h3>
            <p className="text-marron_claro">{categorie}</p>
            <div className="h-[1px] bg-marron_oscuro/30 my-2 rounded"></div>
            <p className="text-2xl text-marron_oscuro  italic font-light text-right">${price}</p>
        </div>
    )
}

// Ahora recibe productos como prop, no los importa directamente
const DestacadoCards = ({ productos }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productos.map((item) => (
                <DestacadoTemplate key={item.id} {...item} />
            ))}
        </div>
    )
}

export default DestacadoCards

