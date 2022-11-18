import { Link } from 'react-scroll';
import {NavLink} from "react-router-dom";

export const InfoPromo = () => {
    return (
        <div className="h-[910px] bg-no-repeat bg-bottom bg-infopromo bg-cover">
            <div className="bg-gradient-to-r from-[#090A20] via-[#06082BE8] to-[#07093E14] h-full">
                <div className="w-[calc(50%-90px)] bg-[#090A20] h-full relative">
                    <div className="absolute top-[321px] right-[54px]">
                        <div className="max-w-[526px] flex flex-col items-start">
                            <h1 className="par text-white mb-[61px]">Разработанный нами материал полезен для изучения руководителям любого уровня, а также для проведения обучающих семинаров с целью повышения личной и командной эффективности сотрудников компании.</h1>
                            <Link to="audit"><button className='transbtn mb-[81px]'>Начать сотрудничество</button></Link>
                            <div className='text-lightgrey font-extralight'>
                                <NavLink to="/register" className="hover:text-[#27699E]">Регистрация / </NavLink>
                                <NavLink to="/login" className="hover:text-[#27699E]">Авторизация</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}