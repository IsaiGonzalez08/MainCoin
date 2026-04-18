import { Footer } from '@/shared/components/Footer'
import { Header } from './components/Header'
import { NavLink } from 'react-router-dom'

export const DashboardPage = () => {
    return (
        <>
            <Header />
            <div className="w-full bg-[#2A2A2A] px-10 py-6"></div>
            <main className="w-full px-5 lg:px-10 py-6">
                <nav className="flex flex-row items-center gap-5">
                    <NavLink to="/dashboard">Dashboard</NavLink>
                    <NavLink to="">Mis actividades</NavLink>
                    <NavLink to="">Recompensas</NavLink>
                </nav>
                <hr className="w-full mt-10" />
            </main>
            <Footer />
        </>
    )
}
