import { CardContenido } from "./CardContenido"
import Contenido1 from '../assets/Img/ImgContenido1.png'
import Contenido2 from '../assets/Img/ImgContenido2.png'
import Contenido3 from '../assets/Img/ImgContenido3.png'
import Contenido4 from '../assets/Img/ImgContenido4.png'
import Contenido5 from '../assets/Img/ImgContenido5.png'
import Contenido6 from '../assets/Img/ImgContenido6.png'
import Contenido7 from '../assets/Img/ImgContenido7.png'
import Contenido8 from '../assets/Img/ImgContenido8.png'


export const Contenido = () => {
    return(
        <>
            <div className="bg-[url('./assets/Img/Background3.png')] w-full h-[160vh] bg-no-repeat bg-cover overflow-hidden" id="contenido">
                <div className="flex flex-row justify-start">
                    <h1 className="text-6xl pl-36">
                        <span className="text-[#FFFFFF] font-thin">Tops recompensas en los</span>
                        <br />
                        <span className="text-[#9295CF] font-bold">ultimos dias.</span>
                    </h1>
                </div>
                <div className="flex flex-row justify-center pt-20">
                    <div className="flex flex-col divide-y divide-[#2A2A2A] pr-20">
                        <div className='w-[60vh]'></div>
                        <CardContenido perfil={Contenido1} nombre="NightFuture" puntos="5 219.90" dinero="$200,129,291.00"/>
                        <CardContenido perfil={Contenido2} nombre="FutureHunter" puntos="5 219.90" dinero="$200,129,291.00"/>
                        <CardContenido perfil={Contenido3} nombre="MoneyJudge" puntos="5 219.90" dinero="$200,129,291.00"/>
                        <CardContenido perfil={Contenido4} nombre="LionBumble" puntos="5 219.90" dinero="$200,129,291.00"/>
                    </div>
                    <div className="flex flex-col divide-y divide-[#2A2A2A]">
                        <div className='w-[60vh]'></div>
                        <CardContenido perfil={Contenido5} nombre="AstetikCat" puntos="5 219.90" dinero="$200,129,291.00"/>
                        <CardContenido perfil={Contenido6} nombre="NiftyCanvas" puntos="5 219.90" dinero="$200,129,291.00"/>
                        <CardContenido perfil={Contenido7} nombre="EtherMasterpieces" puntos="5 219.90" dinero="$200,129,291.00"/>
                        <CardContenido perfil={Contenido8} nombre="StarBoyVsion" puntos="5 219.90" dinero="$200,129,291.00"/>
                    </div>
                </div>
                <div className="flex flex-col justify-start pt-64 pr-2 ml-80">
                    <div className='flex flex-row items-center'>
                        <div className="bg-[#5257B3] w-14 h-14 rounded-full absolute"></div>
                        <h2 className='text-[#FFFFFF] font-bold z-10 pl-3 mt-14 text-5xl text-center'>¡Únete a más de 10 mil de personas que se 
                        <br /> divierten mientras logran sus objetivos!</h2>
                    </div>
                    <div className="flex justify-center mr-64 pt-24">
                        <button className="bg-[#5257B3] w-[55vh] h-12 items-center hover:scale-110 hover:duration-300">
                            <span className="text-[#FFFFFF] font-semibold">Unirme ahora a Main</span>
                            <span className="text-[#FFFFFF] font-light">Coin</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}