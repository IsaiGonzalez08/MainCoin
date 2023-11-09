import ImgUser from '../assets/Img/ImgUserCirc.png'
import Esmeralda from '../assets/Icon/Emerald.svg'
import Coin from '../assets/Icon/Coin.svg'
import LogroMain from '../assets/Icon/LogroMain.svg'
import Rango from '../assets/Icon/Rango.svg'

export const Progreso = () => {

    const divStyle = {
        background: `linear-gradient(to right, #414141 70%, #414141 75%, #5257B3 100%)`,
        width: '160vh',
        height: '30vh',
        borderRadius: '20vh',
        marginLeft: '80px',
        marginTop: '10px',
      };

    return(
        <>
            <div className='flex flex-row items-center ml-24'>
                <div className="bg-[#EDEDED] w-14 h-14 mt-4 rounded-full absolute"></div>
                <h2 className='text-[#747474] font-medium mt-4 z-10 pl-3 text-5xl'>Mi progreso</h2>
            </div>
            <div style={divStyle}>
                <div className='flex flex-row gap-24 items-center'>
                    <div>
                        <img className='ml-10 w-60 mt-5' src={ImgUser}/>
                    </div>
                    <div className='flex flex-col'>
                        <h2 className='text-3xl text-[#FFFFFF] font-semibold'>Hiram Mendez</h2>
                        <h4 className='text-lg text-[#FFFFFF] font-normal'>correoprueba@electronico.com</h4>
                        <div className="flex flex-row items-center pt-5">
                            <img className='w-8' src={Esmeralda} alt="" />
                            <h2 className='text-[#FFFFFF]'>Total esmeraldas: 99999</h2>
                        </div>
                        <div className="flex flex-row items-center">
                            <img src={Coin} alt="" />
                            <h2 className='text-[#FFFFFF]'>Total de monedas: 99999</h2>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h2 className='text-[#FFFFFF] font-light'>Logros</h2>
                        <div className="flex flex-row">
                            <img src={LogroMain} alt="" />
                            <img src={LogroMain} alt="" />
                            <img src={LogroMain} alt="" />
                            <img src={LogroMain} alt="" />
                        </div>
                        <div className="flex flex-row">
                            <img src={LogroMain} alt="" />
                            <img src={LogroMain} alt="" />
                            <img src={LogroMain} alt="" />
                            <img src={LogroMain} alt="" />
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        <div className="flex flex-row items-center">
                            <img className='w-14' src={Rango} alt="" />
                            <h2 className='text-[#FFFFFF] pl-2 pr-3'>Nivel 1</h2>
                            <div className='w-[1px] h-4 bg-[#FFFFFF]'></div>
                            <h2 className='text-[#FFFFFF] pl-2'>Principiante</h2>
                        </div>
                        <h2 className='text-[#FFFFFF] pt-2 font-light'>Progreso</h2>
                        <div className="flex flex-row">
                            <div className="flex flex-row w-72 h-7 bg-[#D9D9D9]">
                                <div className='bg-[#5257B3] w-36 h-7'>

                                </div>
                            </div>
                            <h2 className='text-[#FFFFFF] pl-2'>50/100</h2>
                        </div>
                        <h2 className='text-[#FFFFFF] font-medium'>50 XP <span className='font-light'>para el nivel 2</span></h2>
                    </div>
                </div>
            </div>
        </>
    )
}