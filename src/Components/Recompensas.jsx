import { CardRecompensa } from "./CardRecompensa"
import Recompensa1 from '../assets/Img/Recompensa1.png'

export const Recompensas = () => {
    return(
        <div className="w-[160vh] h-[40vh] border-t-2 border-[#6F6F6F40] ml-20 mt-32">
            <div className='flex flex-row items-center'>
                <div className="bg-[#EDEDED] w-14 h-14 mt-4 rounded-full absolute"></div>
                <h2 className='text-[#747474] font-medium mt-4 z-10 pl-3 text-5xl'>Recompensas</h2>
            </div>   
            <div className="flex flex-row justify-center w-[160vh] h-[55vh] bg-[#D9D9D920] mt-5">
                <CardRecompensa img={Recompensa1} nombre="NightFuture" puntos="5 219.90" dinero="200,129,291.00"></CardRecompensa>
            </div>
        </div>
    )
}