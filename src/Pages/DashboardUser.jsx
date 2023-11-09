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
            <Recompensas></Recompensas>
            <div className="mt-[85vh]">
                <Footer></Footer>
            </div>
        </div>  
    )
}