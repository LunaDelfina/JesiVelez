
const Titulo = "text-sm text-marron_oscuro font-bold uppercase tracking-[0.05em]"
const Input = "bg-transparent border-1 rounded-sm px-2 border-marron_claro text-carbon_oscuro/75 placeholder-marron_claro/60 py-2 outline-none focus:border-marron_oscuro transition-colors duration-200"


export const LabelTitulo = ({ titulo }) => {
    return (
        <label
            htmlFor="text"
            className={Titulo}
            style={{ fontFamily: "var(--secundario)" }}
        >
            {titulo}
        </label>)
}

export const InputTexto = ({ id, ph, value, onChange }) => {
    return (
        <input
            id={id}
            type="text"
            placeholder={ph}
            value={value}
            onChange={onChange}
            className={Input}
            style={{ fontFamily: "var(--secundario)" }}
        />
    )
}
export const InputPrecio = ({ id, value, onChange }) => {
    return (
        <div className="flex border-1 border-marron_claro rounded-sm focus-within:border-marron_oscuro transition-colors duration-200">
            <span
                className="px-2 py-2 text-marron_claro/60 border-r-1 border-marron_claro select-none"
                style={{ fontFamily: "var(--secundario)" }}
            >
                $
            </span>
            <input
                id={id}
                type="number"
                placeholder="0"
                min="0"
                value={value}
                onChange={onChange}
                className="bg-transparent px-2 py-2 text-carbon_oscuro/75 placeholder-marron_claro/60 outline-none w-full"
                style={{ fontFamily: "var(--secundario)" }}
            />
        </div>
    )
}
export const AreaTexto = ({ id, ph, value, onChange }) => {
    return (
        <textarea
            id={id}
            placeholder={ph}
            value={value}
            onChange={onChange}
            className={`${Input} h-[20vh] resize-none`}
            style={{ fontFamily: "var(--secundario)" }}
        />
    )
}

 