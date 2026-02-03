import { Header } from "../../../shared/components/Header"
import { InitSection } from "./components/InitSection"
import { Nft } from "./components/Nft"
import { Nosotros } from "./components/Nosotros"
import { Contenido } from "./components/Contenido"
import { Footer } from "../../../shared/components/Footer"

export const LandingPage = () => {
    return(
        <div className="bg-[url('./Img/Background.png')] w-full h-full bg-no-repeat bg-cover overflow-x-hidden">
            <Header/>
            <InitSection/>
            <Nft/>
            <Nosotros/>
            <Contenido/>
            <Footer/>
        </div>
            
    )
}