import AboutCards from "../components/About/AboutCards"
import { AboutPrinciples } from "../components/About/AboutPrinciples"
import { AboutPromo } from "../components/About/AboutPromo"
import { AboutResources } from "../components/About/AboutResourses"
import { AboutSpecialist } from "../components/About/AboutSpecialist"
import { AboutWorth } from "../components/About/AboutWorth"
import { GreyLine } from "../components/UI/GreyLine"
import Button from "../components/UI/Button";
import Header from "../components/Header&Footer/Header";


export const About = () => {

    const parline="Ценности являются основой компании, способной сделать ее сильной"

    return (
        <div className="overflow-hidden">
            <Header />
            <main className="mt-[70px]"> 
                <AboutPromo />
                <AboutResources />
                <AboutPrinciples />
                <AboutSpecialist />
                <AboutWorth />
                <AboutCards />
                <GreyLine 
                    bigpar={true}
                    par={parline}
                />
                <div className="py-[30px] mx-auto flex items-center justify-center">
                    <Button bluebtn={true} buttonText="начать сотрудничество"/>
                </div>
            </main>
        </div>
    )
}