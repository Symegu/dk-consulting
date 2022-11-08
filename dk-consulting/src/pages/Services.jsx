import { ServiceItem1} from "../components/Services/ServiceItem1"
import { ServiceItem2 } from "../components/Services/ServiceItem2"
import { ServiceItem3 } from "../components/Services/ServiceItem3"
import { ServiceItem4 } from "../components/Services/ServiceItem4"
import { ServicePromo } from "../components/Services/ServicePromo"
import Header from "../components/Header/Header";


export const Services = () => {
    return ( 
        <div className="oveflow-hidden">
            <Header />
            <main className="mt-[70px]">
                <ServicePromo />
                <ServiceItem1 />
                <ServiceItem2 />
                <ServiceItem3 />
                <ServiceItem4 />
            </main>
        </div>
        
    )
}