import { HeaderDashBoard } from "../Components/HeaderDashboard"
import Logo from '../assets/Icon/IconLogin.svg'
import Coin from '../assets/ICon/Coin.svg'
import FondoCurso from '../assets/Img/FondoCurso.png'

export const CursoUsuario = () => {
    return(
        <>
            <HeaderDashBoard></HeaderDashBoard>
            <div className="flex flex-row">
                <div className="basis-[25%] flex flex-col border-r-2 border-[#C3C3C3] h-[145vh]">
                    <div className="ml-10 mt-10">
                        <img className="w-14" src={Logo}/>
                        <h2 className="text-5xl font-medium pt-8">Into GEAR</h2>
                        <h4 className="text-xl text-[#6F6F6F]">
                            <span className="font-semibold">Main</span>
                            <span className="font-light">Coin</span>
                        </h4>
                        <div className="pt-10">
                            <h2 className="font-semibold text-xl">Material de actividad</h2>
                            <h2 className="font-medium pl-5 pt-2">¿Por qué construimos Gear?</h2>
                            <h2 className="font-medium pl-5 pt-2">Características distintivas del equipo</h2>
                            <h2 className="font-medium pl-5 pt-2">Tecnología de protocolo de engranajes</h2>
                            <h2 className="font-medium pl-5 pt-2">Glosario</h2>
                        </div>
                        <div className="flex items-center hover:border-b-2 hover:border-[#5257B3] w-[100px] cursor-pointer mt-20">
                            <h2 className="font-semibold pr-4">Recompensa</h2>
                            <img src={Coin} />
                            <h2 className="font-semibold pl-2">+500</h2>
                        </div>
                    </div>
                </div>
                <div className="basis-[75%] flex flex-col h-screen">
                    <img src={FondoCurso}/>
                    <div className="ml-10 mt-16">
                        <h1 className="text-6xl text-[#3E3E3E] pb-14">¿Por qué construimos <span className="font-semibold">Gear</span>?</h1>
                        <div className="overflow-y-scroll max-w-[120vh] max-h-[90vh]">
                            <h3 className="text-4xl text-[#3E3E3E] font-semibold pt-10">Aspectos globales</h3>
                            <br />
                            <p className="text-lg">La tecnología Blockchain lanzó una rápida transición de una Internet centralizada basada en 
                                servidores (Web2) a una Internet <br /> descentralizada y distribuida (Web3). Sus características distintivas son: ningún 
                                punto único de falla (la red aún puede funcionar <br /> incluso si una gran proporción de participantes son 
                                atacados/eliminados), resistencia a la censura, cualquiera en la red tiene la <br /> posibilidad de utilizar el 
                                servicio (sin permiso).
                                <br />
                                <br />
                                Web3 presenta nuevos tipos de aplicaciones descentralizadas (dApps) y activos como: finanzas descentralizadas 
                                (DeFi), <br /> intercambios de divisas descentralizados (DEX), mercados y plataformas de juegos descentralizados, NFT,
                                tokens sociales y más.
                                <br />
                                <br /> 
                                Hoy en día, la industria está todavía en su infancia, lo que presenta la oportunidad de un rápido crecimiento. 
                                Es más, con la <br /> demanda de desarrolladores Web3 actualmente en su punto más alto, la adopción parece estar 
                                creciendo más rápido que nunca.
                                <br />
                                <br />
                                Gear se creó con el propósito de convertirse en una plataforma esencial para la construcción de Web3.
                            </p>
                            <h3 className="text-4xl text-[#3E3E3E] font-semibold pt-10">Evolución de Blockchains</h3>
                            <br />
                            <p>
                            En esencia, las cadenas de bloques almacenan un historial de transacciones entre las partes en un formato al que cualquiera <br /> 
                            puede acceder. Garantizan un acceso descentralizado, inmutable y sin permiso a los datos en la cadena de bloques.
                            <br />
                            <br />
                            Las redes que se encontraban en los albores de la tecnología blockchain tienen una serie de problemas importantes:
                            <br /><br />
                            <span>
                                <ul className="list-disc pl-8">
                                    <li>Falta de escalabilidad, baja velocidad de transacción, altos costos de transacción: todo esto obstaculiza el crecimiento de las <br /> 
                                    aplicaciones en Web3.</li>
                                    <li>Los lenguajes de desarrollo de dominios específicos generan altas barreras de entrada. La necesidad de aprender nuevos <br /> 
                                    lenguajes y paradigmas de programación frena el crecimiento de los desarrolladores que ingresan a la Web3.</li>
                                    <li>Protocolos de consenso nativos complejos e ineficientes.</li>
                                    <li>Ausencia de intercomunicación entre redes.</li>
                                </ul>
                            </span>
                            </p>
                            <h3 className="text-4xl text-[#3E3E3E] font-semibold pt-10">Ecosistema Dotsama (Polkadot/Kusama networks)</h3>
                            <br />
                            <p>La solución se encontró en Parity Technologies, que se centra en la creación de una tecnología Layer-0 que conecta blockchains <br /> 
                            en una gran red: Polkadot.
                            <br />
                            <br />
                            Polkadot proporciona un sistema en el que las cadenas de bloques coexisten y se complementan entre sí. Se construyen <br /> 
                            diferentes cadenas de bloques paralelas (parachains) tanto en Substrate como en Polkadot y se conectan a la cadena de <br /> 
                            retransmisión y tienen una conexión nativa. Esto permite que diferentes nodos ejecuten una lógica de aplicación diferente, <br /> 
                            manteniendo cada cadena en su propia plataforma. Todas las paracaídas están interconectadas, creando una red masiva de <br /> 
                            servicios blockchain multifuncionales. Las paracaídas componen la Capa 1 del ecosistema Polkadot, la principal diferencia en <br /> 
                            relación con otras redes blockchain independientes de Capa 1 como Ethereum, Bitcoin, Solana, etc. es que las paracaídas están <br /> 
                            conectadas a través de la biblioteca Substrate Cumulus y las cadenas de bloques independientes a través de puentes.
                            <br />
                            <br />
                            Polkadot y su testnet Kusama están diseñados para ser un banco de pruebas de interacción, desarrollo e implementación de <br /> 
                            blockchain totalmente extensible y escalable. Está diseñado para ser un arnés en gran medida preparado para el futuro, capaz de <br /> 
                            asimilar la nueva tecnología blockchain a medida que esté disponible sin una coordinación descentralizada demasiado complicada <br /> 
                            ni bifurcaciones duras.
                            <br />
                            <br />
                            Hoy en día, Polkadot es una de las redes multicadena de más rápido crecimiento. Aunque tiene una arquitectura adaptable para <br /> 
                            construir plataformas de contratos inteligentes y un rápido desarrollo tecnológico para aplicaciones descentralizadas, no es una <br /> 
                            plataforma de contratos inteligentes en sí misma.
                            <br />
                            <br />
                            Construido sobre Substrate, Gear Protocol facilita el acceso a la infraestructura de implementación de paracaídas de capa 1 o una <br /> 
                            red independiente. Gear simplifica el proceso de implementación de dApp gracias al desarrollo técnico, el software y la utilidad de <br /> 
                            Gear, que permiten la participación en la red y la funcionalidad para un acceso más amplio a la información y soporte técnico.
                            <br />
                            <br />
                            Hay varios componentes en la arquitectura de Polkadot, a saber:
                            <br />
                            <br />
                            <span>
                                <ul className="list-disc pl-8">
                                    <li>Relay Chain.</li>
                                    <li>Parachains.</li>
                                    <li>Bridges.</li>
                                </ul>
                            </span>
                            </p>
                            <h3 className="text-4xl text-[#3E3E3E] font-semibold pt-10">Relay Chain</h3>
                            <br />
                            <p>Relay Chain es el corazón de Polkadot, responsable de la seguridad, el consenso y la interoperabilidad entre cadenas de la red. <br /> 
                            Permite que cadenas de bloques especializadas y públicas se conecten dentro de la red unificada e interoperable de Polkadot. <br /> 
                            Relay Chain puede entenderse como una plataforma Layer-0. 
                            <br />
                            <br />
                            Relay Chain tiene una funcionalidad mínima, lo que naturalmente significa que no se admiten funciones de funcionalidad avanzada, <br /> 
                            como contratos inteligentes, por ejemplo. Otro trabajo específico se delega a las paracaídas, cada una de las cuales tiene <br /> 
                            diferentes implementaciones y características. 
                            <br />
                            <br />
                            La tarea principal de Relay Chain es coordinar el sistema general y sus paracaídas conectadas para construir una red escalable e <br /> 
                            interoperable.
                            <br />
                            <br /> 
                            También es la Relay Chain la responsable de la seguridad compartida, el consenso y la interoperabilidad entre cadenas de la red
                            </p> 
                            <h3 className="text-4xl text-[#3E3E3E] font-semibold pt-10">Parachains</h3>
                            <br />
                            <p>
                            Las paracaídas son cadenas de bloques soberanas que pueden tener sus propios tokens y optimizar su funcionalidad para casos <br /> 
                            de uso específicos.
                            <br /><br />
                            Las paracaídas deben estar conectadas a Relay Chain para garantizar la interoperabilidad con otras redes. Para ello, los parachains <br /> 
                            alquilan un slot para conectividad continua o pueden pagar sobre la marcha (en este caso se llaman Parathreads). Las paracaídas <br /> 
                            componen la Capa 2 del ecosistema de Polkadot.
                            <br />
                            <br />
                            Las paracaídas son validables por validadores de Relay Chain y reciben su nombre del concepto de cadenas paralelizables que <br /> 
                            corren paralelas a la Relay Chain principal. Debido a su naturaleza paralela, pueden paralelizar el procesamiento de transacciones, <br /> 
                            lo que ayuda a mejorar la escalabilidad de la red Polkadot.
                            <br />
                            <br />
                            Las paracaídas optimizan su funcionalidad para casos de uso específicos y, en muchos casos, admiten sus propios tokens.
                            </p>
                            <h3 className="text-4xl text-[#3E3E3E] font-semibold pt-10">Bridges</h3>
                            <br />
                            <p>
                            Las paracaídas son cadenas de bloques soberanas que pueden tener sus propios tokens y optimizar su funcionalidad para casos <br /> 
                            de uso específicos.
                            <br /><br />
                            Las paracaídas deben estar conectadas a Relay Chain para garantizar la interoperabilidad con otras redes. Para ello, los parachains <br /> 
                            alquilan un slot para conectividad continua o pueden pagar sobre la marcha (en este caso se llaman Parathreads). Las paracaídas <br /> 
                            componen la Capa 2 del ecosistema de Polkadot.
                            <br />
                            <br />
                            Las paracaídas son validables por validadores de Relay Chain y reciben su nombre del concepto de cadenas paralelizables que <br /> 
                            corren paralelas a la Relay Chain principal. Debido a su naturaleza paralela, pueden paralelizar el procesamiento de transacciones, <br /> 
                            lo que ayuda a mejorar la escalabilidad de la red Polkadot.
                            <br />
                            <br />
                            Las paracaídas optimizan su funcionalidad para casos de uso específicos y, en muchos casos, admiten sus propios tokens.
                            </p>
                            <h3 className="text-4xl text-[#3E3E3E] font-semibold pt-10">El papel de Gear dentro del ecosistema Dotsama</h3> 
                            <br />
                            <p>Al igual que Polkadot, Gear Protocol utiliza un marco de sustrato. Esto simplifica la creación de diferentes blockchains para <br /> 
                            aplicaciones específicas. Substrate proporciona una amplia funcionalidad lista para usar y permite concentrarse en crear un <br /> 
                            motor personalizado además del protocolo. Los proyectos que se basan en Gear Protocol pueden integrar perfectamente sus soluciones <br /> 
                            en todo el ecosistema de Polkadot/Kusama.
                            <br />
                            <br />
                            El aspecto central de Polkadot es su capacidad para enrutar mensajes arbitrarios entre cadenas. Tanto la red Polkadot como la <br /> 
                            Gear hablan el mismo idioma (mensajes asincrónicos), por lo que todos los proyectos creados con Gear se integran fácilmente en <br /> 
                            las redes Polkadot y Kusama. La arquitectura de mensajería asíncrona permite que las redes Gear sean paracaídas eficientes y <br /> 
                            fáciles de usar.
                            <br />
                            <br />
                            La mayoría de los desarrolladores e inspiradores del Gear Protocol participaron directamente en la creación de las tecnologías <br /> 
                            Polkadot y Substrate. Gear está desarrollando teniendo en cuenta las características de la arquitectura y el diseño de su hermano <br /> 
                            mayor. Confiamos en la alta seguridad y flexibilidad de nuestro producto, al igual que Polkadot.
                            <br />
                            <br />
                            Las redes de engranajes escalan naturalmente a medida que el hardware mejora, ya que utiliza todos los núcleos de la CPU. <br /> 
                            Cualquier persona con una computadora estándar puede ejecutar un nodo Gear hoy y siempre. Con su diseño fragmentable, las <br /> 
                            redes Gear pueden escalar implementándose en múltiples ranuras parachain y pueden fragmentarse como una red independiente <br /> 
                            para una escalabilidad adicional.
                            </p>       
                        </div>
                        <div className="mt-20 ml-10">
                            <button className="w-96 h-16 bg-[#5257B3] text-[#FFFFFF] text-2xl hover:scale-105 hover:duration-300">Marcar como completado</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}