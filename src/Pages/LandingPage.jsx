import { Header } from "../Components/Header"
import { Inicio } from "../Components/Inicio"

export const LandingPage = () => {
    return(
        <div className="bg-[url('./assets/Img/Background.png')] w-screen h-screen bg-no-repeat bg-cover">
            <Header></Header>
            <Inicio></Inicio>
        </div>
            
    )
}