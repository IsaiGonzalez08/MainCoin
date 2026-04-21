import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const LoginPage = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const handleLogin = () => {
        navigate('/dashboard')
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className="flex h-screen justify-center">
            <div className="flex flex-col items-center justify-center bg-white">
                <div className="flex flex-row gap-3">
                    <img className="w-8" src="/icons/logo.svg" />
                    <h2 className="text-black font-semibold">MainCoin</h2>
                </div>

                <h2 className="font-semibold text-4xl">Bienvenido de vuelta</h2>
                <h2 className="font-light text-lg">Ingresa tus datos para entrar</h2>

                <form className="w-full" action="">
                    <input
                        type="email"
                        placeholder="Ingresa tú correo"
                        className="h-12 w-full border-2 border-[#F4F4F4] rounded-sm pl-2 mt-5"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <div className="relative w-full mt-5">
                        <input
                            className="border-2 border-[#F4F4F4] rounded-sm w-full pl-2 h-12"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Ingresa tú contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute top-0 right-0 h-full px-3 py-2 hover:bg-transparent"
                        >
                            <img
                                src={
                                    showPassword
                                        ? '/Icon/OcultarContraseña.svg'
                                        : '/Icon/MostrarContraseña.svg'
                                }
                                alt={showPassword ? 'Ocultar Contraseña' : 'Mostrar Contraseña'}
                                className="min-w-5 min-h-5"
                            />
                        </button>
                    </div>

                    <button
                        className="font-medium text-[#FFFFFF] bg-[#5257B3] w-full py-3 rounded-sm mt-5 transition-all hover:bg-[#454AA6] hover:duration-300"
                        onClick={handleLogin}
                    >
                        Iniciar sesión
                    </button>
                </form>

                <h2 className="mt-20">
                    ¿No tienes cuenta aún?{' '}
                    <Link className="font-bold" to="/register">
                        Registrate aquí
                    </Link>
                </h2>
            </div>
        </div>
    )
}
