import {BrowserRouter, Routes, Route} from "react-router-dom";
import { LandingPage } from "../Pages/LandingPage";
import { DashboardUser } from "../Pages/DashboardUser";

export const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/landing" element={<LandingPage/>}/>
                <Route path="/board" element={<DashboardUser/>}/>
            </Routes>
        </BrowserRouter>
    )
}