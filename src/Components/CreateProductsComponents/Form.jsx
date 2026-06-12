import { SelectCategoria, SelectDisponibilidad, SelectEnvio, SelectPersonalizable, SelectMateriales} from './SelectForm.jsx'
import { LabelTitulo, InputTexto, AreaTexto, InputPrecio } from './FormComponents.jsx'

const col = "flex flex-col w-full gap-2"
const divisor = "text-xs text-marron_claro/60 uppercase tracking-widest border-b border-marron_claro/30 pb-1 mb-1"

const FormularioIngreso = ({
    fileInputRef, onFilesChange, onSubmit, loading, error,
    titulo, setTitulo,
    precio, setPrecio,
    descripcion, setDescripcion,
    categoria, setCategoria,
    materiales, setMateriales,
    disponibilidad, setDisponibilidad,
    envio, setEnvio,
    personalizable, setPersonalizable,
    tiempoEntrega, setTiempoEntrega,
    opcionesCategoria, onCrearCategoria,
    opcionesMateriales, onCrearMateriales,
    esEdicion,
}) => {
    return (
        <div className="w-full max-w-[50%] flex flex-col gap-6 py-10">
            <form onSubmit={onSubmit} className="flex flex-col gap-6">

                {/* Nombre + Categoría */}
                <div className="flex gap-6">
                    <div className={col}>
                        <LabelTitulo titulo="Nombre de la pieza" />
                        <InputTexto id="Title" ph="ej. Aurora"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                        />
                    </div>
                    <div className={col}>
                        <LabelTitulo titulo="Categoría" />
                        <SelectCategoria
                            value={categoria}
                            onChange={(opcion) => setCategoria(opcion)}
                            options={opcionesCategoria}
                            onCreateOption={onCrearCategoria}
                        />
                    </div>
                </div>

                {/* Precio + Tiempo de entrega */}
                <div className="flex gap-6">
                    <div className={col}>
                        <LabelTitulo titulo="Precio" />
                        <InputPrecio id="Precio"
                            value={precio}
                            onChange={(e) => setPrecio(e.target.value)}
                        />
                    </div>
                    <div className={col}>
                        <LabelTitulo titulo="Tiempo de entrega" />
                        <InputTexto id="DeliveryTime" ph="ej. 2 a 3 semanas"
                            value={tiempoEntrega}
                            onChange={(e) => setTiempoEntrega(e.target.value)}
                        />
                    </div>
                </div>

                {/* Descripción */}
                <div className={col}>
                    <LabelTitulo titulo="Descripción" />
                    <AreaTexto id="Description" ph="ej. Tocado artesanal con flores secas..."
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                    />
                </div>

                {/* Materiales */}
                <div className={col}>
                    <LabelTitulo titulo="Materiales" />
                    <SelectMateriales
                        isMulti
                        value={materiales}
                        onChange={(opciones) => setMateriales(opciones)}
                        options={opcionesMateriales}
                        onCreateOption={onCrearMateriales}
                    />
                </div>

                {/* Logística */}
                <div className="flex flex-col gap-4">
                    <p className={divisor}>Detalles de envío y disponibilidad</p>
                    <div className="grid grid-cols-3 gap-4">
                        <div className={col}>
                            <LabelTitulo titulo="Disponibilidad" />
                            <SelectDisponibilidad
                                value={disponibilidad}
                                onChange={(opcion) => setDisponibilidad(opcion)}
                            />
                        </div>
                        <div className={col}>
                            <LabelTitulo titulo="Envío" />
                            <SelectEnvio
                                value={envio}
                                onChange={(opcion) => setEnvio(opcion)}
                            />
                        </div>
                        <div className={col}>
                            <LabelTitulo titulo="¿Personalizable?" />
                            <SelectPersonalizable
                                value={personalizable}
                                onChange={(opcion) => setPersonalizable(opcion)}
                            />
                        </div>
                    </div>
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                {/* Submit */}
                <button
                    type="submit"
                    disabled={loading}
                    className="mt-2 py-3 px-8 bg-marron_oscuro text-blanco text-sm uppercase tracking-widest rounded-sm hover:bg-carbon_claro transition-colors duration-300 self-end"
                    style={{ fontFamily: "var(--secundario)" }}
                >
                    {loading ? (esEdicion ? 'Guardando...' : 'Publicando...') : (esEdicion ? 'Guardar cambios' : 'Publicar pieza')}
                </button>

            </form>

            <input type="file" id="Fotos" multiple className="hidden"
                ref={fileInputRef}
                onChange={(e) => onFilesChange(Array.from(e.target.files))}
            />
        </div>
    )
}

export default FormularioIngreso