import { Contenido } from "../Components/Contenido"
import { Footer } from "../Components/Footer"
import { Header } from "../Components/Header"
import { Inicio } from "../Components/Inicio"
import { Nft } from "../Components/Nft"
import { Nosotros } from "../Components/Nosotros"

export const LandingPage = () => {
    return(
        <div className="bg-[url('./assets/Img/Background.png')] w-full h-full bg-no-repeat bg-cover overflow-x-hidden">
            <Header></Header>
            <Inicio></Inicio>
            <Nft></Nft>
            <Nosotros></Nosotros>
            <Contenido></Contenido>
            <Footer></Footer>
        </div>
            
    )
}