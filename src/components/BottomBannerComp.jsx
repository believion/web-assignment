// eslint-disable-next-line react/prop-types
const BottomBannerComp = ({icon: Icon, title, desc}) => {
    return(
        <div className={"h-[100px] w-auto flex flex-col p-4"}>
            <div className={"flex flex-row gap-2 items-center uppercase text-xl text-customAmber"}>
                <Icon />
                <h2>{title}</h2>
            </div>
            <div className={"ml-8 text-white capitalize"}>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default BottomBannerComp;