import {BrowserRouter, Routes, Route} from "react-router-dom";
import { LandingPage } from "../Pages/LandingPage";
import { DashboardUser } from "../Pages/DashboardUser";
import { ActividadUsuario } from "../Pages/ActividadUsuario";

export const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/landing" element={<LandingPage/>}/>
                <Route path="/board" element={<DashboardUser/>}/>
                <Route path="/actividad" element={<ActividadUsuario/>}/>
            </Routes>
        </BrowserRouter>
    )
}