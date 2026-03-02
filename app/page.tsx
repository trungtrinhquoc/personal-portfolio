import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import WorkExperience from './components/WorkExperience'
import AIMetrics from './components/AIMetrics'
import FeaturedSystem from './components/FeaturedSystem'
import AIPhilosophy from './components/AIPhilosophy'
import BackendEngineering from './components/BackendEngineering'
import Projects from './components/Projects'
import SystemDesign from './components/SystemDesign'
import TechStack from './components/TechStack'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {

    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <AboutMe />
                <WorkExperience />
                <AIMetrics />
                <FeaturedSystem />
                <AIPhilosophy />
                <BackendEngineering />
                <Projects />
                <SystemDesign />
                <TechStack />
                <Education />
                <Contact />
            </main>
            <Footer />
        </>
    )
}
