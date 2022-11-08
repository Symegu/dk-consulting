import {NavLink} from "react-router-dom";
import hlogo from "../../assets/Header/headlogo.svg";
import phone from "../../assets/Header/phonelink_ring.svg";
import tg from "../../assets/Header/tg.svg";
import wa from "../../assets/Header/wa.svg";
import tf from "../../assets/Header/tf.svg";
import ml from "../../assets/Header/ml.svg";

export default function Header() {
    return(
        <section className="flex flex-row justify-between items-center w-[100%] h-[70px] bg-[#40454E]">
            <div className="w-[320px]">
                <img src={hlogo} className="ml-[75px]"/>
            </div>
            <div className="flex flex-row justify-between w-[670px] text-white uppercase">
                <NavLink to="/about">О компании</NavLink>
                <NavLink to="/services">услуги</NavLink>
                <NavLink to="/info">полезная информация</NavLink>
                <NavLink to="/contactform">запрос на сотрудничество</NavLink>
            </div>
            <div  className="w-[450px] pr-[75px] text-white flex flex-row pl-[50px] items-center">
                <img src={phone} className="mr-[10px]"/>
                <p className="mr-[20px]">+7 916 285 52 93   </p>
                <div className="flex flex-row w-[153px] justify-between">
                    <img src={tg}/>
                    <img src={wa}/>
                    <img src={tf}/>
                    <img src={ml}/>
                </div>
            </div>
        </section>
    )
}
