import Input from "./Input"

function ContactUs() {
    return (
        <section className="md:grid md:grid-cols-2 pt-20 md:pt-32 md:px-20 pb-10">
            <div>
                <h1 className="font-fjalla-one text-text text-4xl md:text-6xl uppercase">Contact us</h1>
                <p className="mt-3 md:mt-5 font-libre-baskerville">
                    +1 415 714 7580
                </p>
                <p className="mt-3 md:mt-5 font-libre-baskerville">
                    contact@useflywheel.ai
                </p>
                <p className="mt-3 md:mt-5 font-libre-baskerville">
                    San Francisco, California
                </p>
            </div>

            <div className="space-y-5 mt-5 md:mt-0">
                <Input label="Name" name="Name" type="text" value="" />
                <Input label="Email" name="Email" type="Email" value="" />
                <Input label="Message" name="Message" type="text" value="" variant="textbox" />

                <button className="uppercase font-fjalla-one px-3 md:px-6 py-3 text-white font-bold bg-btn">SUBMIT</button>
            </div>
        </section>
    )
}

export default ContactUs