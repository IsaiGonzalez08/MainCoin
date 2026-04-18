import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const RegisterPage = () => {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const handleRegister = () => {
        if (!name || !email || !password || !passwordConfirm) {
            alert('Por favor, ingresa nombre de usuario y contraseña.')
            return
        } else {
            alert('Navegando')
            navigate('/board')
        }
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className="flex flex-row h-screen">
            <div className="hidden bg-black lg:flex justify-center items-center lg:w-1/2 p-10 h-full">
                <img src="/Img/imgRegistro.png" />
            </div>
            <div className="w-full flex flex-col items-center justify-center bg-[#FFFFFF] px-5 lg:px-14 lg:w-1/2">
                <div className="flex flex-row">
                    <img className="w-8" src="/Icon/IconLogin.svg" />
                    <h2 className="text-[#000000] font-semibold pl-4">MainCoin</h2>
                </div>

                <h2 className="font-semibold text-4xl text-center">Regístrate al mundo digital.</h2>
                <h2 className="font-light text-lg">Ingresa tus datos para registrarte.</h2>

                <input
                    type="text"
                    placeholder="Ingresa tú nombre"
                    className="h-12 w-full border-2 border-[#F4F4F4] rounded-sm pl-2 mt-5"
                    onChange={(e) => setName(e.target.value)}
                />

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

                <div className="relative w-full mt-5">
                    <input
                        className="border-2 border-[#F4F4F4] rounded-sm w-full pl-2 h-12"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Ingresa tú contraseña"
                        value={passwordConfirm}
                        onChange={(e) => setPasswordConfirm(e.target.value)}
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
                    className="font-medium text-[#FFFFFF] bg-[#5257B3] w-full py-3 rounded-sm mt-5 transition-all hover:scale-105 hover:duration-300"
                    onClick={handleRegister}
                >
                    Registrate
                </button>

                <h2 className="mt-20">
                    ¿Ya tienes cuenta?{' '}
                    <Link className="font-bold" to="/login">
                        Inicia sesión aquí
                    </Link>
                </h2>
            </div>
        </div>
    )
}
