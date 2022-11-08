import MainPromo from "../components/Main/MainPromo";
import MainConsult from "../components/Main/MainConsult";
import MainServices from "../components/Main/MainServices";
import MainCards from "../components/Main/MainCards";
import { GreyLine } from "../components/UI/GreyLine"
import Header from "../components/Header/Header";

export const MainPage = () => {
    return (
     <>
         <Header />
        <MainPromo />
        <MainConsult />
        <GreyLine pic={true} heading="Lean-технологии" par="Максимально оптимизирует операционную деятельность. Позволяет планировать развитие с учетом дальних перспектив. Запускает процесс непрерывного совершенствования."/>
        <MainServices />
        <MainCards />
     </>

    )
}
