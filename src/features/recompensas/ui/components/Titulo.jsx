import PropTypes from 'prop-types'

export const Titulo = ({nombre}) => {
    return(
        <div className='flex flex-row items-center'>
            <div className="bg-[#EDEDED] w-14 h-14 mt-4 rounded-full absolute"></div>
            <h2 className='text-[#747474] font-medium mt-4 z-10 pl-3 text-5xl'>{nombre}</h2>
        </div>
    )
}

Titulo.propTypes = {
    nombre: PropTypes.string.isRequired,
}