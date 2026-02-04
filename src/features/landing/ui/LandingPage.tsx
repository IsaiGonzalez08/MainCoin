import { Header } from '../../../shared/components/Header'
import { InitSection } from './components/InitSection'
import { Nft } from './components/Nft'
import { Nosotros } from './components/Nosotros'
import { Contenido } from './components/Contenido'
import { Footer } from '../../../shared/components/Footer'

export const LandingPage = () => {
    return (
        <>
            <div className="bg-primary w-full h-screen flex flex-col items-center py-10">
                <Header />
                <InitSection />
            </div>
            <Nft />
            <Nosotros />
            <Contenido />
            <Footer />
        </>
    )
}
