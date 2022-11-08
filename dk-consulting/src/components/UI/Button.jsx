
export default function Button(props) {
    return (
        <button className={props.bluebtn ? "bluebtn" : "transbtn"}>{props.buttonText}</button>
    )
}
