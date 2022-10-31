

export default function CardWithText(props) {
    return(
        <div>
            <img alt="ассоциация" className={props.ltr? "img-ltr" : "img-rtl"}/>
            <div className={props.ltr ? "card-rtl" : "card-ltr"}>
                <h3>{props.header}</h3>
                <ul>
                    {props.quotes.map(
                        (q) => {
                            return(<li>{q}</li>)
                        }
                    )}
                </ul>
            </div>
        </div>
    )
}
