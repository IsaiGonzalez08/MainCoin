import { Cards } from '../data'
import { Card } from './Card'

export const Nft = () => {
    return (
        <div className="bg-black w-full h-full py-10" id="explore">
            <div className="flex flex-col px-5 lg:px-20">
                <div className="flex flex-row items-center">
                    <div className="bg-secondary w-14 h-14 rounded-full absolute"></div>
                    <h2 className="text-[#FFFFFF] font-bold z-10 text-2xl ml-7 lg:text-5xl">
                        Cursos exclusivos de momento.
                    </h2>
                </div>
                <p className="text-[#FFFFFF] font-light mt-4 lg:text-xl ">
                    Descubre los nuevos NFTs mas exclusivos del momento en un solo lugar.
                </p>
            </div>

            <div className="w-full flex flex-row gap-5 py-8 px-5 lg:px-20 overflow-x-auto scrollbar-none overflow-y-hidden">
                {Cards.map((card) => (
                    <Card key={card.id} titulo={card.titulo} ruta={card.ruta} xp={card.xp}/>
                ))}
            </div>
        </div>
    )
}
