import { InfoPromo } from "../components/Info/InfoPromo"
import Header from "../components/Header&Footer/Header";


export const Info = () => {
    return (
        <div>
            <Header />
            <main className="mt-[70px]">
                <InfoPromo />
            </main>
        </div>
    )
}