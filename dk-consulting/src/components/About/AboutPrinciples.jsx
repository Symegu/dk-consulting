

export const AboutPrinciples = () => {
    return (
        <div className="max-w-[1290px] mx-auto">
            <h1 className="bigTitle text-black">Принципы работы</h1>
            <div className="w-full h-[1px] bg-blue my-[10px]"></div>
            <ul className="flex items-center justify-between mt-[15px]">
                <li className="h-[627px] w-[417px] relative">
                    <div className="bg-cardfrontbg h-full w-full absolute z-30"></div>
                    <div className="bg-cardbackbg h-full w-full absolute"></div>
                </li>
                <li className="h-[627px] w-[417px] relative">
                    <div className="bg-cardfrontbg h-full w-full absolute z-30"></div>
                    <div className="bg-cardbackbg h-full w-full absolute"></div>
                </li>
                <li className="h-[627px] w-[417px] relative">
                    <div className="bg-cardfrontbg h-full w-full absolute z-30"></div>
                    <div className="bg-cardbackbg h-full w-full absolute"></div>
                </li>
            </ul>
        </div>
    )
}