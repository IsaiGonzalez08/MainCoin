import { Footer } from "../Components/Footer"
import { useState } from 'react'
import Logo from '../assets/Icon/MainCoin.svg'
import imgLogin from '../assets/Img/imgLogin.png'
import IconLogin from '../assets/Icon/IconLogin.svg'
import OcultarContraseña from '../assets/Icon/OcultarContraseña.svg'
import MostrarContraseña from '../assets/Icon/MostrarContraseña.svg'
import { Link } from "react-router-dom"

export const Login = () => {

    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    return (
        <>
            <div className="flex flex-row">
                <div className="basis-1/2 bg-[#000000] w-full h-screen">
                    <div className="flex flex-row justify-start pt-10 pl-10">
                        <img className="w-12" src={Logo} />
                        <h2 className='text-[#FFFFFF] font-semibold pl-4 pt-2'>Main</h2>
                        <h2 className='text-[#FFFFFF] font-light pt-2'>Coin</h2>
                    </div>
                    <img className="mt-32 ml-36 w-[84vh] absolute" src={imgLogin} />
                </div>
                <div className="basis-1/2 bg-[#FFFFFF] w-full h-screen">
                    <div className="flex flex-row justify-center mt-56">
                        <img className="w-8" src={IconLogin} />
                        <h2 className='text-[#000000] font-semibold pl-4'>Main</h2>
                        <h2 className='text-[#000000] font-light'>Coin</h2>
                    </div>
                    <div className="flex flex-row justify-center pt-10">
                        <div className="flex flex-col text-center">
                            <h2 className="font-semibold text-4xl">Bienvenido de vuelta</h2>
                            <h2 className="font-light text-lg">Ingresa tus datos para entrar</h2>
                        </div>
                    </div>
                    <div className="flex justify-center pt-10 pb-5">
                        <input 
                        type="text" 
                        placeholder="Ingresa tú correo" 
                        className="h-12 w-[50vh] border-2 border-[#F4F4F4] rounded-sm pl-2"/>
                    </div>
                    <div className="flex justify-center relative">
                        <input
                            className="border-2 border-[#F4F4F4] rounded-sm w-[50vh] pr-10 pl-2 h-12"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Ingresa tú contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute inset-y-0 ml-[45vh] flex items-center cursor-pointer"
                        >
                            <img
                            src={showPassword ? OcultarContraseña : MostrarContraseña}
                            alt={showPassword ? 'Ocultar Contraseña' : 'Mostrar Contraseña'}
                            className="w-5 h-5"
                            />
                        </button>
                    </div>
                    <div className="flex justify-center pt-10">
                        <button className="font-medium text-[#FFFFFF] bg-[#5257B3] w-[50vh] h-12 rounded-sm hover:scale-105 hover:duration-300">Iniciar sesión</button>
                    </div>
                    <div className="flex justify-center mt-64">
                        <h2>¿No tienes cuenta aún? <Link className="font-bold" to="/registro">Registrate aquí</Link></h2>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}