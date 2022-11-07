import { AboutPrinciples } from "../components/AboutPrinciples/AboutPrinciples"
import { AboutPromo } from "../components/AboutPromo/AboutPromo"
import { AboutResources } from "../components/AboutResources/AboutResourses"
import { AboutSpecialist } from "../components/AboutSpecialist/AboutSpecialist"


export const About = () => {
    return (
        <div className="overflow-hidden">
            <h1>about page</h1>
            <AboutPromo />
            <AboutResources />
            <AboutPrinciples />
            <AboutSpecialist />
        </div>
    )
}