// eslint-disable-next-line react/prop-types
const ButtonIcon = ({icon: Icon, text}) => {
    return(
       <button className={"flex flex-row items-center gap-2 w-auto h-auto text-white uppercase"}>
           <Icon />
           <h2 className={"text-lg"}>{text}</h2>
       </button>
    )
}

export default ButtonIcon;