import { Actividades } from "../Components/Actividades"
import { CardActividades } from "../Components/CardActividades"
import { Footer } from "../Components/Footer"
import { HeaderDashBoard } from "../Components/HeaderDashboard"
import { NavbarUser } from "../Components/NavbarUser"
import FlechaDer from '../assets/Icon/FlechaDer.svg'
import FlechaIzq from '../assets/Icon/FlechaIzq.svg'
import Actividad1 from '../assets/Img/Actividad1.png' 
import Actividad2 from '../assets/Img/Actividad2.png'
import Actividad3 from '../assets/Img/Actividad3.png'
import Actividad4 from '../assets/Img/Actividad4.png'
import Actividad5 from '../assets/Img/Card4.png'
import Actividad6 from '../assets/Img/Card5.png'
import Actividad7 from '../assets/Img/Actividad7.png'
import Actividad8 from '../assets/Img/Actividad8.png'    

export const ActividadUsuario = () => {
    return(
        <>
            <HeaderDashBoard></HeaderDashBoard>
            <NavbarUser></NavbarUser>
            <Actividades></Actividades>
            <div className='flex flex-row items-center ml-24'>
                <div className="bg-[#EDEDED] w-14 h-14 mt-4 rounded-full absolute"></div>
                <h2 className='text-[#747474] font-medium mt-4 z-10 pl-3 text-5xl'>Mis actividades</h2>
                <div className="flex flex-row ml-[90vh] gap-8 pt-7">
                    <button className='bg-[#B2B4DD] rounded-full w-12 pl-2 h-12'><img src={FlechaIzq}/></button>
                    <button className='bg-[#B2B4DD] rounded-full w-12 pl-2 h-12'><img src={FlechaDer}/></button>
                </div>
            </div>
            <div className="flex flex-col w-[156.1vh] min-w-[158vh] h-[113vh] bg-[#D9D9D920] mt-5 ml-28 pl-5 pr-10 gap-2 overflow-hidden">
                <div className="flex flex-row gap-5">
                    <CardActividades img={Actividad1} 
                                    nombre="Intro GEAR" 
                                    valor="500" 
                                    descripcion="Gear se creó con el propósito de convertirse en una
                                    plataforma esencial para construir el ecosistema Web3." 
                                    xp="50">
                     </CardActividades>
                     <CardActividades img={Actividad2} 
                                    nombre="Vara Net" 
                                    valor="2500" 
                                    descripcion="Vara Network es la primera red descentralizada 
                                    construida y que se ejecuta sobre el protocolo Gear." 
                                    xp="100">
                     </CardActividades>
                     <CardActividades img={Actividad3} 
                                    nombre="NFT" 
                                    valor="5000" 
                                    descripcion="Tipo único de token criptográfico que permite la 
                                    tokenización de unidades únicas de datos que se almacenarán en blockchain." 
                                    xp="200">
                     </CardActividades>
                     <CardActividades img={Actividad4} 
                                    nombre="GEAR Node" 
                                    valor="100" 
                                    descripcion="Esta guía cubre los pasos necesarios para instalar 
                                    y ejecutar el nodo Gear." 
                                    xp="50">
                     </CardActividades>
                </div>  
                <div className="flex flex-row gap-5">
                    <CardActividades img={Actividad5} 
                                    nombre="GEAR IDEA" 
                                    valor="500" 
                                    descripcion="Gear IDEA es una herramienta conveniente cuyo propósito
                                     es familiarizar a los usuarios con la plataforma Gear." 
                                    xp="50">
                     </CardActividades>
                     <CardActividades img={Actividad6} 
                                    nombre="GEAR JS" 
                                    valor="100" 
                                    descripcion="La API Gear-JS proporciona un conjunto de utilidades, 
                                    bibliotecas y herramientas que permiten que las aplicaciones JavaScript." 
                                    xp="50">
                     </CardActividades>
                     <CardActividades img={Actividad7} 
                                    nombre="Contratos" 
                                    valor="2500" 
                                    descripcion="Acerca del contrato inteligente de Gear este es un programa 
                                    que se ejecuta en el protocolo Gear." 
                                    xp="100">
                     </CardActividades>
                     <CardActividades img={Actividad8} 
                                    nombre="WEB3" 
                                    valor="5000" 
                                    descripcion="Web 3.0 es una nueva versión de Internet impulsada 
                                    por nuevas tecnologías como la tecnología blockchain." 
                                    xp="50">
                     </CardActividades>
                </div>
            </div>
            <div className="mt-[30vh]">
                <Footer></Footer>
            </div>
        </>
    )
}