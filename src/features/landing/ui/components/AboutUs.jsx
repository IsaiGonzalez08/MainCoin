export const AboutUs = () => {
    return (
        <div className="bg-primary w-full flex flex-col items-center px-5 py-10 lg:px-20" id="nosotros">
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
                <div className="flex flex-col items-center text-center">
                    <img src="/Icon/Accesibilidad.svg" />
                    <h2 className="text-[#FFFFFF] text-2xl font-bold">Accesibilidad</h2>
                    <p className="text-[#FFFFFF] font-thin">
                        MainCoin se enorgullece de ofrecer una
                        plataforma fácil de usar, diseñada para
                        personas de todos los niveles de
                        experiencia.
                    </p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <img src="/Icon/Seguridad.svg" />
                    <h2 className="text-[#FFFFFF] text-2xl font-bold">Seguridad</h2>
                    <p className="text-[#FFFFFF] font-thin">
                        Nos comprometemos a proporcionar una
                        plataforma segura y confiable, respaldada
                        por las últimas medidas de seguridad en la
                        tecnología blockchain.
                    </p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <img src="/Icon/Seguridad.svg" />
                    <h2 className="text-[#FFFFFF] text-2xl font-bold">Variedad</h2>
                    <p className="text-[#FFFFFF] font-thin">
                        Nuestra plataforma ofrece una amplia gama
                        de NFTs, desde arte digital hasta
                        coleccionables únicos y otros activos
                        digitales.
                    </p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <img src="/Icon/Comunidad.svg" />
                    <h2 className="text-[#FFFFFF] text-2xl font-bold">Comunidad</h2>
                    <p className="text-[#FFFFFF] font-thin">
                        Al unirte a MainCoin, te conviertes en parte
                        de una comunidad en constante crecimiento
                        de entusiastas, creadores y coleccionistas de
                        NFTs.
                    </p>
                </div>
            </div>
        </div>
    )
}
