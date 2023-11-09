import contenido1 from '../assets/Img/ImgContenido1.png'
import MainContenido from '../assets/Icon/MainContenido.svg'
import Esmeralda from '../assets/Icon/Emerald.svg'
import PropTypes from 'prop-types';

export const CardContenido = ({nombre, puntos, dinero}) => {
    return(
        <div className="flex flex-row">
            <img className='pt-5 pb-5' src={contenido1} alt="" />
            <div className="flex flex-col justify-center pl-5">
                <div className="flex flex-row">
                    <h2 className='font-bold text-[#FFFFFF]'>{nombre}</h2>
                    <img src={MainContenido} alt="" />
                </div>
                <div className="flex flex-row">
                    <img src={Esmeralda} />
                    <h2 className='text-[#FFFFFF] pr-2'>{puntos}</h2>
                    <div className="bg-[#FFFFFF] w-[1px] h-5"></div>
                    <h2 className='text-[#FFFFFF] pl-2'>${dinero}</h2>
                </div>
            </div>
        </div>
    )
    
}

CardContenido.propTypes = {
    nombre: PropTypes.string.isRequired,
    puntos: PropTypes.string.isRequired,
    dinero: PropTypes.string.isRequired,

}