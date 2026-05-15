import { SelectCategoria, SelectDisponibilidad, SelectEnvio, SelectPersonalizable } from './SelectForm.jsx'
import { LabelTitulo, InputTexto, AreaTexto, InputPrecio } from './FormComponents.jsx'

const col = "flex flex-col w-full gap-2"
const divisor = "text-xs text-marron_claro/60 uppercase tracking-widest border-b border-marron_claro/30 pb-1 mb-1"

const FormularioIngreso = ({fileInputRef,onFilesChange}) => {
    return (
        <div className="w-full max-w-[50%] flex flex-col gap-6 py-10">

            {/* Nombre + Categoría */}
            <div className="flex gap-6">
                <div className={col}>
                    <LabelTitulo titulo="Nombre de la pieza" />
                    <InputTexto id="Title" ph="ej. Aurora" />
                </div>
                <div className={col}>
                    <LabelTitulo titulo="Categoría" />
                    <SelectCategoria />
                </div>
            </div>

            {/* Precio + Tiempo de entrega */}
            <div className="flex gap-6">
                <div className={col}>
                    <LabelTitulo titulo="Precio" />
                    <InputPrecio id="Precio" />
                </div>
                <div className={col}>
                    <LabelTitulo titulo="Tiempo de entrega" />
                    <InputTexto id="DeliveryTime" ph="ej. 2 a 3 semanas" />
                </div>
            </div>

            {/* Descripción */}
            <div className={col}>
                <LabelTitulo titulo="Descripción" />
                <AreaTexto id="Description" ph="ej. Tocado artesanal con flores secas y base de alambre..." />
            </div>

            {/* Materiales */}
            <div className={col}>
                <LabelTitulo titulo="Materiales" />
                <SelectCategoria isMulti />
            </div>

            {/* Sección logística */}
            <div className="flex flex-col gap-4">
                <p className={divisor} style={{ fontFamily: "var(--principal)" }}>Detalles de envío y disponibilidad</p>
                <div className="grid grid-cols-3 gap-4">
                    <div className={col}>
                        <LabelTitulo titulo="Disponibilidad" />
                        <SelectDisponibilidad />
                    </div>
                    <div className={col}>
                        <LabelTitulo titulo="Envío" />
                        <SelectEnvio />
                    </div>
                    <div className={col}>
                        <LabelTitulo titulo="¿Personalizable?" />
                        <SelectPersonalizable />
                    </div>
                </div>
            </div>

            {/* Submit */}
            <button
                type="submit"
                className="mt-2 py-3 px-8 bg-marron_oscuro text-blanco text-sm uppercase tracking-widest rounded-sm hover:bg-carbon_claro transition-colors duration-300 self-end"
                style={{ fontFamily: "var(--secundario)" }}
            >
                Publicar pieza
            </button>

            <input type="file" id="Fotos" multiple className="hidden" ref={fileInputRef} onChange={(e)=>onFilesChange(Array.from(e.target.files))}/>
        </div>
    )
}

export default FormularioIngreso