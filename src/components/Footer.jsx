const Footer = () => {
    return(
        <div className={ "h-[200px] origin-left w-full flex flex-col items-center"}>
            <div className={"w-full border-2 border-customAmber mt-2"}></div>
            <div className={"mt-5"}>
                <img src={"/ChefMattBanner.png"} alt={"footer"} width={300} height={300} />
            </div>
        </div>
    )
}

export default Footer;