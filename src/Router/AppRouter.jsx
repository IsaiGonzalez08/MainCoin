import {BrowserRouter, Routes, Route} from "react-router-dom";
import { LandingPage } from "../Pages/LandingPage";
import { DashboardUser } from "../Pages/DashboardUser";
import { ActividadUsuario } from "../Pages/ActividadUsuario";
import { VistaRecompensa } from "../Pages/VistaRecompensas";
import { Login } from "../Pages/Login";
import { Registro } from "../Pages/Registro";

export const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/landing" element={<LandingPage/>}/>
                <Route path="/board" element={<DashboardUser/>}/>
                <Route path="/actividad" element={<ActividadUsuario/>}/>
                <Route path="/recompensa" element={<VistaRecompensa/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/registro" element={<Registro/>}/>
            </Routes>
        </BrowserRouter>
    )
}