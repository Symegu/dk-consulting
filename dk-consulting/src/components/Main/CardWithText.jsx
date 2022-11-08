


export default function CardWithText(props) {
    return(
        <div className={props.ltr? "flex items-center" : "flex flex-row-reverse my-[27px] items-center"}>
            <img alt="ассоциация" className="relative z-0" src={props.pic}/>
            <div className={props.ltr ? "py-[34px] pl-[52px] pr-[76px] bg-lightgrey relative z-2 w-[758px] h-[360px] rounded-[6px] ml-[-130px]" : "py-[43px] pl-[75px] pr-[48px] bg-lightgrey relative z-2 w-[758px] h-[360px] rounded-[6px] mr-[-130px]"}>
                <h3 className="littleTitle text-black">{props.header}</h3>
                <div className={props.ltr? "w-[706px] h-[1px] bg-blue my-[10px]" : "w-[683px] h-[1px] bg-blue my-[10px]"}></div>
                <ul className="list-disc ml-[18px]">
                    {props.quotes.map(
                        (q, i) => {
                            return(<li key={q[i]} className="par text-black">{q}</li>)
                        }
                    )}
                </ul>
            </div>
        </div>
    )
}
