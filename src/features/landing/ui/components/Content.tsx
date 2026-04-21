import { contentCards } from '../data'
import { CardContenido } from './ContentCard'

export const Content = () => {
    return (
        <div className="bg-black w-full px-5 py-10 lg:px-20" id="content">
            <div className="flex flex-row">
                <span className="text-[#FFFFFF] font-thin text-4xl lg:text-6xl">
                    Tops recompensas en los
                    <span className="text-[#9295CF] font-bold"> ultimos dias.</span>
                </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center mt-14">
                {contentCards.map((card) => (
                    <CardContenido
                        key={card.id}
                        perfil={card.perfil}
                        nombre={card.nombre}
                        puntos={card.puntos}
                        dinero={card.dinero}
                    />
                ))}
            </div>

            <div className="flex flex-row mt-20">
                <div className="bg-[#5257B3] w-14 h-14 rounded-full absolute"></div>
                <h2 className="text-[#FFFFFF] font-bold z-10 text-2xl pl-8 lg:text-4xl">
                    ¡Únete a más de 10 mil de personas que se divierten mientras logran sus
                    objetivos!
                </h2>
            </div>
            <div className="flex justify-center mt-14">
                <button className="bg-[#5257B3] w-2/3 py-3 hover:scale-105 hover:duration-300">
                    <span className="text-[#FFFFFF] font-semibold">Unirme ahora a Main</span>
                    <span className="text-[#FFFFFF] font-light">Coin</span>
                </button>
            </div>
        </div>
    )
}
