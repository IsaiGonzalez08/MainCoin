import MainCurso from '../assets/Icon/MainCurso.svg'
import PropTypes from 'prop-types';
import CardIcon  from '../assets/Icon/CardIcon.svg'

export const Card = ({titulo,ruta, xp}) => {
    return(
        <>
            <div className="flex flex-col items-center pt-14">
                <div className="border-solid border-2 border-[#2A2A2A] 
                                hover:border-solid hover:border-2 hover:border-[#5257B3] 
                                hover:duration-300 hover:scale-105 rounded-xl hover:rounded-xl">
                    <img className="w-64 h-48 rounded-t-xl block max-w-full object-cover object-top" src={ruta} />
                    <img className='ml-28 z-10 mt-[-3vh]' src={CardIcon} alt="" />
                    <div className="flex flex-col bg-[#131313] w-64 h-52 items-center rounded-b-xl gap-4">
                        <h2 className='text-[#FFFFFF] font-semibold text-3xl pt-2'>{titulo}</h2>
                        <div className="flex flex-row bg-[#2A2A2A] w-36 h-7 justify-start rounded-2xl mt-2">
                            <div className="p-1">
                                <img className='w-5 h-5' src={MainCurso} />
                            </div>
                            <h4 className='flex-flex-row mt-1 ml-4'>
                                <span className='text-[#FFFFFF] font-medium'>Main</span>
                                <span className='text-[#FFFFFF] font-light'>Coin</span>
                            </h4>
                        </div>
                        <h4 className='text-[#FFFFFF]'>Puntos a obtener +{xp}xp</h4>
                        <button className='text-[#FFFFFF] text-2xl font-bold hover:border-b-2 hover:border-b-[#5257B3]'>Ir al curso</button>
                    </div>
                </div>
            </div>
        </>
    )
}

Card.propTypes = {
    titulo: PropTypes.string.isRequired,
    ruta: PropTypes.string.isRequired,
    xp: PropTypes.string.isRequired,
     // Esto valida que 'titulo' sea una cadena y es obligatorio
}