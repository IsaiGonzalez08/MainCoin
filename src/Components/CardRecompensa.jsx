import IconRecompensa from '../assets/Icon/IconRecompensa.svg'
import Esmeralda from '../assets/Icon/Emerald.svg'
import PropTypes from 'prop-types';

export const CardRecompensa = ({img, nombre, puntos, dinero}) => {
    return(
        <div className="w-[41.5vh] h-[52vh] flex flex-col border-2 border-[#000000] mt-[15px]">
            <img className='w-[41.5] h-[40vh] object-cover objetc-center' src={img}/>
            <div className="bg-[#FFFFFF] w-96 h-28">
                <div className="flex flex-row pl-4 pt-2">
                    <h2 className='font-bold text-3xl'>{nombre}</h2>
                    <img src={IconRecompensa} alt="" />
                </div>
                <div className="flex flex-row items-center pl-4 pt-1">
                    <img src={Esmeralda} />
                    <h2 className='pr-2 pl-2 font-medium'>{puntos}</h2>
                    <div className="w-[1.5px] h-5 bg-[#000000]"></div>
                    <h2 className='pl-2'>${dinero}</h2>
                </div>
                <div className="flex flex-row justify-center pt-2">
                    <button className='font-semibold hover:border-b-2 hover:border-[#5257B3] hover:duration-100'>Obtener</button>
                </div>
            </div>
        </div>
    )
}

CardRecompensa.propTypes = {
    img: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    puntos: PropTypes.string.isRequired,
    dinero: PropTypes.string.isRequired,

}