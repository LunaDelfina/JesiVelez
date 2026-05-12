const Stats = () => {
    return (
        <div className="flex w-full justify-around items-center">
            <div className="flex gap-2 items-center justify-center">
                <h2 className="text-5xl font-principal text-crema">+200</h2>
                <p className="font-light text-xs">Novias acompañadas <br></br>desde 2019</p>
            </div>

            <div className="h-full w-[1px] bg-crema rounded-full"></div>
            <div className="flex gap-2 items-center justify-center">
                <h2 className="text-5xl font-principal text-crema">100%</h2>
                <p className="font-light text-xs">Piezas hechas a mano</p>
            </div>
            <div className="h-full w-[1px] bg-crema rounded-full"></div>
            <a href="https://www.google.com/search?q=jesiv+velez+tocados&oq=jesiv+velez+tocados&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIJCAEQABgNGIAEMgkIAhAAGA0YgAQyCQgDEAAYDRiABDIJCAQQABgNGIAEMggIBRAAGA0YHjIICAYQABgNGB4yCAgHEAAYDRgeMggICBAAGA0YHjIICAkQABgNGB7SAQk5MzM1MGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#:~:text=Jesi%20Velez%20%7C%20Tocados%20de%20novia%20en%20C%C3%B3rdoba%20(%40coronadasag_)" target="_blank" className="flex gap-2 items-center justify-center cursor-pointer">
                <div className="border-[1px] border-marron_claro p-2 rounded-full">
                    <svg width="20" height="20" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.366 1.33716H4.68011C2.83385 1.33716 1.33716 2.83385 1.33716 4.68011V11.366C1.33716 13.2123 2.83385 14.709 4.68011 14.709H11.366C13.2123 14.709 14.709 13.2123 14.709 11.366V4.68011C14.709 2.83385 13.2123 1.33716 11.366 1.33716Z" stroke="#C9A882" />
                        <path d="M8.02299 10.6974C9.5 10.6974 10.6974 9.5 10.6974 8.02299C10.6974 6.54599 9.5 5.34863 8.02299 5.34863C6.54599 5.34863 5.34863 6.54599 5.34863 8.02299C5.34863 9.5 6.54599 10.6974 8.02299 10.6974Z" stroke="#C9A882" />
                        <path d="M11.7003 4.68007C11.8849 4.68007 12.0346 4.5304 12.0346 4.34577C12.0346 4.16114 11.8849 4.01147 11.7003 4.01147C11.5156 4.01147 11.366 4.16114 11.366 4.34577C11.366 4.5304 11.5156 4.68007 11.7003 4.68007Z" fill="#C9A882" stroke="#C9A882" />
                    </svg>
                </div>
                <div>
                    <p className="font-bold text-sm">Ver más trabajos</p>
                    <p className="text-sm text-crema font-light">@JesiVelez</p>
                </div>
            </a>

        </div>
    )
}

export default Stats