import picture from "../../assets/Main/Presentation.svg"

export const GreyLine = (props) => {
    return (
        <div className="bg-greylinebg py-[25px] flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center mx-auto lg:py-[15px] md:py-[15px] sm:py-[15px] xs:py-[15px]">
            <div className="flex items-center mb-[17px]">
                <img src={props.pic ? picture : ""} alt="technology" className="md:w-[40px] sm:w-[30px] xs:w-[20px]"/>
                <h3 className="littleTitle text-white ml-[20px] md:text-[22px] sm:text-[18px] xs:text-[18px]">{props.heading}</h3>
            </div>
            <p className={props.bigpar ? "max-w-[1290px] text-center text-lightgrey font-extralight text-[35px] leading-[49px] lg:max-w-[940px] lg:text-[18px] lg:leading-[24px] md:max-w-[690px] md:text-start md:text-[18px] md:leading-[24px] sm:max-w-[420px] sm:text-[12px] sm:leading-[16px] xs:max-w-[270px] xs:text-[12px] xs:leading-[16px]" : "max-w-[1290px] par text-center text-lightgrey lg:max-w-[940px] lg:text-[18px] lg:leading-[24px] md:max-w-[690px] md:text-start md:text-[18px] md:leading-[24px] sm:max-w-[420px] sm:text-[12px] sm:leading-[16px] xs:max-w-[270px] xs:text-[12px] xs:leading-[16px]"}>{props.par}</p>
        </div>
    )
}