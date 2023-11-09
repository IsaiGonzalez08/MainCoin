export const NavbarUser = () => {
    return(
        <>
            <div className="flex flex-row justify-start w-[160vh] h-40 ml-[10vh] bg-[#FFFFFF] items-center">
                <div className="flex flex-row gap-10">
                    <a className="text-[#585858] hover:font-bold hover:border-b-2 hover:border-b-[#5257B3] hover:duration-200 hover:text-[#5257B3]" href="">Dashboard</a>
                    <a className="text-[#585858] hover:font-bold hover:border-b-2 hover:border-b-[#5257B3] hover:duration-200 hover:text-[#5257B3]" href="">Mis actividades</a>
                    <a className="text-[#585858] hover:font-bold hover:border-b-2 hover:border-b-[#5257B3] hover:duration-200 hover:text-[#5257B3]" href="">Recompensas</a>
                </div>
            </div>
        </>
    )
}