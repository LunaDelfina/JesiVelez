

import { LabelTitulo, InputTexto } from './FormComponents.jsx'
import { SelectDisponibilidad, SelectEnvio, SelectPersonalizable } from './SelectForm.jsx'

const CardStyle="flex flex-col gap-1 bg-white rounded-lg w-full "

const InfoForm =()=>{
    return(
    <div   className="grid grid-cols-2 gap-4 mt-2">
        <div className={CardStyle}>
            <LabelTitulo titulo="Tiempo de entrega"/>
            <InputTexto id="DeliveryTime" ph="ej.2-3 Semanas" />
        </div>
        <div>
            <LabelTitulo titulo="Disponibilidad"/>
            <SelectDisponibilidad />
        </div>
        <div>
            <LabelTitulo titulo="Envio"/>
            <SelectEnvio />
        </div>
        <div>
            <LabelTitulo titulo="¿Es personalizable?"/>
            <SelectPersonalizable />
        </div>

    </div>)
}

export default InfoForm