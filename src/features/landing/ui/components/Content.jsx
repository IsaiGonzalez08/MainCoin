import { CardContenido } from './CardContenido'

export const Content = () => {
    return (
        <div className="bg-primary w-full px-5 py-10 lg:px-20" id="contenido">
            <div className="flex flex-row">
                <span className="text-[#FFFFFF] font-thin text-4xl lg:text-6xl">
                    Tops recompensas en los
                    <span className="text-[#9295CF] font-bold"> ultimos dias.</span>
                </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center">
                <div className="flex flex-col divide-y divide-[#2A2A2A]">
                    <CardContenido
                        perfil="/Img/ImgContenido1.png"
                        nombre="NightFuture"
                        puntos="5 219.90"
                        dinero="$200,129,291.00"
                    />
                    <CardContenido
                        perfil="/Img/ImgContenido2.png"
                        nombre="FutureHunter"
                        puntos="5 219.90"
                        dinero="$200,129,291.00"
                    />
                    <CardContenido
                        perfil="/Img/ImgContenido3.png"
                        nombre="MoneyJudge"
                        puntos="5 219.90"
                        dinero="$200,129,291.00"
                    />
                    <CardContenido
                        perfil="/Img/ImgContenido4.png"
                        nombre="LionBumble"
                        puntos="5 219.90"
                        dinero="$200,129,291.00"
                    />
                </div>
                <div className="flex flex-col divide-y divide-[#2A2A2A]">
                    <CardContenido
                        perfil="/Img/ImgContenido5.png"
                        nombre="AstetikCat"
                        puntos="5 219.90"
                        dinero="$200,129,291.00"
                    />
                    <CardContenido
                        perfil="/Img/ImgContenido6.png"
                        nombre="NiftyCanvas"
                        puntos="5 219.90"
                        dinero="$200,129,291.00"
                    />
                    <CardContenido
                        perfil="/Img/ImgContenido7.png"
                        nombre="EtherMasterpieces"
                        puntos="5 219.90"
                        dinero="$200,129,291.00"
                    />
                    <CardContenido
                        perfil="/Img/ImgContenido8.png"
                        nombre="StarBoyVsion"
                        puntos="5 219.90"
                        dinero="$200,129,291.00"
                    />
                </div>
            </div>
            <div className="flex flex-col justify-start">
                <div className="flex flex-row items-center">
                    <div className="bg-[#5257B3] w-14 h-14 rounded-full absolute"></div>
                    <h2 className="text-[#FFFFFF] font-bold z-10 text-2xl text-center">
                        ¡Únete a más de 10 mil de personas que se
                        <br /> divierten mientras logran sus objetivos!
                    </h2>
                </div>
                <div className="flex justify-center">
                    <button className="bg-[#5257B3] items-center hover:scale-110 hover:duration-300">
                        <span className="text-[#FFFFFF] font-semibold">Unirme ahora a Main</span>
                        <span className="text-[#FFFFFF] font-light">Coin</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
