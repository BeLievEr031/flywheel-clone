import Navbar from "./components/Navbar"
import heroSrc from './assets/hero.png'
import ContactUs from "./components/ContactUs"
import Features from "./components/Features"
function App() {
  return (
    <div className="min-h-screen px-10 md:px-20">
      <Navbar />
      <section className="w-full mt-4">
        <div className="h-[150vh] relative">
          <img src={heroSrc} alt="" className="h-full object-cover" />

          <div className="w-full absolute top-[20%] flex items-center flex-col">
            <div className="py-20 w-1/3 bg-btn">
              <h1 className="uppercase tracking-tighter text-white text-8xl font-bold font-fjalla-one translate-x-[35%]">
                REMOTELY OPERATE YOUR
                eXCAVATORS
              </h1>
            </div>
            <p className="w-1/3 text-2xl text-white font-inter font-bold mt-8">
              INCREASE SITE SAFETY AND PRODUCTIVITY WITH FLYWHEEL AI SYSTEMS
            </p>

            <button className="mt-10 text-2xl uppercase font-fjalla-one px-3 md:px-6 py-4 text-white font-extrabold bg-btn">book free demo</button>
          </div>

        </div>
      </section>
      <Features />
      <ContactUs />
    </div>
  )
}

export default App