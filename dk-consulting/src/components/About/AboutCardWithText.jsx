

export const AboutCardWithText = (props) => {
    return(
        <div className={props.ltr? "flex items-center" : "flex flex-row-reverse my-[27px] items-center"}>
            <img alt="ассоциация" src={props.image} className="relative z-0"/>
            <div className={props.ltr ? "py-[34px] pl-[52px] pr-[76px] bg-lightgrey relative z-2 w-[758px] h-[360px] rounded-[6px] ml-[-130px]" : "py-[43px] pl-[75px] pr-[48px] bg-lightgrey relative z-2 w-[758px] h-[360px] rounded-[6px] mr-[-130px]"}>
                <h3 className="littleTitle text-black">{props.heading}</h3>
                <div className={props.ltr? "w-[706px] h-[1px] bg-blue my-[5px]" : "w-[683px] h-[1px] bg-blue my-[5px]"}></div>
                <h6 className="par font-normal text-black">&laquo;{props.subheading}&raquo;</h6>
                <p className="par text-black">{props.par}</p>
            </div>
        </div>
    )
}