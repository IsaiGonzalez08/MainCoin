import { Link } from 'react-router-dom'

export const InitSection = () => {
    return (
        <main className="w-full h-full flex flex-col justify-between px-5 mt-10 lg:px-20">
            <div className="w-full flex flex-row items-center gap-10">
                <div className="flex flex-col h-full justify-between w-full lg:w-1/2">
                    <div className="flex flex-col items-center gap-3 lg:items-start lg:gap-8 lg:pt-10">
                        <h2 className="text-4xl font-thin text-white text-center sm:text-6xl lg:text-7xl lg:text-left">
                            <span>Explora el nuevo mundo del </span>
                            <span className="text-[#9295CF] font-semibold">arte digital</span>
                        </h2>
                        <p className="text-white font-light text-center lg:text-left">
                            Bienvenido al mundo del arte de los NFT, en donde MainCoin tiene
                            diversas recompensas para ti mientras vas aprendiendo en este nuevo
                            mundo virtual.
                        </p>
                        <Link className="text-white" to="/login">
                            Empezar ahora!
                        </Link>
                    </div>

                    <div className="flex flex-row gap-3 mt-3 justify-center lg:justify-start">
                        <h2 className="text-white font-bold">10K</h2>
                        <div className="bg-white w-px h-5"></div>
                        <h2 className="text-white font-light">Usuarios conectados</h2>
                    </div>
                </div>
                <div className="hidden w-full lg:flex lg:justify-center lg:flex-col lg:w-1/2">
                    <img className="w-full h-[400px] rounded-t-lg" src="/Img/init-card.png" />
                    <div className="bg-white w-full p-5 rounded-b-lg">
                        <div className="flex flex-col">
                            <h3 className="text-[#7276C1] font-light">Nuevo Curso</h3>
                            <h2 className="text-[#7276C1] font-semibold text-2xl">
                                ¿Cómo iniciar en Gear?
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 justify-items-center items-center gap-5 mt-5">
                <img src="/Icon/Logo1.svg" alt="" />
                <img src="/Icon/Logo2.svg" alt="" />
                <img src="/Icon/Logo3.svg" alt="" />
                <img src="/Icon/Logo4.svg" alt="" />
                <img src="/Icon/Logo5.svg" alt="" />
            </div>
        </main>
    )
}
