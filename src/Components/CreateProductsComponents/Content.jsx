import LoadImage from "./LoadImage"
import FormularioIngreso from "./Form"
import { useRef,useState } from "react"

const Content = () => {
    const fileInputRef = useRef(null)
    const handleUploadClick = () => fileInputRef.current.click()
    const [files,setFiles]=useState([])

    return (
        <div className="w-full flex gap-10 justify-center px-[15%] items-start">
            <LoadImage onUploadClick={handleUploadClick} files={files}/>
            <FormularioIngreso fileInputRef={fileInputRef} onFilesChange={setFiles} />
        </div>
    )
}

export default Content