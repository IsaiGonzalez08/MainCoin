import PropTypes from 'prop-types';
import Coin from '../assets/Icon/Coin.svg'

export const CardActividades = ({img, nombre, valor, descripcion, xp, curso}) => {
    return(
        <div className="w-[340px] h-[52vh] flex flex-col border-2 hover:border-[#5257B3] hover:duration-100 hover:scale-105 mt-[25px]">
            <img className='w-[340px] h-[25vh] object-cover object-top' src={img}/>
            <div className="bg-[#FFFFFF] w-[337px] h-[245px] flex flex-col">
                <div className="flex flex-row pl-4 pt-2 justify-around">
                    <h2 className='font-bold text-[26px] pr-14'>{nombre}</h2>
                    <div className="flex flex-row pr-8">    
                        <img src={Coin}/>
                        <h2 className='text-xl pl-1'>+{valor}</h2>
                    </div>
                </div>
                <div className='flex flex-row justify-center pt-2 pl-2'>
                    <h2 className='text-sm p-3 font-ms'>{descripcion}</h2>
                </div>
                <h2 className='pl-6'>
                    <span className='text-[#9B9B9B] font-medium'>Main</span>
                    <span className='text-[#9B9B9B] font-light'>Coin</span>
                </h2>
                <div className="flex flex-row justify-center pt-2">
                    <h2 className='font-medium'>Genera +{xp} XP por completarlo</h2>
                </div>
                <div className='flex flex-row justify-center pt-3'>
                    <button className='hover:border-b-2 hover:border-[#5257B3] hover:duration-100 font-semibold' onClick={curso}>Comenzar</button>
                </div>
            </div>
        </div>
    )
}

CardActividades.propTypes = {
    img: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    valor: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    xp: PropTypes.string.isRequired,
    curso: PropTypes.string.isRequired,
}