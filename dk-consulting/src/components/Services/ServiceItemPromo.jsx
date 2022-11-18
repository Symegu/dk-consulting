import {NavLink} from "react-router-dom";


export const ServiceItemPromo = (props) => {

    return (
        <div className={props.promobg} style={{height: "350px", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "right"}}>
            <div className="bg-gradient-to-r from-[#090A20] via-[#06082BE8] to-[#07093E14] h-full relative">
                <div className="max-w-[1290px] mx-auto flex items-end h-full ">
                    <h1 className="bigTitle text-white max-w-[678px] mb-[71px]">{props.promoheading}</h1>
                </div>
            </div>
        </div>
    )
}
