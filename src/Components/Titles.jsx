const MainTitle = ({ eyebrow, title, extra, accent }) => {
    return (
        <div className="font-marron_claro flex flex-col gap-3">
            <div className="flex gap-3 items-center uppercase">
                <div className="h-[1px] w-25 rounded-full bg-marron_claro"></div>
                <p className="tracking-[0.15em] text-xs">{eyebrow}</p>
            </div>
            <div className="text-5xl font-principal font-bold">
            <h1 className="">{title}</h1>
            <h3 className=" font-bold text-crema italic">{accent}</h3>
            <p className="">{extra}</p>
            </div>
        </div>
    )
}

export default MainTitle;
