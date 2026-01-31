import { Card } from "./Card";

export const Nft = () => {
  return (
    <div
      className="bg-[#131313] w-full h-screen overflow-y-hidden overflow-hidden"
      id="explora"
    >
      <div className="flex flex-row justify-around pt-52 pr-2 ml-20">
        <div className="flex flex-row items-center">
          <div className="bg-[#5257B3] w-14 h-14 rounded-full absolute"></div>
          <h2 className="text-[#FFFFFF] font-bold z-10 pl-7 text-5xl">
            Cursos exclusivos de momento.
          </h2>
        </div>
        <div className="flex flex-row justify-around gap-4 pt-20 pl-72">
          <button className="bg-[#414141] rounded-md w-14 pl-3 h-8">
            <img src="/Icon/FlechaIzq.svg" />
          </button>
          <button className="bg-[#414141] rounded-md w-14 pl-3 h-8">
            <img src="/Icon/FlechaDer.svg" />
          </button>
        </div>
      </div>
      <p className="text-[#FFFFFF] text-xl font-light pl-52">
        Descubre los nuevos NFTs mas exclusivos del momento en un solo lugar.
      </p>
      <div className="flex flex-row gap-5 pl-36 overflow-x-scroll h-[80vh] w-[165vh]">
        <Card titulo="Gear en Node" ruta="/Img/Card1.png" xp="50"></Card>
        <Card titulo="Vara Network" ruta="/Img/Card2.png" xp="50"></Card>
        <Card titulo="Contratos" ruta="/Img/Card3.png" xp="50"></Card>
        <Card titulo="GEAR IDEA" ruta="/Img/Card4.png" xp="50"></Card>
        <Card titulo="GEAR JS" ruta="/Img/Card5.png" xp="50"></Card>
        <Card titulo="Contratos" ruta="/Img/Card1.png" xp="50"></Card>
      </div>
    </div>
  );
};
