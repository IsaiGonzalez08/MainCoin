import { reasons } from "../data"

export const AboutUs = () => {
    return (
        <div className="bg-primary w-full flex flex-col items-center px-5 py-10 lg:px-20" id="about-us">
            <h2 className="text-5xl text-center lg:text-left">
                <span className="text-[#FFFFFF] font-bold">¿Por qué Main</span>
                <span className="text-[#FFFFFF] font-light">coin</span>
                <span className="text-[#FFFFFF] font-bold">?</span>
            </h2>
            <h2 className="text-[#FFFFFF] pt-10 text-center">
                <span className="font-bold">Main</span>
                <span className="font-light">
                    Coin es la elección ideal para explorar el emocionante mundo de los NFTs y las{' '}
                    <br /> criptomonedas.
                </span>
            </h2>
            <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-14">
                {reasons.map((reason) => (
                    <div key={reason.id} className="flex flex-col items-center text-center">
                        <img src={reason.icon} />
                        <h2 className="text-[#FFFFFF] text-2xl font-bold">{reason.title}</h2>
                        <p className="text-[#FFFFFF] font-thin">
                            {reason.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
