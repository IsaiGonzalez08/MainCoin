import Accesibilidad from '../assets/Icon/Accesibilidad.svg'
import Seguridad from '../assets/Icon/Seguridad.svg'
import Variedad from '../assets/Icon/Diversidad.svg'
import Comunidad from '../assets/Icon/Comunidad.svg'



export const Nosotros = () => {
    return(
        <div className="bg-[url('./assets/Img/Background2.png')] w-full h-[108vh] bg-no-repeat bg-cover">
             <div className="flex flex-col items-center pt-52">
                <h2 className="text-5xl ">
                    <span className="text-[#FFFFFF] font-bold">¿Por qué Main</span>
                    <span className="text-[#FFFFFF] font-light">coin</span>
                    <span className="text-[#FFFFFF] font-bold">?</span>
                </h2>
                <h2 className="text-[#FFFFFF] pt-10 text-center">
                    <span className="font-bold">Main</span>
                    <span className="font-light">Coin es la elección ideal para explorar el emocionante mundo de los NFTs y las <br /> criptomonedas.</span>
                </h2>
                <div className="flex flex-row pt-20 gap-20 pb-96">
                    <div className="flex flex-col items-center text-center">
                        <img src={Accesibilidad}/>
                        <h2 className="text-[#FFFFFF] text-2xl font-bold">Accesibilidad</h2>
                        <p className="text-[#FFFFFF] font-thin">MainCoin se enorgullece de ofrecer una <br /> 
                        plataforma fácil de usar, diseñada para <br /> 
                        personas de todos los niveles de <br /> 
                        experiencia.</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <img src={Seguridad}/>
                            <h2 className="text-[#FFFFFF] text-2xl font-bold">Seguridad</h2>
                            <p className="text-[#FFFFFF] font-thin">Nos comprometemos a proporcionar una <br /> 
                            plataforma segura y confiable, respaldada <br />
                            por las últimas medidas de seguridad en la <br /> 
                            tecnología blockchain.</p>
                        </div>
                    <div className="flex flex-col items-center text-center">
                        <img src={Variedad}/>
                            <h2 className="text-[#FFFFFF] text-2xl font-bold">Variedad</h2>
                            <p className="text-[#FFFFFF] font-thin">Nuestra plataforma ofrece una amplia gama <br /> 
                            de NFTs, desde arte digital hasta 
                            <br /> coleccionables únicos y otros activos <br />
                             digitales.</p>
                        </div>
                    <div className="flex flex-col items-center text-center">
                        <img src={Comunidad}/>
                            <h2 className="text-[#FFFFFF] text-2xl font-bold">Comunidad</h2>
                            <p className="text-[#FFFFFF] font-thin">Al unirte a MainCoin, te conviertes en parte <br /> 
                            de una comunidad en constante crecimiento <br /> 
                            de entusiastas, creadores y coleccionistas de <br /> 
                            NFTs.</p>
                        </div>
                </div>
             </div>
        </div>
    )
}