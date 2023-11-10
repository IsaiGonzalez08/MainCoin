import Logo from '../assets/Icon/MainCoin.svg'
import Esmeralda from '../assets/Icon/Emerald.svg'
import Coin from '../assets/Icon/Coin.svg'
import Configuracion from '../assets/Icon/Configuracion.svg'
import Perfil from '../assets/Icon/Perfil.svg'
import FotoUsuario from '../assets/Img/FotoUsuario.png'
import Rango from '../assets/Icon/Rango.svg'

export const HeaderDashBoard = () => {
    return(
        <header className="flex flex-col">
            <div className="flex flex-row justify-around w-full h-32 bg-[#414141]">
                <div className="flex flex-row items-center">
                    <div className="">
                        <img src={Logo}/>
                    </div>
                    <div className="flex flex-row">
                        <h2 className='pl-3'>
                            <span className='text-[#FFFFFF] font-semibold'>Main</span>
                            <span className='text-[#FFFFFF] font-light'>Coin</span>
                        </h2>
                    </div>
                </div>
                <div className="flex flex-row gap-8">
                    <div className="flex flex-row items-center">
                        <img className='w-11 pr-3' src={Esmeralda}/>
                        <h2 className='text-[#FFFFFF]'>99999</h2>
                    </div>
                    <div className="flex flex-row items-center pr-20">
                        <img className='pr-3' src={Coin}/>
                        <h2 className='text-[#FFFFFF]'>99999</h2>
                    </div>
                    <div className='flex flex-row items-center gap-5'>
                        <img className='pt-2' src={Configuracion}/>
                        <img src={Perfil}/>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-between w-full h-72 bg-[#2A2A2A]">
                <div className="flex flex-row items-start pt-10 pl-10">
                    <div className="">
                        <img src={FotoUsuario}/>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-row">
                            <h2 className='text-[#FFFFFF] font-semibold text-2xl pl-3 pr-3'>Hiram Mendez</h2>
                            <img src={Rango}/>
                        </div>
                        <div className='flex flex-row items-center pl-3 pt-2 pb-4'>
                            <h2 className='text-[#FFFFFF] pr-2 font-light'>Nivel 1</h2>
                            <div className='w-[1px] h-4 bg-[#FFFFFF]'/>
                            <h2 className='text-[#FFFFFF] pl-2 font-light'>Principiante</h2>
                        </div>
                        <div className='flex flex-row pl-3'>
                            <div className="flex flex-row w-72 h-7 bg-[#D9D9D9]">
                                <div className='bg-[#5257B3] w-36 h-7'>
                                </div>
                            </div>
                            <h2 className='text-[#FFFFFF] pl-2'>50/100</h2>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center pr-44">
                    <h2 className='text-[#FFFFFF] font-normal text-center text-2xl'>Comenzar a explorar nuevos cursos</h2>
                    <h4 className='text-[#FFFFFF] font-thin text-center text-lg pt-3 pb-5'>Comienza a explorar nuevos cursos ahora para conseguir <br /> 
                    muchos premios y subir de rango.</h4>
                    <button className='bg-[#5257B3] w-[45vh] h-9 rounded-sm text-[#FFFFFF] font-semibold ml-6 hover:scale-105 hover:duration-300'>¡Comenzar!</button>
                </div>
            </div>
        </header>
    )
}