import Navbar from "./components/Navbar"
import ContactUs from "./components/ContactUs"
import Features from "./components/Features"
import Hero from "./components/Hero"
function App() {
  return (
    <div className="min-h-screen px-10 md:px-20">
      <Navbar />
      <Hero />
      <Features />
      <ContactUs />
    </div>
  )
}

export default App