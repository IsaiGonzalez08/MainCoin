import Log from '../assets/Icon/MainCoin.svg'

export const Header = () => {
    return(
        <header className="flex flex-row">
            <div className="flex flex-row basis-1/2 justify-center pt-10 pr-60">
                <img src={Log}/>
                <h2 className='text-[#FFFFFF] font-semibold pl-2 pt-2'>Main</h2>
                <h2 className='text-[#FFFFFF] font-light pt-2'>Coin</h2>
            </div>
            <div className="flex flex-row basis-1/2 gap-4 items-center justify-center pt-10">
                <a className='text-[#FFFFFF] text-lg font-light' href="">Inicio</a>
                <a className='text-[#FFFFFF] text-lg font-light' href="">Explora</a>
                <a className='text-[#FFFFFF] text-lg font-light' href="">Nosotros</a>
                <a className='text-[#FFFFFF] text-lg font-light' href="">Contenido</a>
                <button className='text-[#FFFFFF] bg-[#5257B3] p-2 rounded-sm font-medium ml-20 w-32'>Iniciar sesión</button>
            </div>
        </header>
    )
}