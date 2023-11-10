import Esmeralda from '../assets/Icon/Emerald.svg'
import PropTypes from 'prop-types'
import Coin from '../assets/Icon/Coin.svg'

export const CardEsmeralda = ({puntos, costo}) => {
    return(
        <div className="w-[180px] h-[270px] bg-white ml-10 mt-5 rounded-lg border-2 border-[#F5F5F5] hover:scale-105 hover:duration-100">
            <div className="flex flex-col">
                <div className="flex flex-row justify-center pt-4">
                    <img className='w-16' src={Esmeralda} />
                </div>
                <div className="flex flex-row justify-center pt-2">
                    <h2 className='font-medium text-sm'>MainCoins</h2>
                </div>
                <div className="flex flex-row justify-center">
                    <h2 className='text-3xl font-normal text-center'>{puntos}</h2>
                </div>
                <div className="flex flex-col items-center pt-4">
                    <h2 className=''>Costo</h2>
                    <div className="flex flex-row items-center mr-3">
                        <img src={Coin}/>
                        <h2 className='font-bold pl-1 text-xl'>{costo}</h2>
                    </div>
                </div>
                <div className="pl-10 pt-2">
                    <button className='bg-[#5257B3] text-[#FFFFFF] font-semibold rounded-md w-24 h-6 text-sm hover:scale-105 hover:duration-200'>Comprar</button>
                </div>
            </div>
        </div>
    )
}

CardEsmeralda.propTypes = {
    puntos: PropTypes.string.isRequired,
    costo: PropTypes.string.isRequired,
}