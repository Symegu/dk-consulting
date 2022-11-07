

export const GreyLine = (props) => {
    return (
        <div className="bg-greylinebg py-[25px] flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center">
            <div className="flex items-center">
                <img src={props.pic} alt="" />
                <h3>{props.heading}</h3>
            </div>
            <p className={props.bigpar ? "max-w-[1290px] text-center text-lightgrey font-extralight text-[35px] leading-[49px]" : "max-w-[1290px] par text-center text-lightgrey"}>{props.par}</p>
        </div>
    )
}