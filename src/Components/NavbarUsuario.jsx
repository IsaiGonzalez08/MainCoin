import { NavLink } from 'react-router-dom';

export const NavbarUsuario = () => {
    return(
        <>
            <div className="flex flex-row justify-start w-[160vh] h-40 ml-[10vh] bg-[#FFFFFF] items-center">
                <div className="flex flex-row gap-10">
                    <NavLink className="text-[#585858] hover:font-bold hover:border-b-2 hover:border-b-[#5257B3] hover:duration-200 hover:text-[#5257B3]" to={'/board'}>Dashboard</NavLink>
                    <NavLink className="text-[#585858] hover:font-bold hover:border-b-2 hover:border-b-[#5257B3] hover:duration-200 hover:text-[#5257B3]" to={'/actividad'}>Mis actividades</NavLink>
                    <NavLink className="text-[#585858] hover:font-bold hover:border-b-2 hover:border-b-[#5257B3] hover:duration-200 hover:text-[#5257B3]" to={'/recompensa'}>Recompensas</NavLink>
                </div>
            </div>
        </>
    )
}