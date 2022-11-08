import AboutCards from "../components/About/AboutCards"
import { AboutPrinciples } from "../components/About/AboutPrinciples"
import { AboutPromo } from "../components/About/AboutPromo"
import { AboutResources } from "../components/About/AboutResourses"
import { AboutSpecialist } from "../components/About/AboutSpecialist"
import { AboutWorth } from "../components/About/AboutWorth"
import { GreyLine } from "../components/UI/GreyLine"
import Button from "../components/UI/Button";


export const About = () => {

    const parline="Ценности являются основой компании, способной сделать ее сильной"

    return (
        <div className="overflow-hidden">
            <h1>about page</h1>
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
        </div>
    )
}