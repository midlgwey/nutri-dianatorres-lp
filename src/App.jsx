import AboutMe from "./sections/AboutMe"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import Services from "./sections/Services"
import Hero from "./sections/Hero"
import Navbarc from "./components/Navbarc"
import Ticker from "./components/Ticker"

function App() {
  return (
    <div className="relative">
      <Navbarc/>
      
      <main>
        <Hero />
        <Ticker />
        <AboutMe />
        <Services />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App;