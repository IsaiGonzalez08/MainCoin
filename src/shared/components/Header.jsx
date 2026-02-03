import { Link, NavLink } from 'react-router-dom'

export const Header = () => {
    return (
        <header className="flex flex-row w-full justify-between px-5 py-5">
            <img className="w-12 h-12" src="/Icon/MainCoin.svg" />

            <div className="flex flex-row gap-4 items-center justify-center">
                <Link
                    className="text-[#FFFFFF] bg-[#5257B3] p-2 rounded-sm font-medium ml-20 w-32 hover:scale-110 hover:duration-300"
                    to="/login"
                >
                    Iniciar sesión
                </Link>
            </div>
        </header>
    )
}
