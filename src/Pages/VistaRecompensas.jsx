import { CardUsuarioRecom } from "../Components/CardUsuarioRecom"
import { HeaderDashBoard } from "../Components/HeaderDashboard"
import { NavbarUser } from "../Components/NavbarUsuario"
import { Recompensas } from "../Components/Recompensas"
import { Titulo } from "../Components/Titulo"
import FlechaDer from '../assets/Icon/FlechaDer.svg'
import FlechaIzq from '../assets/Icon/FlechaIzq.svg'
import Recompensa1 from '../assets/Img/UserRecompensa1.png'
import Coin from '../assets/Icon/Coin.svg'
import Esmeralda from '../assets/Icon/Emerald.svg'
import { CardEsmeralda } from "../Components/CardEsmeralda"
import { CardRecompensa } from "../Components/CardRecompensa"
import { Footer } from "../Components/Footer"
import filtro from '../assets/Icon/filtro.svg'
import filtro1 from '../assets/Img/filtro1.png'
import filtro2 from '../assets/Img/filtro2.png'
import filtro3 from '../assets/Img/filtro3.png'
import filtro4 from '../assets/Img/filtro4.png'
import filtro5 from '../assets/Img/filtro5.png'
import filtro6 from '../assets/Img/filtro6.png'
import filtro7 from '../assets/Img/filtro7.png'
import filtro8 from '../assets/Img/filtro8.png'
import filtro9 from '../assets/Img/filtro9.png'
import filtro10 from '../assets/Img/filtro10.png'


export const VistaRecompensa = () => {

    return(
        <>
            <HeaderDashBoard></HeaderDashBoard>
            <NavbarUser></NavbarUser>
            <div className="w-[160vh] h-[70vh] ml-[10vh] bg-[#FFFFFF] border-y-2 border-[#6F6F6F40]">
                <div className='flex flex-row items-center'>
                    <div className="bg-[#EDEDED] w-14 h-14 mt-4 rounded-full absolute"></div>
                    <h2 className='text-[#747474] font-medium mt-4 z-10 pl-3 text-5xl'>Mis recompensas</h2>
                    <div className="flex flex-row ml-[90vh] gap-8 pt-7">
                        <button className='bg-[#B2B4DD] rounded-full w-12 pl-2 h-12'><img src={FlechaIzq}/></button>
                        <button className='bg-[#B2B4DD] rounded-full w-12 pl-2 h-12'><img src={FlechaDer}/></button>
                    </div>
                </div>
                <div className='bg-[#D9D9D920] w-[158vh] h-[528px] mt-5 ml-[2vh] border-[1.5px] border-[#6F6F6F20] overflow-hidden'>
                    <div className='flex flex-row pl-5 pt-5 gap-5'>
                        <CardUsuarioRecom img={Recompensa1} nombre="ShadowFuture" puntos="3 000" dinero="4,200.00"></CardUsuarioRecom>
                        <CardUsuarioRecom img={filtro9} nombre="ShadowFuture" puntos="3 000" dinero="4,200.00"></CardUsuarioRecom>
                        <CardUsuarioRecom img={filtro10} nombre="ShadowFuture" puntos="3 000" dinero="4,200.00"></CardUsuarioRecom>
                    </div>
                </div>
            </div>
            <Recompensas nombre="Top recompensas"></Recompensas>
            <div className="flex flex-row justify-between border-t-2 border-[#6F6F6F40] w-[160vh] ml-20">
                <Titulo nombre="Esmeraldas"></Titulo>
                <div className="flex flex-row gap-5 pr-32 pt-20">
                    <div className="flex flex-row items-center">
                        <img className="w-7" src={Esmeralda} />
                        <h2 className='pr-2 pl-2 font-semibold'>99999</h2>
                    </div>
                    <div className="flex flex-row items-center">
                        <img src={Coin}/>
                        <h2 className='pr-2 pl-2 font-semibold'>99999</h2>
                    </div>
                </div>
            </div>
            <div className="w-[140vh] h-[40vh] bg-white mt-20 ml-40 flex flex-col items-start">
                <h2 className="font-semibold text-[#2A2A2A] text-xl ml-10 pt-7">Comprar MainCoins</h2>
                <div className="flex flex-row gap-10">
                    <CardEsmeralda puntos="100.00" costo="1000"></CardEsmeralda>
                    <CardEsmeralda puntos="500.00" costo="4000"></CardEsmeralda>
                    <CardEsmeralda puntos="1.000.00" costo="9000"></CardEsmeralda>
                    <CardEsmeralda puntos="10.000.00" costo="20.000"></CardEsmeralda>
                    <CardEsmeralda puntos="15.000.00" costo="30.000"></CardEsmeralda>
                </div>
            </div>
            <div className="ml-20 border-t-2 border-[#6F6F6F40] w-[160vh] mt-20">
                <div className="mt-5">
                    <Titulo nombre="Recompensas"></Titulo>
                    <div className="flex flex-row">
                        <div className="flex flex-col basis-1/5 ml-16">
                            <div className="flex flex-row justify-start gap-3 pt-8">
                                <h2 className="text-[#2A2A2A]">Filtrar y ordenar</h2>
                                <img src={filtro}/>
                            </div>
                            <div className="flex flex-col gap-10 pt-10 pl-10">
                                <select className="w-32">
                                    <option value="" disabled>Categoria</option>
                                    <option value="">Animales</option>
                                    <option value="">Futurista</option>
                                    <option value="">Nova</option>
                                    <option value="">Judge</option>
                                </select>
                                <select className="w-32">
                                    <option value="">Basica</option>
                                    <option value="">Premium</option>
                                    <option value="">Rara</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col basis-4/5 gap-5">
                            <div className="flex flex-row gap-5">
                                <CardRecompensa img={filtro1} nombre="CatSweet" puntos="200" dinero="298.19"></CardRecompensa>
                                <CardRecompensa img={filtro2} nombre="HoneyBoo" puntos="1 236" dinero="1,278.16"></CardRecompensa>
                                <CardRecompensa img={filtro3} nombre="EstherNova" puntos="450" dinero="457.02"></CardRecompensa>
                            </div>
                            <div className="flex flex-row gap-5">
                                <CardRecompensa img={filtro4} nombre="XelaoNight" puntos="1 273.23" dinero="1,3100.21"></CardRecompensa>
                                <CardRecompensa img={filtro5} nombre="XenoFuture" puntos="5 219.90" dinero="3,028.12"></CardRecompensa>
                                <CardRecompensa img={filtro6} nombre="BunnyBlond" puntos="6 123.28" dinero="4,236.00"></CardRecompensa>
                            </div>
                            <div className="flex flex-row gap-5">
                                <CardRecompensa img={filtro7} nombre="FutureDown" puntos="70" dinero="129.18"></CardRecompensa>
                                <CardRecompensa img={filtro8} nombre="HunterUp" puntos="400" dinero="504.29"></CardRecompensa>
                                <CardRecompensa img={filtro9} nombre="JudgeCoin" puntos="9 125.27" dinero="10,162.00"></CardRecompensa>
                            </div>
                            <div className="flex flex-row justify-center gap-8 pt-7">
                                <button className='bg-[#B2B4DD] rounded-full w-12 pl-2 h-12'><img src={FlechaIzq}/></button>
                                <button className='bg-[#B2B4DD] rounded-full w-12 pl-2 h-12'><img src={FlechaDer}/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-20">
                <Footer></Footer>
            </div>
        </>
    )
}