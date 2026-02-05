import { Footer } from "../shared/components/Footer"
import { HeaderDashBoard } from "../features/recompensas/ui/components/HeaderDashboard"
import { NavbarUsuario } from "../features/recompensas/ui/components/NavbarUsuario"
import { Actividades } from "../shared/components/Actividades"
import { Progreso } from "../shared/components/Progreso"
import { Recompensas } from "../features/recompensas/ui/components/Recompensas"

export const DashboardUser = () => {

    return(
        <div className="w-full h-full">
            <HeaderDashBoard></HeaderDashBoard>
            <NavbarUsuario></NavbarUsuario>
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