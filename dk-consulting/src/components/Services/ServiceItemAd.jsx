

export const ServiceItemAd = (props) => {
    return (
        <div className="bg-serviceheading h-[600px] bg-no-repeat bg-cover">
            <div className="py-[175px] flex flex-col items-center">
                <h1 className="bigTitle max-w-[960px] mb-[60px] text-center text-white">{props.ad}</h1>
                <button className="transbtn">оставить заявку</button>
            </div>
        </div>
    )
}