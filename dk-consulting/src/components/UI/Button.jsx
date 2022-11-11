
export default function Button(props) {
    return (
        <button className={props.bluebtn ? "bluebtn lg:w-[276px] lg:text-[14px] lg:py-[15px] md:text-[14px] md:leading-[14px] md:py-[14px] md:w-[275px]" : "transbtn  lg:w-[276px] lg:text-[14px] lg:py-[15px] md:text-[14px] md:leading-[14px] md:py-[14px] md:w-[275px]"}>{props.buttonText}</button>
    )
}
