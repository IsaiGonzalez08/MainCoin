import { CardContenido } from "./CardContenido"


export const Contenido = () => {
    return(
        <>
            <div className="bg-[url('./assets/Img/Background3.png')] w-full h-screen bg-no-repeat bg-cover">
                <div className="flex flex-row justify-start">
                    <h1 className="text-6xl pl-36">
                        <span className="text-[#FFFFFF] font-thin">Tops recompensas en los</span>
                        <br />
                        <span className="text-[#9295CF] font-bold">ultimos dias.</span>
                    </h1>
                </div>
                <div className="flex flex-row justify-center gap-10 pt-20">
                    <div className="flex flex-col divide-y pr-48">
                        <div className='w-96'></div>
                        <CardContenido/>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                    </div>
                    <div className="flex flex-col divide-y">
                        <div className='w-96'></div>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                    </div>
                </div>
            </div>
        </>
    )
}