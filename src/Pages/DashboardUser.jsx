import { Actividades } from "../Components/Actividades"
import { Footer } from "../Components/Footer"
import { HeaderDashBoard } from "../Components/HeaderDashboard"
import { NavbarUser } from "../Components/NavbarUser"
import { Progreso } from "../Components/Progreso"
import { Recompensas } from "../Components/Recompensas"

export const DashboardUser = () => {
    return(
        <div className="w-full h-full">
            <HeaderDashBoard></HeaderDashBoard>
            <NavbarUser></NavbarUser>
            <Actividades></Actividades>
            <Progreso></Progreso>
            <Recompensas nombre="Recompensas"></Recompensas>
            <div className="flex flex-col items-center pt-32 pr-2 gap-14">
                <div className='flex flex-row items-center'>
                    <div className="bg-[#D2D3EB] w-14 h-14 rounded-full absolute"></div>
                    <h2 className='text-[#2A2A2A] font-bold z-10 pl-3 mt-14 text-5xl text-center'>¡Recuerda completar actividades para recibir <br /> diferentes premios!</h2>
                </div>
                <div className="flex flex-row justify-center">
                    <button className="bg-[#D2D3EB] w-[55vh] h-12 items-center hover:scale-110 hover:duration-300">
                        <span className="text-[#2A2A2A] font-semibold">¡COMENZAR AHORA!</span>
                    </button>
                </div>
            </div>
            <div className="mt-[30vh]">
                <Footer></Footer>
            </div>
        </div>  
    )
}