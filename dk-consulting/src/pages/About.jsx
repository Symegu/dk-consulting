import AboutCards from "../components/About/AboutCards"
import { AboutPrinciples } from "../components/About/AboutPrinciples"
import { AboutPromo } from "../components/About/AboutPromo"
import { AboutResources } from "../components/About/AboutResourses"
import { AboutSpecialist } from "../components/About/AboutSpecialist"
import { AboutWorth } from "../components/About/AboutWorth"


export const About = () => {
    return (
        <div className="overflow-hidden">
            <h1>about page</h1>
            <AboutPromo />
            <AboutResources />
            <AboutPrinciples />
            <AboutSpecialist />
            <AboutWorth />
            <AboutCards />
        </div>
    )
}