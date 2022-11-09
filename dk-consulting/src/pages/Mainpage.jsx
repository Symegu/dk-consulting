import MainPromo from "../components/Main/MainPromo";
import MainConsult from "../components/Main/MainConsult";
import MainServices from "../components/Main/MainServices";
import MainCards from "../components/Main/MainCards";
import { GreyLine } from "../components/UI/GreyLine"
import Header from "../components/Header&Footer/Header";
import Button from "../components/UI/Button";
import { MainSchema } from "../components/Main/MainSchema";
import Footer from "../components/Header&Footer/Footer";
import FourSteps from "../components/FourSteps/FourSteps";
import FormComponent from "../components/Main/FormComponent";

export const MainPage = () => {
    return (
     <>
        <Header />
        <main className="mt-[70px]">
            <MainPromo />
            <MainConsult />
            <GreyLine pic={true} heading="Lean-технологии" par="Максимально оптимизирует операционную деятельность. Позволяет планировать развитие с учетом дальних перспектив. Запускает процесс непрерывного совершенствования."/>
            <MainServices />
            <MainCards />
            <div className="py-[30px] mx-auto flex items-center justify-center">
                <Button bluebtn={true} buttonText="начать изменения"/>
            </div>
            <FourSteps />
            <MainSchema />
            <FormComponent />
        </main>
        <Footer />
     </>

    )
}
