import LoadImage from "./LoadImage"
import FormularioIngreso from "./Form"
import { useRef, useState, useEffect } from "react"
import { supabase } from "../../supabase/client"
import { disponibilidadOpciones, envioOpciones, esPersonalizableOpciones } from "./SelectForm"
import { useParams, useNavigate } from "react-router-dom"

const Content = () => {
    const { id } = useParams()
    const esEdicion = !!id
    const navigate = useNavigate()

    const fileInputRef = useRef(null)
    const handleUploadClick = () => fileInputRef.current.click()

    const [files, setFiles] = useState([])
    const [existingImageUrls, setExistingImageUrls] = useState([])
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

    useEffect(() => {
        if (!id) return

        const fetchProducto = async () => {
            const { data, error } = await supabase
                .from('productos')
                .select(`
                id,
                titulo,
                precio_desde,
                descripcion,
                tiempo_entrega,
                disponibilidad,
                envio,
                personalizable,
                producto_categorias ( categorias (id, nombre) ),
                producto_materiales ( materiales (id, nombre) ),
                producto_fotos ( path, es_principal, orden )
            `)
                .eq('id', id)
                .single()

            if (error) {
                console.error(error)
                return
            }

            setTitulo(data.titulo)
            setPrecio(data.precio_desde)
            setDescripcion(data.descripcion)
            setTiempoEntrega(data.tiempo_entrega ?? '')
            setDisponibilidad(disponibilidadOpciones.find(o => o.value === data.disponibilidad) ?? null)
            setEnvio(envioOpciones.find(o => o.value === data.envio) ?? null)
            setPersonalizable(esPersonalizableOpciones.find(o => o.value === data.personalizable) ?? null)
            setCategoria(
                data.producto_categorias[0]?.categorias
                    ? { value: data.producto_categorias[0].categorias.id, label: data.producto_categorias[0].categorias.nombre }
                    : null
            )
            setMateriales(
                data.producto_materiales.map(m => ({
                    value: m.materiales.id,
                    label: m.materiales.nombre
                }))
            )
            const fotos = [...data.producto_fotos].sort((a, b) => a.orden - b.orden)
            setExistingImageUrls(
                fotos.map(f => supabase.storage.from('JesiVelez').getPublicUrl(f.path).data.publicUrl)
            )
        }

        fetchProducto()
    }, [id])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError(null)
        try {
            let productoId = esEdicion ? id : null

            if (esEdicion) {
                const { error: errorProducto } = await supabase
                    .from('productos')
                    .update({
                        titulo,
                        descripcion,
                        precio_desde: precio,
                        envio: envio?.value ?? null,
                        personalizable: personalizable?.value ?? null,
                        tiempo_entrega: tiempoEntrega,
                        disponibilidad: disponibilidad?.value ?? null,
                    })
                    .eq('id', id)
                if (errorProducto) throw errorProducto

                await supabase.from('producto_categorias').delete().eq('producto_id', id)
                await supabase.from('producto_materiales').delete().eq('producto_id', id)
            } else {
                const { data: producto, error: errorProducto } = await supabase
                    .from('productos')
                    .insert({
                        titulo,
                        descripcion,
                        precio_desde: precio,
                        destacado: false,
                        activo: true,
                        envio: envio?.value ?? null,
                        personalizable: personalizable?.value ?? null,
                        tiempo_entrega: tiempoEntrega,
                        disponibilidad: disponibilidad?.value ?? null,
                    })
                    .select()
                    .single()
                if (errorProducto) throw errorProducto
                productoId = producto.id
            }

            if (categoria) {
                const { error: errorCategoria } = await supabase
                    .from('producto_categorias')
                    .insert({ producto_id: productoId, categoria_id: categoria.value })
                if (errorCategoria) throw errorCategoria
            }

            if (materiales.length > 0) {
                const { error: errorMateriales } = await supabase
                    .from('producto_materiales')
                    .insert(materiales.map(m => ({ producto_id: productoId, material_id: m.value })))
                if (errorMateriales) throw errorMateriales
            }

            if (files.length > 0) {
                if (esEdicion) {
                    const { data: fotosExistentes } = await supabase
                        .from('producto_fotos').select('path').eq('producto_id', id)
                    if (fotosExistentes?.length > 0) {
                        await supabase.storage.from('JesiVelez').remove(fotosExistentes.map(f => f.path))
                        await supabase.from('producto_fotos').delete().eq('producto_id', id)
                    }
                }
                for (let i = 0; i < files.length; i++) {
                    const file = files[i]
                    const path = `productos/${productoId}/${Date.now()}-${titulo}_${i}`
                    const { error: errorFoto } = await supabase.storage.from('JesiVelez').upload(path, file)
                    if (errorFoto) throw errorFoto
                    await supabase.from('producto_fotos').insert({
                        producto_id: productoId,
                        path,
                        tipo: file.type.startsWith('video') ? 'video' : 'imagen',
                        mime_type: file.type,
                        es_principal: i === 0,
                        orden: i,
                    })
                }
            }

            alert(esEdicion ? '¡Producto actualizado!' : '¡Producto Publicado!')
            navigate(`/productos/${titulo}`)

        } catch (err) {
            setError(esEdicion ? 'Hubo un error al guardar. Intentá de nuevo.' : 'Hubo un error al publicar. Intentá de nuevo.')
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
            <LoadImage onUploadClick={handleUploadClick} files={files} existingUrls={existingImageUrls} />
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
                esEdicion={esEdicion}
            />
        </div>
    )
}

export default Content