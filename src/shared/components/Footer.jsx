export const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-between py-5 w-full bg-primary lg:items-end lg:flex-row lg:px-20">
            <div className="flex flex-col lg:w-1/3">
                <div className="flex flex-col items-center lg:gap-5 lg:flex-row">
                    <img src="/Icon/MainCoin.svg" />
                    <span className="flex flex-row">
                        <span className="text-[#FFFFFF] font-semibold">Main</span>
                        <span className="text-[#FFFFFF] font-light">Coin</span>
                    </span>
                </div>

                <h2 className="text-[#FFFFFF] font-light text-center lg:text-left lg:mt-5">
                    Copyright © 2023
                </h2>
                <h4 className="text-[#FFFFFF] font-thin text-center lg:text-left">
                    ¡Unete a la era digital ahora!
                </h4>
            </div>

            <div className="flex flex-col items-end gap-4 lg:w-2/3">
                <hr className="hidden lg:block w-full text-white" />
                <div className="flex flex-col items-center gap-2 lg:flex-row lg:gap-8">
                    <h4 className="text-[#FFFFFF] font-thin">
                        Siguenos en nuestras redes sociales
                    </h4>
                    <div className="flex flex-row gap-5">
                        <img src="/Icon/Twitter.svg" />
                        <img src="/Icon/Link.svg" />
                        <img src="/Icon/GitHub.svg" />
                    </div>
                </div>
            </div>
        </footer>
    )
}
