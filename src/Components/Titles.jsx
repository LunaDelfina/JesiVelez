const MainTitle = ({ eyebrow, title, extra, accent, line }) => {
    return (
        <div className="font-marron_claro flex flex-col gap-3">
            <div className="flex gap-3 items-center uppercase">
                <div className="md:h-[1px] h-[2px] w-25 rounded-full bg-marron_claro"></div>
                <p className="tracking-[0.15em] text-[0.625rem] md:text-xs">{eyebrow}</p>
            </div>
            <div className="md:text-5xl text-3xl font-principal font-bold">

            <div className={line ? "flex gap-2" : "flex-col"}>
            <h1 className="">{title}</h1>
            <h3 className=" font-bold text-crema italic">{accent}</h3>
            </div>
            <p className="">{extra}</p>
            </div>
        </div>
    )
}

export default MainTitle;
