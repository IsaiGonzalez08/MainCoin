export const Footer = () => {
    return (
        <footer className="flex flex-col items-center py-5 w-full bg-[#b84c4c]">
            <img className="" src="/Icon/MainCoin.svg" />

            <span className="flex flex-row">
                <span className="text-[#FFFFFF] font-semibold">Main</span>
                <span className="text-[#FFFFFF] font-light">Coin</span>
            </span>

            <h2 className="text-[#FFFFFF] font-light">Copyright © 2023</h2>
            <h4 className="text-[#FFFFFF] font-thin text-xs">¡Unete a la era digital ahora!</h4>

            <h4 className="text-[#FFFFFF] font-thin">Siguenos en nuestras redes sociales</h4>
            <div className="flex flex-row gap-5">
                <img src="/Icon/Twitter.svg" />
                <img src="/Icon/Link.svg" />
                <img src="/Icon/GitHub.svg" />
            </div>
        </footer>
    )
}
