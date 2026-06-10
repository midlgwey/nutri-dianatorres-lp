import AboutMe from "./sections/AboutMe"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import Services from "./sections/Services"
import Hero from "./sections/Hero"
import Navbarc from "./components/Navbarc"

function App() {
  return (
    <div className="relative">
      <Navbarc/>
      
      <main>
        <Hero />
        <AboutMe />
        <Services />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App;