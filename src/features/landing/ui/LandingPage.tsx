import { Header } from '../../../shared/components/Header'
import { InitSection } from './components/InitSection'
import { Nft } from './components/Nft'
import { AboutUs } from './components/AboutUs'
import { Content } from './components/Content'
import { Footer } from '../../../shared/components/Footer'

export const LandingPage = () => {
    return (
        <>
            <div className="bg-black w-full h-screen flex flex-col items-center py-10">
                <Header />
                <InitSection />
            </div>
            <Nft />
            <AboutUs />
            <Content />
            <Footer />
        </>
    )
}
