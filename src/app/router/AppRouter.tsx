import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "../../features/landing/ui/LandingPage";
import { DashboardUser } from "../../Pages/DashboardUser";
import { ActividadUsuario } from "../../Pages/ActividadUsuario";
import { VistaRecompensa } from "../../features/recompensas/ui/VistaRecompensas";
import { CursoUsuario } from "../../Pages/CursoUsuario";
import { LoginPage, RegisterPage } from "@/features/auth";

export const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/board" element={<DashboardUser/>}/>
                <Route path="/actividad" element={<ActividadUsuario/>}/>
                <Route path="/recompensa" element={<VistaRecompensa/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/curso" element={<CursoUsuario/>}/>
            </Routes>
        </BrowserRouter>
    )
}