import PropTypes from 'prop-types';
import IconRecompensa from '../assets/Icon/IconRecompensa.svg'
import Esmeralda from '../assets/Icon/Emerald.svg'

export const CardUsuarioRecom = ({img, nombre, puntos, dinero}) => {
    return(
        <div className="w-[350px] h-[484px] hover:border-2 hover:border-[#5257B3] hover:rounded-[4px] hover:scale-105 hover:duration-300">
            <img className='w-[347px] h-[400px] object-cover objetc-center rounded-t-sm' src={img}/>
            <div className="bg-[#FFFFFF] w-[347px] h-[80px] rounded-b-sm border-2 border-[#E8E8E8] hover:border-none">
                <div className="flex flex-row pl-4 pt-2">
                    <h2 className='font-bold text-2xl'>{nombre}</h2>
                    <img src={IconRecompensa}/>
                </div>
                <div className="flex flex-row items-center pl-4 pt-1">
                    <img src={Esmeralda} />
                    <h2 className='pr-2 pl-2 font-medium'>{puntos}</h2>
                    <div className="w-[1.5px] h-5 bg-[#000000]"></div>
                    <h2 className='pl-2'>${dinero}</h2>
                </div>
            </div>
        </div>
    )
}

CardUsuarioRecom.propTypes = {
    img: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    puntos: PropTypes.string.isRequired,
    dinero: PropTypes.string.isRequired,
}