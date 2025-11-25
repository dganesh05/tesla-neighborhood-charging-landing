import Hero from './components/Hero'
import Navbar from './components/Navbar'
import heroBg from './assets/hero-background.jpeg'
import Stats from './components/Stats'
import HowItWorks from './components/HowItWorks'
import Objections from './components/Objections'
import Calculator from './components/Calculator'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
      <Hero backgroundImage={heroBg} />
      <Stats />
      <HowItWorks />
      <Objections />
      <Calculator />
      <FinalCTA />
      </main>
      <Footer />
    </>
  )
}

export default App