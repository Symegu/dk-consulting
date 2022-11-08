import { ServiceItem1} from "../components/Services/ServiceItem1"
import { ServiceItem2 } from "../components/Services/ServiceItem2"
import { ServiceItem3 } from "../components/Services/ServiceItem3"
import { ServiceItem4 } from "../components/Services/ServiceItem4"
import { ServicePromo } from "../components/Services/ServicePromo"


export const Services = () => {
    return ( 
        <div className="oveflow-hidden">
            <h1>services</h1>
            <ServicePromo />
            <ServiceItem1 />
            <ServiceItem2 />
            <ServiceItem3 />
            <ServiceItem4 />
        </div>
        
    )
}