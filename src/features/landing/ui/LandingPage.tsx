import { Header } from "../../../shared/components/Header"
import { Contenido } from "./components/Contenido"
import { Inicio } from "./components/InitSection"
import { Nft } from "./components/Nft"
import { Nosotros } from "./components/Nosotros"
import { Footer } from "../../../shared/components/Footer"

export const LandingPage = () => {
    return(
        <div className="bg-[url('./Img/Background.png')] w-full h-full bg-no-repeat bg-cover overflow-x-hidden">
            <Header/>
            <Inicio/>
            <Nft/>
            <Nosotros/>
            <Contenido/>
            <Footer/>
        </div>
            
    )
}