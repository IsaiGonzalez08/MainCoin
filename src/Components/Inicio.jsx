import flecha from '../assets/Icon/Flecha.svg'
import curso from '../assets/Img/CursoInicio.png'
import logo1 from '../assets/Icon/Logo1.svg'
import logo2 from '../assets/Icon/Logo2.svg'
import logo3 from '../assets/Icon/Logo3.svg'
import logo4 from '../assets/Icon/Logo4.svg'
import logo5 from '../assets/Icon/Logo5.svg'
import { Link } from 'react-router-dom'

export const Inicio = () => {
    return (
        <>
            <div className="flex flex-row justify-center pt-20 pl-10 overflow-hidden">
                <div className="flex flex-col basis-1/2 justify-center items-center">
                    <h2 className="text-7xl font-light">
                        <span className="text-white font-thin">Explora el nuevo <br /> mundo del </span>
                        <span className="text-[#9295CF] font-semibold">arte<br />  digital</span>
                    </h2>
                    <p className="text-[#FFFFFF] font-light mt-5 ml-32">
                        Bienvenido al mundo del arte de los NFT, en donde MainCoin tiene diversas
                        recompensas <br /> para ti mientras vas aprendiento en este nuevo mundo virtual.
                    </p>
                    <Link to='/login'>
                        <div className="w-56 h-10 mt-10 mr-60 flex flex-row items-center relative cursor-pointer">
                            <div className="w-10 h-10 rounded-full overflow-hidden">
                                <div className="absolute bg-[#5257B3] w-12 h-12 rounded-full hover:w-64 transition-width duration-300 ml-2"></div>
                            </div>
                            <h2 className='text-[#FFFFFF] relative z-10 pt-2 font-semibold'>Empezar ahora!</h2>
                            <img className='pl-4 relative z-11 pt-2' src={flecha} alt="" />
                        </div>
                    </Link>
                    <div className="flex flex-row pt-20 items-center pl-16">
                        <h2 className='text-[#FFFFFF] pr-2 font-bold'>10K</h2>
                        <div className='bg-[#FFFFFF] w-[1px] h-5'></div>
                        <h2 className='text-[#FFFFFF] pl-2 font-light'>Usuarios conectados</h2>

                        <h2 className='text-[#FFFFFF] pl-10 pr-2 font-bold'>5K</h2>
                        <div className='bg-[#FFFFFF] w-[1px] h-5'></div>
                        <h2 className='text-[#FFFFFF] pl-2 font-light'>Cursos digitales</h2>

                        <h2 className='text-[#FFFFFF] pl-10 pr-2 font-bold'>320</h2>
                        <div className='bg-[#FFFFFF] w-[1px] h-5'></div>
                        <h2 className='text-[#FFFFFF] pl-2 font-light'>Recompensas</h2>
                    </div>
                </div>
                <div className="basis-1/2 pl-44">
                    <img className='rounded-t-xl' src={curso} />
                    <div className='bg-[#FFFFFF] w-[47.8vh] h-24 rounded-b-xl'>
                        <div className='flex flex-col ml-8 '>
                            <h3 className='text-[#7276C1] font-light pt-4'>Nuevo Curso</h3>
                            <h2 className='text-[#7276C1] font-semibold text-2xl'>¿Cómo iniciar en Gear?</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row w-full justify-center gap-24 pt-36">
                    <img className='w-56' src={logo1} alt="" />
                    <img className='w-44 mt-3' src={logo2} alt="" />
                    <img className='w-40 mt-3' src={logo3} alt="" />
                    <img className='w-40 mt-4' src={logo4} alt="" />
                    <img className='w-40 mt-4' src={logo5} alt="" />
            </div>
        </>
    )
}