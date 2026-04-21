import PropTypes from 'prop-types'

export const Card = ({ titulo, ruta, xp }) => {
    return (
        <div className="cursor-pointer rounded-3xl flex flex-col items-center border-solid duration-300 border-2 border-[#2A2A2A] transition-all hover:border-[#5257B3] hover:scale-105">
            <img className="min-w-[250px] h-52 object-cover rounded-t-3xl" src={ruta} />
            <img className="mt-[-3vh]" src="/Icon/CardIcon.svg" />
            <div className="flex flex-col items-center bg-black pb-8 mt-4">
                <h2 className="text-white font-semibold text-3xl">{titulo}</h2>
                <div className="flex flex-row justify-center items-center bg-[#2A2A2A] w-fit p-[2px] rounded-3xl gap-3 mt-3">
                    <img className="w-5 h-5" src="/Icon/MainCurso.svg" />
                    <h4 className="flex flex-row pr-3">
                        <span className="text-white font-medium">Main</span>
                        <span className="text-white font-light">Coin</span>
                    </h4>
                </div>
                <h4 className="text-white mt-3">Puntos a obtener +{xp}xp</h4>
                <button className="text-white text-2xl font-bold mt-1">Comenzar</button>
            </div>
        </div>
    )
}

Card.propTypes = {
    titulo: PropTypes.string.isRequired,
    ruta: PropTypes.string.isRequired,
    xp: PropTypes.string.isRequired,
}
