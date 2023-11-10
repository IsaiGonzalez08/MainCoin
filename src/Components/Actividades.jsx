import { useNavigate } from 'react-router-dom'
import FlechaDer from '../assets/Icon/FlechaDer.svg'
import FlechaIzq from '../assets/Icon/FlechaIzq.svg' 

export const Actividades = () => {

    const navigate = useNavigate()

    const navigateCurso = () => {
        navigate('/curso')
    }

    return(
        <div className="w-[160vh] h-[60vh] ml-[10vh] bg-[#FFFFFF] border-y-2 border-[#6F6F6F40]">
            <div className='flex flex-row items-center'>
                <div className="bg-[#EDEDED] w-14 h-14 mt-4 rounded-full absolute"></div>
                <h2 className='text-[#747474] font-medium mt-4 z-10 pl-3 text-5xl'>Mis actividades</h2>
                <div className="flex flex-row ml-[90vh] gap-8 pt-7">
                    <button className='bg-[#B2B4DD] rounded-full w-12 pl-2 h-12'><img src={FlechaIzq}/></button>
                    <button className='bg-[#B2B4DD] rounded-full w-12 pl-2 h-12'><img src={FlechaDer}/></button>
                </div>
            </div>
            <div className='bg-[#B2B4DD20] w-[158vh] h-96 mt-5 ml-[2vh] border-[1.5px] border-[#6F6F6F20]'>
                <div className='flex flex-row justify-center'>
                    <div className="flex flex-col pt-36">
                        <h2 className='text-center text-4xl text-[#6F6F6F] pb-5'>¿Listos para comenzar en el <br /> mundo virtual?</h2>
                        <button className='bg-[#5257B3] w-[25vh] h-9 rounded-sm text-[#FFFFFF] 
                        font-semibold ml-28 hover:scale-105 hover:duration-300' onClick={navigateCurso}>¡COMENZAR!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}