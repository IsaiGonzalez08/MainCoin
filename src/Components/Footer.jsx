import Logo from '../assets/Icon/MainCoin.svg';
import Twitter from '../assets/Icon/Twitter.svg';
import Linkedln from '../assets/Icon/Link.svg';
import Github from '../assets/Icon/GitHub.svg';

export const Footer = () => {
    return(
        <footer className="flex flex-row justify-between w-full h-36 overflow-hidden bg-[#141414] items-center">
            <div className="flex flex-col items-end ml-32">
                <div className="flex flex-row justify-around mr-10">
                    <div className="">
                        <img className='' src={Logo}/>
                    </div>
                    <div className="">
                        <h2 className='ml-3'>
                            <span className='text-[#FFFFFF] font-semibold'>Main</span>
                            <span className='text-[#FFFFFF] font-light'>Coin</span>
                        </h2>
                    </div>   
                </div>
                <div className="pt-2">
                    <h2 className='text-[#FFFFFF] mr-9 font-light'>Copyright © 2023</h2>
                </div>
                <div className='pt-2 mr-6'>
                    <h4 className='text-[#FFFFFF] font-thin text-xs'>¡Unete a la era digital ahora!</h4>
                </div>
            </div>
            <div className="flex flex-col items-end mt-16 pr-32">
                <div className="flex flex-row"></div>
                <div className='w-[100vh] h-[1px] bg-[#FFFFFF]'></div>
                <div className="flex flex-row">
                    <h4 className='text-[#FFFFFF] pt-4 font-thin'>Siguenos en nuestras redes sociales</h4>
                    <div className="flex flex-row pt-3 pl-10 gap-5">
                        <img src={Twitter}/>
                        <img src={Linkedln}/>
                        <img src={Github}/>
                    </div>
                </div>
            </div>
        </footer>
    )
}