import { useNavigate } from 'react-router-dom';
import Logo from '../assets/Icon/MainCoin.svg'

export const Header = () => {

    const navigate = useNavigate()

    const scrollToSectionContenido = (sectionId) => {
        const section = document.querySelector(sectionId);
        if (section) {
          const sectionPosition = section.getBoundingClientRect().top;
          const offsetPosition = sectionPosition - 50;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      };

    const scrollToSectionNosotros = (sectionId) => {
        const section = document.querySelector(sectionId);
        if (section) {
          const sectionPosition = section.getBoundingClientRect().top;
          const offsetPosition = sectionPosition - 100;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      };

    const scrollToSectionExplora = (sectionId) => {
        const section = document.querySelector(sectionId);
        if (section) {
          const sectionPosition = section.getBoundingClientRect().top;
          const offsetPosition = sectionPosition;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      };

    const handleClickExplora = (event) => {
        event.preventDefault();
        scrollToSectionExplora('#explora');
      };

    const handleClickNosotros = (event) => {
        event.preventDefault();
        scrollToSectionNosotros('#nosotros');
      };

    const handleClickContenido = (event) => {
        event.preventDefault();
        scrollToSectionContenido('#contenido');
      };
      
    const handleNavigateLogin = () => {
      navigate('/login')
    }  

    return(
        <header className="flex flex-row">
            <div className="flex flex-row basis-1/2 justify-center pt-10 pr-60">
                <img src={Logo}/>
                <h2 className='text-[#FFFFFF] font-semibold pl-2 pt-2'>Main</h2>
                <h2 className='text-[#FFFFFF] font-light pt-2'>Coin</h2>
            </div>
            <div className="flex flex-row basis-1/2 gap-4 items-center justify-center pt-10">
                <a className='text-[#FFFFFF] text-lg font-light hover:font-bold hover:border-b-2 hover:duration-300'>Inicio</a>
                <a className='text-[#FFFFFF] text-lg font-light hover:font-bold hover:border-b-2 hover:duration-300' onClick={handleClickExplora}>Explora</a>
                <a className='text-[#FFFFFF] text-lg font-light hover:font-bold hover:border-b-2 hover:duration-300' onClick={handleClickNosotros}>Nosotros</a>
                <a className='text-[#FFFFFF] text-lg font-light hover:font-bold hover:border-b-2 hover:duration-300' onClick={handleClickContenido}>Contenido</a>
                <button className='text-[#FFFFFF] bg-[#5257B3] p-2 rounded-sm 
                font-medium ml-20 w-32 hover:scale-110 hover:duration-300' 
                onClick={handleNavigateLogin}>Iniciar sesión</button>
            </div>
        </header>
    )
}