import Navbar from "./components/Navbar"
import heroSrc from './assets/hero.png'
import Input from "./components/Input"
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

      <section className="grid grid-cols-3 pt-16 gap-4">

        <div className="border-r-2 px-4 text-center border-r-black/60 text-text flex flex-col items-center">
          <h1 className="uppercase font-fjalla-one text-5xl w-[223px]">REMOTELY control MULTIPLE MACHINES OR SITES</h1>
          <p className="font-libre-baskerville text-[16px] pt-6">Manage your operator workforce more effectively</p>
        </div>

        <div className="border-r-2 px-4 text-center border-r-black/60 text-text flex flex-col items-center">
          <h1 className="uppercase font-fjalla-one text-5xl w-[223px]">INCREASED SAFETY AND PREDICTABLE COSTS</h1>
          <p className="font-libre-baskerville text-[16px] pt-6">Flywheel AI removes blindspots for operators and drastically reduces chances of safety incidents</p>
        </div>

        <div className="px-4 text-center text-text flex flex-col items-center">
          <h1 className="uppercase font-fjalla-one text-5xl w-[223px]">MONITOR OPERATOR PERFORMANCE</h1>
          <p className="font-libre-baskerville text-[16px] pt-6">Convenience for supervisors and managers to stay on top of things from anywhere
          </p>
        </div>

      </section>

      <section className="grid grid-cols-2 pt-32">
        <div>
          <h1 className="font-fjalla-one text-text text-6xl uppercase">Contact us</h1>
          <p className="mt-5 font-libre-baskerville">
            +1 415 714 7580
          </p>
          <p className="mt-5 font-libre-baskerville">
            contact@useflywheel.ai
          </p>
          <p className="mt-5 font-libre-baskerville">
            San Francisco, California
          </p>
        </div>

        <div className="space-y-5">
          <Input label="Name" name="Name" type="text" value="" />
          <Input label="Email" name="Email" type="Email" value="" />
          <Input label="Message" name="Message" type="text" value="" variant="textbox" />

          <button className="uppercase font-fjalla-one px-3 md:px-6 py-3 text-white font-bold bg-btn">SUBMIT</button>
        </div>
      </section>
    </div>
  )
}

export default App