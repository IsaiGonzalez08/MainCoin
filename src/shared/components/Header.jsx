import { Link, NavLink } from 'react-router-dom'

export const Header = () => {
    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault()
        const element = document.getElementById(targetId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    return (
        <header className="bg-primary flex flex-row justify-between w-full px-5 lg:px-20">
            <NavLink to="/">
                <img className="w-12 h-12" src="/Icon/MainCoin.svg" />
            </NavLink>

            <div className="flex flex-row items-center justify-center gap-20">
                <nav className="hidden sm:flex flex-row gap-5 text-white font-light">
                    <NavLink to="/" onClick={(e) => handleSmoothScroll(e, 'about-us')}>
                        Inicio
                    </NavLink>
                    <NavLink to="/about" onClick={(e) => handleSmoothScroll(e, 'explore')}>
                        Explora
                    </NavLink>
                    <NavLink to="/contact" onClick={(e) => handleSmoothScroll(e, 'about-us')}>
                        Nosotros
                    </NavLink>
                    <NavLink to="/contact" onClick={(e) => handleSmoothScroll(e, 'about-us')}>
                        Contenido
                    </NavLink>
                </nav>

                <Link className="bg-secondary text-white px-4 py-1 rounded-sm" to="/login">
                    Iniciar sesión
                </Link>
            </div>
        </header>
    )
}
