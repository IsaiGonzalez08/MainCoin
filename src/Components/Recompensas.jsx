import { CardRecompensa } from "./CardRecompensa"
import Recompensa1 from '../assets/Img/Recompensa1.png'
import PropTypes from 'prop-types'

export const Recompensas = ({nombre}) => {
    return(
        <>
        <div className="w-[160vh] h-[80vh] border-t-2 ml-20 mt-32">
            <div className='flex flex-row items-center'>
                <div className="bg-[#EDEDED] w-14 h-14 mt-4 rounded-full absolute"></div>
                <h2 className='text-[#747474] font-medium mt-4 z-10 pl-3 text-5xl'>{nombre}</h2>
            </div>   
            <div className="flex flex-row w-[160vh] min-w-[158vh] h-[58vh] bg-[#D9D9D920] mt-5 pl-10 pr-10 gap-3 overflow-x-scroll overflow-y-hidden overflow-hidden">
                <CardRecompensa img={Recompensa1} nombre="NightFuture" puntos="5 219.90" dinero="200,129,291.00"></CardRecompensa>
                <CardRecompensa img={Recompensa1} nombre="NightFuture" puntos="5 219.90" dinero="200,129,291.00"></CardRecompensa>
                <CardRecompensa img={Recompensa1} nombre="NightFuture" puntos="5 219.90" dinero="200,129,291.00"></CardRecompensa>
                <CardRecompensa img={Recompensa1} nombre="NightFuture" puntos="5 219.90" dinero="200,129,291.00"></CardRecompensa>
                <CardRecompensa img={Recompensa1} nombre="NightFuture" puntos="5 219.90" dinero="200,129,291.00"></CardRecompensa>
            </div> 
        </div>
        
        </>
    )
}

Recompensas.propTypes = {
    nombre: PropTypes.string.isRequired,
}