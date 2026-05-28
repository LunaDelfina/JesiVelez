import LoadImage from "./LoadImage"
import FormularioIngreso from "./Form"
import { useRef, useState, useEffect } from "react"
import { supabase } from "../../supabase/client"

const Content = () => {
    const fileInputRef = useRef(null)
    const handleUploadClick = () => fileInputRef.current.click()

    const [files, setFiles] = useState([])
    const [titulo, setTitulo] = useState('')
    const [precio, setPrecio] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [categoria, setCategoria] = useState(null)
    const [materiales, setMateriales] = useState([])
    const [disponibilidad, setDisponibilidad] = useState(null)
    const [envio, setEnvio] = useState(null)
    const [personalizable, setPersonalizable] = useState(null)
    const [tiempoEntrega, setTiempoEntrega] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const [opcionesCategoria, setOpcionesCategoria] = useState([])
    const [opcionesMateriales, setOpcionesMateriales] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError(null)
        try {
            const { data: producto, error: errorProducto } = await supabase
                .from('productos')
                .insert({
                    titulo,
                    descripcion,
                    precio_desde: precio,
                    destacado: false,
                    activo: true,
                })
                .select()
                .single()

            if (errorProducto) throw errorProducto

            // Guardar relación con categoría
            if (categoria) {
                const { error: errorCategoria } = await supabase
                    .from('producto_categorias')
                    .insert({
                        producto_id: producto.id,
                        categoria_id: categoria.value
                    })
                if (errorCategoria) throw errorCategoria
            }

            // Guardar relaciones con materiales
            if (materiales.length > 0) {
                const relacionesMateriales = materiales.map(m => ({
                    producto_id: producto.id,
                    material_id: m.value
                }))
                const { error: errorMateriales } = await supabase
                    .from('producto_materiales')
                    .insert(relacionesMateriales)
                if (errorMateriales) throw errorMateriales
            }

            for (let i = 0; i < files.length; i++) {
                const file = files[i]
                const path = `productos/${producto.id}/${Date.now()}-${producto.titulo}_${i}`

                const { error: errorFoto } = await supabase.storage
                    .from('JesiVelez')
                    .upload(path, file)

                if (errorFoto) throw errorFoto

                await supabase.from('producto_fotos').insert({
                    producto_id: producto.id,
                    path,
                    tipo: file.type.startsWith('video') ? 'video' : 'imagen',
                    mime_type: file.type,
                    es_principal: i === 0,
                    orden: i,
                })
            }

            alert('¡Producto Publicado!')
            //va a los productos publicados
            window.location.href = '/productos'

        } catch (err) {
            setError('Hubo un error al publicar. Intentá de nuevo.')
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        const fetchCategorias = async () => {
            const { data, error } = await supabase
                .from('categorias')
                .select('id,nombre')
                .order('orden')

            console.log('categorias data:', data)
            console.log('categorias error:', error)

            if (error) {
                console.error(error)
                return
            }

            setOpcionesCategoria(data.map(c => ({
                value: c.id,
                label: c.nombre
            })))

        }
        fetchCategorias()
    }, [])

    useEffect(() => {
        const fetchMateriales = async () => {
            const { data, error } = await supabase
                .from('materiales')
                .select('id,nombre')
                .order('nombre')
            console.log('materiales data:', data)
            console.log('materiales error:', error)

            if (error) {
                console.error(error)
                return
            }
            setOpcionesMateriales(data.map(c => ({
                value: c.id,
                label: c.nombre
            })))
        }
        fetchMateriales()
    }, [])


    const handleCrearCategoria = async (inputValue) => {
        const { data, error } = await supabase
            .from('categorias')
            .insert({
                nombre: inputValue,
                slug: inputValue.toLowerCase().replace(/\s+/g, '-'),
                orden: opcionesCategoria.length + 1
            })
            .select()
            .single()

        console.log('crear categoria data:', data)
        console.log('crear categoria error:', error)

        if (error) {
            console.error(error)
            return
        }

        const nuevaOpcion = { value: data.id, label: data.nombre }
        setOpcionesCategoria(prev => [...prev, nuevaOpcion])
        setCategoria(nuevaOpcion)
    }



    const handleCrearMateriales = async (inputValue) => {
        const { data, error } = await supabase
            .from('materiales')
            .insert({
                nombre: inputValue,
            })
            .select()
            .single()

        console.log('crear material data:', data)
        console.log('crear material error:', error)

        if (error) {
            console.error(error)
            return
        }

        const nuevaOpcion = { value: data.id, label: data.nombre }
        setOpcionesMateriales(prev => [...prev, nuevaOpcion])
        setMateriales(prev => [...prev, nuevaOpcion])
    }


    return (
        <div className="w-full flex gap-10 justify-center px-[15%] items-start">
            <LoadImage onUploadClick={handleUploadClick} files={files} />
            <FormularioIngreso
                fileInputRef={fileInputRef}
                onFilesChange={setFiles}
                onSubmit={handleSubmit}
                loading={loading}
                error={error}
                titulo={titulo} setTitulo={setTitulo}
                precio={precio} setPrecio={setPrecio}
                descripcion={descripcion} setDescripcion={setDescripcion}
                categoria={categoria} setCategoria={setCategoria}
                materiales={materiales} setMateriales={setMateriales}
                disponibilidad={disponibilidad} setDisponibilidad={setDisponibilidad}
                envio={envio} setEnvio={setEnvio}
                personalizable={personalizable} setPersonalizable={setPersonalizable}
                tiempoEntrega={tiempoEntrega} setTiempoEntrega={setTiempoEntrega}
                opcionesCategoria={opcionesCategoria}
                onCrearCategoria={handleCrearCategoria}
                opcionesMateriales={opcionesMateriales}
                onCrearMateriales={handleCrearMateriales}
            />
        </div>
    )
}

export default Content