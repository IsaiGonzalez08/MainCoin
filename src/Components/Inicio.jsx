import flecha from '../assets/Icon/Flecha.svg'
import curso from '../assets/Img/CursoInicio.png'

export const Inicio = () => {
    return (
        <>
            <div className="flex flex-row justify-center pt-20">
                <div className="flex flex-col basis-1/2 justify-center items-center">
                    <h2 className="text-7xl font-light">
                        <span className="text-white font-thin">Explora el nuevo <br /> mundo del </span>
                        <span className="text-[#9295CF] font-semibold">arte<br />  digital</span>
                    </h2>
                    <p className="text-[#FFFFFF] font-light mt-5 ml-32">
                        Bienvenido al mundo del arte de los NFT, en donde MainCoin tiene diversas
                        recompensas <br /> para ti mientras vas aprendiento en este nuevo mundo virtual.
                    </p>
                    <div className="w-56 h-10 mt-10 mr-60 flex flex-row items-center relative cursor-pointer">
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                            <div className="absolute bg-[#5257B3] w-12 h-12 rounded-full hover:w-64 transition-width duration-300 ml-2"></div>
                        </div>
                        <h2 className='text-[#FFFFFF] relative z-10 pt-2'>Empezar ahora!</h2>
                        <img className='pl-4 relative z-11 pt-2' src={flecha} alt="" />
                    </div>
                </div>
                <div className="basis-1/2 pl-28">
                    <img src={curso} />
                    <div className='bg-[#FFFFFF] w-[47.8vh] h-24 rounded-b-xl'>
                        <div className='flex flex-col ml-8 '>
                            <h3 className='text-[#7276C1] font-light pt-4'>Nuevo Curso</h3>
                            <h2 className='text-[#7276C1] font-semibold text-2xl'>¿Cómo iniciar en Gear?</h2>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}