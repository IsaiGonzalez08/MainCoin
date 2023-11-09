import FlechaDer from '../assets/Icon/FlechaDer.svg'
import FlechaIzq from '../assets/Icon/FlechaIzq.svg' 
import card1 from '../assets/Img/Card1.png'
import card2 from '../assets/Img/Card2.png'
import card3 from '../assets/Img/Card3.png'
import card4 from '../assets/Img/Card4.png'
import card5 from '../assets/Img/Card5.png'
import { Card } from './Card'


export const Nft = () => {
    return(
       <>
       <div className="bg-[#131313] w-full h-screen overflow-y-hidden">
            <div className="flex flex-row justify-around pt-52 pr-4">
                <div className='flex flex-row items-center '>
                    <div className="bg-[#5257B3] w-14 h-14 rounded-full absolute"></div>
                    <h2 className='text-[#FFFFFF] font-bold z-10 pl-6 text-5xl'>Cursos exclusivos de momento.</h2>
                </div>
                
                <div className="flex flex-row justify-around gap-4 pt-20 pl-72">
                    <button className='bg-[#414141] rounded-md w-14 pl-3 h-8'><img src={FlechaIzq} alt="" /></button>
                    <button className='bg-[#414141] rounded-md w-14 pl-3 h-8'><img src={FlechaDer} alt="" /></button>
                </div>
            </div>
            <p className='text-[#FFFFFF] text-xl font-light pl-52'>Descubre los nuevos NFTs mas exclusivos del momento en un solo lugar.</p>
            <div className="flex flex-row gap-5 pl-36 overflow-x-scroll h-[80vh] w-[165vh]">
                <Card titulo="Gear en Node" ruta={card1} xp='50'></Card>
                <Card titulo="Gear en Node" ruta={card2} xp='50'></Card>
                <Card titulo="Gear en Node" ruta={card3} xp='50'></Card>
                <Card titulo="Gear en Node" ruta={card4} xp='50'></Card>
                <Card titulo="Gear en Node" ruta={card5} xp='50'></Card>
                <Card titulo="Gear en Node" ruta={card1} xp='50'></Card>
            </div>
       </div>
       </> 
    )
}