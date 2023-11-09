import { Actividades } from "../Components/Actividades"
import { CardActividades } from "../Components/CardActividades"
import { Footer } from "../Components/Footer"
import { HeaderDashBoard } from "../Components/HeaderDashboard"
import { NavbarUser } from "../Components/NavbarUser"
import FlechaDer from '../assets/Icon/FlechaDer.svg'
import FlechaIzq from '../assets/Icon/FlechaIzq.svg'
import Actividad1 from '../assets/Img/Actividad1.png' 

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
                     <CardActividades img={Actividad1} 
                                    nombre="Intro GEAR" 
                                    valor="500" 
                                    descripcion="Gear se creó con el propósito de convertirse en una
                                    plataforma esencial para construir el ecosistema Web3." 
                                    xp="50">
                     </CardActividades>
                     <CardActividades img={Actividad1} 
                                    nombre="Intro GEAR" 
                                    valor="500" 
                                    descripcion="Gear se creó con el propósito de convertirse en una
                                    plataforma esencial para construir el ecosistema Web3." 
                                    xp="50">
                     </CardActividades>
                     <CardActividades img={Actividad1} 
                                    nombre="Intro GEAR" 
                                    valor="500" 
                                    descripcion="Gear se creó con el propósito de convertirse en una
                                    plataforma esencial para construir el ecosistema Web3." 
                                    xp="50">
                     </CardActividades>
                </div>  
                <div className="flex flex-row gap-5">
                <CardActividades img={Actividad1} 
                                    nombre="Intro GEAR" 
                                    valor="500" 
                                    descripcion="Gear se creó con el propósito de convertirse en una
                                    plataforma esencial para construir el ecosistema Web3." 
                                    xp="50">
                     </CardActividades>
                     <CardActividades img={Actividad1} 
                                    nombre="Intro GEAR" 
                                    valor="500" 
                                    descripcion="Gear se creó con el propósito de convertirse en una
                                    plataforma esencial para construir el ecosistema Web3." 
                                    xp="50">
                     </CardActividades>
                     <CardActividades img={Actividad1} 
                                    nombre="Intro GEAR" 
                                    valor="500" 
                                    descripcion="Gear se creó con el propósito de convertirse en una
                                    plataforma esencial para construir el ecosistema Web3." 
                                    xp="50">
                     </CardActividades>
                     <CardActividades img={Actividad1} 
                                    nombre="Intro GEAR" 
                                    valor="500" 
                                    descripcion="Gear se creó con el propósito de convertirse en una
                                    plataforma esencial para construir el ecosistema Web3." 
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