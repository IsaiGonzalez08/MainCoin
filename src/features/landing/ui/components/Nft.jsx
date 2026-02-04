import { Card } from './Card'

export const Nft = () => {
    return (
        <div className="bg-primary w-full h-full py-10" id="explore">
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

            <div className="flex flex-row gap-5 my-5 py-5 px-5 lg:px-20 overflow-x-auto scrollbar-none overflow-y-hidden">
                <Card titulo="Gear en Node" ruta="/Img/Card1.png" xp="50"></Card>
                <Card titulo="Vara Network" ruta="/Img/Card2.png" xp="50"></Card>
                <Card titulo="Contratos" ruta="/Img/Card3.png" xp="50"></Card>
                <Card titulo="GEAR IDEA" ruta="/Img/Card4.png" xp="50"></Card>
                <Card titulo="GEAR JS" ruta="/Img/Card5.png" xp="50"></Card>
                <Card titulo="Contratos" ruta="/Img/Card1.png" xp="50"></Card>
            </div>
        </div>
    )
}
