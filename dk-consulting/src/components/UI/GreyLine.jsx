import picture from "../../assets/Main/Presentation.svg"

export const GreyLine = (props) => {
    return (
        <div className="bg-greylinebg py-[25px] flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center mx-auto">
            <div className="flex items-center mb-[17px]">
                <img src={props.pic ? picture : ""} alt="" />
                <h3 className="littleTitle text-white ml-[20px]">{props.heading}</h3>
            </div>
            <p className={props.bigpar ? "max-w-[1290px] text-center text-lightgrey font-extralight text-[35px] leading-[49px] lg:max-w-[940px] md:max-w-[690px] md:text-start" : "max-w-[1290px] par text-center text-lightgrey lg:max-w-[940px] md:max-w-[690px] md:text-start"}>{props.par}</p>
        </div>
    )
}