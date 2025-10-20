import ArrowRight from "../../assets/svg/arrow-right.svg";

const ContactMe = () => {
    return (
        <div class="relative sticky lg:top-[-20vh] h-full bg-orange-400 text-black">

            <div class="items-center justify-center gap-10 p-10 ">
                <div className="inline-flex items-center">

                    <h1 class="text-black text-7xl">Contact Me</h1>
                    {/* <ArrowRight /> */}

                </div>

                <h4 class="text-black items-center justify-center text-3xl mt-9">Feel free to reach out for collaborations or opportunities</h4>
                <div id="info" class="">
                    <div class=" text-3xl text-black py-4">
                        <p>
                            <a href="mailto: paragniraula@gmail.com">paragniraula@gmail.com</a>
                        </p>

                        <p>+977-9841433513, +977-9840089119</p>
                        <p>

                            AadarshaTole, Gothatar, Kathmandu, Nepal
                        </p>
                    </div>
                    <div className="text-4xl text-black">
                        <div className="inline-flex items-center linkedin_link py-4 group">
                            <h4>
                                <a href="https://www.linkedin.com/in/parag-niraula-5002991a3/" target="_blank" className="flex items-center gap-2 hover:underline">
                                    <i className="bi bi-linkedin"></i>
                                    LinkedIn
                                </a>
                            </h4>
                            <img
                                src={ArrowRight}
                                alt="arrow"
                                className="w-8 h-8 opacity-0 -translate-x-3 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2 group-hover:-rotate-45 filter brightness-0"
                            />
                        </div>
                        <br />
                        <div className="inline-flex items-center github_link py-4 group">
                            <h4>
                                <a href="https://github.com/Niterg" target="_blank" className="flex items-center gap-2 hover:underline">
                                    <i className="bi bi-github"></i>
                                    <span>Github</span>
                                </a>
                            </h4>
                            <img
                                src={ArrowRight}
                                alt="arrow"
                                className="w-8 h-8 opacity-0 -translate-x-3 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2 group-hover:-rotate-45 filter brightness-0"
                            />
                        </div>
                    </div>
                </div>
                {/* <SVGBackground /> */}

                {/* <WaveBackground /> */}
            </div>
            <div className={`absolute bottom-0 transform  -translate-x-1/2 left-1/2 items-center justify-center overflow-hidden`}>
                <img
                    src="svg/gajur-bell.svg"
                    alt="SVG"
                    className="w-full h-full flex transition-transform duration-300 hover:scale-120 hover:rotate-1"
                />
            </div>

        </div >
    );
}

export default ContactMe;