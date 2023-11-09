import { Actividades } from "../Components/Actividades"
import { HeaderDashBoard } from "../Components/HeaderDashboard"
import { NavbarUser } from "../Components/NavbarUser"
import { Progreso } from "../Components/Progreso"
import { Recompensas } from "../Components/Recompensas"

export const DashboardUser = () => {
    return(
        <div className="w-full h-[280vh]">
            <HeaderDashBoard></HeaderDashBoard>
            <NavbarUser></NavbarUser>
            <Actividades></Actividades>
            <Progreso></Progreso>
            <Recompensas></Recompensas>
        </div>  
    )
}