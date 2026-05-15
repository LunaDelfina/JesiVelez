
//import Select from "react-select"
import CreatableSelect from 'react-select/creatable';

const SelectBase = ({ id, placeholder, options, onChange, nombreEntidad = "opción", isMulti }) => (
    <CreatableSelect
        id={id}
        placeholder={placeholder}
        options={options}
        onChange={onChange}
        isMulti={isMulti}
        formatCreateLabel={(input) => `Crear nueva ${nombreEntidad} "${input}"`}
        unstyled
        classNames={{
            control: ({ isFocused }) =>
                `border-1 rounded-sm px-2 py-2 transition-colors duration-200 ${isFocused ? "border-marron_oscuro" : "border-marron_claro"}`,
            valueContainer: () => "p-0",
            input: () => "m-0 p-0",
            placeholder: () => "text-marron_claro/60 m-0",
            singleValue: () => "text-carbon_oscuro/75 m-0",
            menu: () => "bg-white border-1 border-marron_claro rounded-sm mt-1 shadow-sm",
            option: ({ isFocused, isSelected }) =>
                `px-3 py-2 cursor-pointer text-carbon_oscuro/75 ${isSelected ? "bg-marron_oscuro text-white" : isFocused ? "bg-marron_claro/20" : ""}`,
            multiValue: () => "bg-marron_claro/20 border-1 border-marron_claro rounded-sm px-1 flex items-center gap-1 mr-1",
            multiValueLabel: () => "text-carbon_oscuro/75 text-sm",
            multiValueRemove: () => "text-marron_claro hover:text-marron_oscuro transition-colors duration-200",
            dropdownIndicator: () => "text-marron_claro px-1",
            indicatorSeparator: () => "bg-marron_claro",
        }}
        styles={{ control: (base) => ({ ...base, fontFamily: "var(--secundario)" }) }}
    />
)

const categoriasOpciones = [
    { value: '01', label: 'Tocados' },
    { value: '02', label: 'Pins' },
    { value: '03', label: 'Guias' },
    { value: '04', label: 'Joyeria' },
]

const disponibilidadOpciones = [
    { value: 'disponible', label: 'Disponible' },
    { value: 'por_encargo', label: 'Por encargo' },
    { value: 'sin_stock', label: 'Sin stock' },
]

const envioOpciones = [
    { value: '01', label: 'Si, a todo el pais' },
    { value: '02', label: 'Alta Gracia y alrededores' },
]

const esPersonalizable = [
    { value: 'si', label: 'Si,consultame' },
    { value: 'no', label: 'No, es un producto único' },
]

export const SelectCategoria = ({ onChange, isMulti }) => (
    <SelectBase id="categoria" placeholder="ej. Tocados" options={categoriasOpciones} onChange={onChange} nombreEntidad="categoria" isMulti={isMulti} />
)

export const SelectDisponibilidad = ({ onChange }) => (
    <SelectBase id="disponibilidad" placeholder="ej. Disponible" options={disponibilidadOpciones} onChange={onChange} />
)
export const SelectEnvio = ({ onChange }) => (
    <SelectBase id="disponibilidad" placeholder="ej. A todo el pais" options={envioOpciones} onChange={onChange} />
)

export const SelectPersonalizable = ({ onChange }) => (
    <SelectBase id="personalizable" placeholder="ej. Si, consultame" options={esPersonalizable} onChange={onChange} />
)
