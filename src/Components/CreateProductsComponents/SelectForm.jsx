
//import Select from "react-select"
import CreatableSelect from 'react-select/creatable';

//import { supabase } from '../../supabase/client';



const SelectBase = ({ id, placeholder, options, value, onChange, onCreateOption, nombreEntidad = "opción", isMulti }) => (
    <CreatableSelect
        id={id}
        placeholder={placeholder}
        options={options}
        value={value}
        onChange={onChange}
        isMulti={isMulti}
        onCreateOption={onCreateOption}
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





export const disponibilidadOpciones = [
    { value: 'disponible', label: 'Disponible' },
    { value: 'por_encargo', label: 'Por encargo' },
    { value: 'sin_stock', label: 'Sin stock' },
]

export const envioOpciones = [
    { value: '01', label: 'Si, a todo el pais' },
    { value: '02', label: 'Alta Gracia y alrededores' },
]

export const esPersonalizableOpciones = [
    { value: 'si', label: 'Si, consultame' },
    { value: 'no', label: 'No, es un producto único' },
]

export const SelectCategoria = ({ onChange, value, isMulti, options, onCreateOption}) => (
    <SelectBase id="categoria" placeholder="ej. Tocados" options={options} value={value} onChange={onChange} onCreateOption={onCreateOption} nombreEntidad="categoria" isMulti={isMulti} />
)
export const SelectMateriales = ({ onChange, value, isMulti, options, onCreateOption}) => (
    <SelectBase id="materiales" placeholder="ej. Tela" options={options} value={value} onChange={onChange} onCreateOption={onCreateOption} nombreEntidad="material" isMulti={isMulti} />
)

export const SelectDisponibilidad = ({ onChange, value }) => (
    <SelectBase id="disponibilidad" placeholder="ej. Disponible" options={disponibilidadOpciones} value={value} onChange={onChange} />
)
export const SelectEnvio = ({ onChange, value }) => (
    <SelectBase id="envio" placeholder="ej. A todo el pais" options={envioOpciones} value={value} onChange={onChange} />
)

export const SelectPersonalizable = ({ onChange, value }) => (
    <SelectBase id="personalizable" placeholder="ej. Si, consultame" options={esPersonalizableOpciones} value={value} onChange={onChange} />
)
