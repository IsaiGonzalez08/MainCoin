import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LandingPage } from '@/features/landing'
import { LoginPage, RegisterPage } from '@/features/auth'
import { DashboardPage } from '@/features/dashboard'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
            </Routes>
        </BrowserRouter>
    )
}
