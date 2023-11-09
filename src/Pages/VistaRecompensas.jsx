import { HeaderDashBoard } from "../Components/HeaderDashboard"
import { NavbarUser } from "../Components/NavbarUser"
import FlechaDer from '../assets/Icon/FlechaDer.svg'
import FlechaIzq from '../assets/Icon/FlechaIzq.svg'

export const VistaRecompensa = () => {
    return(
        <>
            <HeaderDashBoard></HeaderDashBoard>
            <NavbarUser></NavbarUser>
            <div className="w-[160vh] h-[60vh] ml-[10vh] bg-[#FFFFFF] border-y-2 border-[#6F6F6F40]">
                <div className='flex flex-row items-center'>
                    <div className="bg-[#EDEDED] w-14 h-14 mt-4 rounded-full absolute"></div>
                    <h2 className='text-[#747474] font-medium mt-4 z-10 pl-3 text-5xl'>Mis recompensas</h2>
                    <div className="flex flex-row ml-[90vh] gap-8 pt-7">
                        <button className='bg-[#B2B4DD] rounded-full w-12 pl-2 h-12'><img src={FlechaIzq} /></button>
                        <button className='bg-[#B2B4DD] rounded-full w-12 pl-2 h-12'><img src={FlechaDer} /></button>
                    </div>
                </div>
                <div className='bg-[#B2B4DD20] w-[158vh] h-[450px] mt-5 ml-[2vh] border-[1.5px] border-[#6F6F6F20]'>
                    <div className='flex flex-row justify-center'>
                    </div>
                </div>
            </div>
        </>
    )
}