import { useState } from 'react';
import { supabase } from '../supabase/client';

const TestSupabase=()=>{
    const [resultado,setResultado]=useState(null)
    const [file,setFile]=useState(null)

    const handleTest=async()=>{
        const {data,error}=await supabase
        .from('productos')
        .insert({
            titulo:'producto de prueba',
            descripcion:'descripcion de prueba',
            precio_desde:1000,
            destacado:false,
            activo:true
        })
        .select()
        .single()

        if(error){
            setResultado('❌ Error: ' + error.message)

        }else {
            setResultado('✅ Producto creado con id: ' + data.id)
        }
    }

    const handleSubirFoto = async () => {
        if (!file){
            setResultado('❌ Seleccioná una foto primero')
            return
        }
        const path=`productos/test/${Date.now()}-${file.name}`

        const{error}=await supabase.storage
        .from('JesiVelez')
        .upload(path,file)
        if (error) {
            setResultado('❌ Error foto: ' + error.message)
        } else {
            setResultado('✅ Foto subida correctamente en: ' + path)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen gap-6">
            <button
                onClick={handleTest}
                className="bg-marron_oscuro text-blanco px-8 py-3 rounded"
            >
                Subir producto de prueba
            </button>

            <div className="flex flex-col items-center gap-3">
                <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <button
                    onClick={handleSubirFoto}
                    className="bg-marron_oscuro text-blanco px-8 py-3 rounded"
                >
                    Subir foto de prueba
                </button>
            </div>

            {resultado && <p>{resultado}</p>}
        </div>
    )
}

export default TestSupabase