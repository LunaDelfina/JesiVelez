const Line = ({ hideMobile }) => {
    return (
        <div className={`h-full w-[1px] bg-crema rounded-full block ${hideMobile ? 'hidden lg:block md:block' : 'block'}`}></div>
    )
}


const Instagram=({ hideMobile, hideDesktop })=>{
    return(
        <a href="https://www.instagram.com/jesivelezhair/" target="_blank" rel="noopener noreferrer"
                className={` gap-2 items-center justify-center cursor-pointer flex ${hideMobile && hideDesktop===false ? 'hidden lg:flex md:flex' : ''} ${hideDesktop && hideMobile===false ? 'flex md:hidden' : ''}`}>
                <div className="border-[1px] border-marron_claro p-2 rounded-full">
                    <svg width="16" height="16" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.366 1.33716H4.68011C2.83385 1.33716 1.33716 2.83385 1.33716 4.68011V11.366C1.33716 13.2123 2.83385 14.709 4.68011 14.709H11.366C13.2123 14.709 14.709 13.2123 14.709 11.366V4.68011C14.709 2.83385 13.2123 1.33716 11.366 1.33716Z" stroke="#C9A882" />
                        <path d="M8.02299 10.6974C9.5 10.6974 10.6974 9.5 10.6974 8.02299C10.6974 6.54599 9.5 5.34863 8.02299 5.34863C6.54599 5.34863 5.34863 6.54599 5.34863 8.02299C5.34863 9.5 6.54599 10.6974 8.02299 10.6974Z" stroke="#C9A882" />
                        <path d="M11.7003 4.68007C11.8849 4.68007 12.0346 4.5304 12.0346 4.34577C12.0346 4.16114 11.8849 4.01147 11.7003 4.01147C11.5156 4.01147 11.366 4.16114 11.366 4.34577C11.366 4.5304 11.5156 4.68007 11.7003 4.68007Z" fill="#C9A882" stroke="#C9A882" />
                    </svg>
                </div>
                <div >
                    <p className="font-bold md:text-sm lg:text-sm text-xs">Ver más trabajos</p>
                    <p className="md:text-sm text-xs text-crema font-light">@JesiVelez</p>
                </div>
            </a>
    )
}

const h2="lg:text-4xl text-3xl font-principal text-crema"
const p="font-light text-[0.65rem] md:text-sm"
const responsivediv = " flex lg:flex-row md:flex-row flex-col gap-0 lg:gap-2  md:gap-2  items-center justify-center "
const Stats = () => {


    return (
        <div className="flex flex-col w-full gap-3 ">
        <div className="flex w-full justify-around items-center">
            <div className={`${responsivediv} `}>
                <h2 className={h2}>+200</h2>
                <div className="flex flex-col ">
                <p className={p}>Novias acompañadas </p>
                <p className={`${p} hidden md:flex `} >desde 2019</p>
                </div>
            </div>

            <Line hideMobile={false}/>
            <div className={`${responsivediv}`}>
                <h2 className={h2}>100%</h2>
                <p className={p}>Piezas hechas a mano</p>
            </div>
            
            <Line hideMobile={true} />
            <Instagram hideMobile={true} hideDesktop={false}/>         

        </div>
        <div>
            <Instagram hideMobile={false} hideDesktop={true}/>
        </div>
        </div>
    )
}

export default Stats