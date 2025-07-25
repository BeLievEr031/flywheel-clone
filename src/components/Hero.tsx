import heroSrc from '../assets/hero.png'

function Hero() {
    return (
        <section className="w-full mt-4">
            <div className="h-[80vh] md:h-[150vh] relative">
                <img src={heroSrc} alt="" className="h-full object-cover" />
                <div className="w-full absolute top-[10%] md:top-[20%] flex items-center flex-col">
                    <div className="py-10 md:py-20 w-[70%] md:w-1/3 bg-btn">
                        <h1 className="uppercase tracking-tighter text-white text-5xl md:text-8xl font-bold font-fjalla-one translate-x-[25%] md:translate-x-[35%]">
                            REMOTELY OPERATE YOUR
                            eXCAVATORS
                        </h1>
                    </div>
                    <p className="w-[55%] md:w-1/3 text-[16px] md:text-2xl text-white font-inter font-bold mt-5 md:mt-8">
                        INCREASE SITE SAFETY AND PRODUCTIVITY WITH FLYWHEEL AI SYSTEMS
                    </p>

                    <button className="mt-5 md:mt-10 text-xl md:text-2xl uppercase font-fjalla-one px-3 md:px-6 py-4 text-white font-extrabold bg-btn">book free demo</button>
                </div>

            </div>
        </section>
    )
}

export default Hero