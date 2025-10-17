import { FloatingDockDemo } from '../../components/FloatingDockDemo'
import { CardSpotlightDemo } from '../../components/CardSpotlightDemo'
import { GlowingEffectDemo } from '../../components/GlowingEffectDemo'
// import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import '../../index.css'
import { TextHoverEffectDemo } from '../../components/TextHoverEffect'
import SVGScrollAnimator from '../../components/ScrollSvgReveal'
import SVGAnimator from '../../components/SvgReveal'
// import SVGFillLoader from '../../components/SVGFill'

export default function Home() {
    return (
        <main className="">
            <div className="sticky relative top-0 lg:h-[100vh] w-6/6 ">
                {/* <TextHoverEffectDemo /> */}
                <Introduction />

            </div>
            <div className="sticky top-[25vh] lg:h-[120vh]">
                {/* Using with external SVG file */}
                <SVGScrollAnimator
                    svgPath="/svg/Ganesha.svg"
                    strokeColor="#3b82f6"
                    className="h-[800px] text-orange-400 mx-auto"
                />

                {/* Or using with inline SVG component */}

            </div>

            <div className="lg:sticky top-0 relative lg:h-[100vh] ">
                <Experience />
            </div>
            <div className="lg:sticky top-0 relative lg:h-[100vh] ">
                <Section4 />
            </div>

            <div className="lg:sticky top-0 relative lg:h-[200vh]">
                {/* <SVGScrollAnimator /> */}
            </div>

            <div className="sticky relative h-[100vh] ">
                <div className="lg:flex">
                    <div className="lg:w-4/6 w-6/6">
                        <Section2 />
                    </div>
                    <div className="bg-black lg:w-2/6 w-6/6 text-white">
                        <Section3 />
                    </div>
                </div>
                <Experience />
            </div>
        </main>
    )
}

const Introduction = () => {
    return (
        <div class="relative sticky h-screen bg-orange-400">
            <div class="flex flex-col  items-center justify-center gap-10 p-10">
                <div class="flex flex-col items-center justify-center gap-3 lg:mt-9  ">
                    <h1 class="text-white lg:text-9xl text-7xl">Parag Niraula</h1>
                    <h4 class="text-black text-center lg:text-4xl sm:mt-2 text-3xl">DevOps Engineer</h4>
                    <h4 class="text-white lg:text-4xl text-2xl items-center justify-center text-center">  AWS / Kubernetes / Terraform </h4>
                    <h4 class="text-white lg:text-4xl text-2xl">  Open to Remote</h4>
                </div>

            </div>
        </div>
    );
};

const Experience = () => {
    return (
        <div class="relative sticky p-9 bg-black lg:h-[200vh]">
            <div className="lg:flex">
                <span class="lg:h-px w-full text-white lg:text-9xl text-6xl lg:p-5 lg:pl-9 ">Experience</span>
                <div className=" top-[-20vh] flex">
                    <div className="w-100 h-50 flex  text-orange-400">
                        <SVGAnimator
                            svgPath="/svg/stupa.svg"
                            strokeColor="#2563eb"
                            className="w-full h-full max-w-4xl text-orange-400"
                        />
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-center justify-center gap-10 lg:p-10 md:p-0 ">
                <div class="flex flex-col items-center justify-center gap-10 mt-9 lg:p-10 md:p-0 ">
                    {/* <CardSpotlightDemo /> */}
                    {/* <Scroll /> */}
                    <GlowingEffectDemo />



                    {/* <FloatingDockDemo /> */}
                </div>

                {/* <div className="relative min-h-[200vh] bg-gray-950 text-white">

                    <div className="p-20">
                        <h1 className="text-6xl font-bold">Scroll down to draw the line</h1>
                    </div>
                </div> */}
            </div>
        </div>
    );
}
const Section4 = () => {
    return (
        <div class="relative lg:top-[20vh] h-[100vh] bg-white">
            <div class=" items-center justify-center gap-10 p-10 ">
                <div className="lg:flex">
                    <h1 class="lg:h-px w-full text-black lg:text-9xl text-6xl lg:p-5 lg:pl-9 ">Technical Skills</h1>
                    {/* <div className=" top-[-20vh] flex">
                        <div className="w-100 h-50 flex  text-orange-400">
                            <SVGAnimator
                                svgPath="/svg/gajur.svg"
                                strokeColor="#2563eb"
                                className="w-full h-full max-w-4xl text-orange-400"
                            />
                        </div>
                    </div> */}
                    <div className={`flex items-center justify-center`}>
                        <img
                            src="svg/gajur-fill.svg"
                            alt="SVG"
                            className="w-50 h-50 object-contain transition-transform duration-300 hover:scale-110 hover:rotate-3"
                        />
                    </div>
                </div>
            </div>
            <br />
            <div class="flex flex-col items-center justify-center gap-10 lg:mt-9 p-10 md:p-0">
                <h4 class="text-black text-3xl mb-4">Feel free to reach out for collaborations or opportunities</h4>
                {/* <CardSpotlightDemo /> */}
            </div>
        </div>

    );
}
const Section2 = () => {
    return (
        <div class="lg:relative lg:sticky top-[40vh] h-[60vh] bg-black">
            <div class=" items-center justify-center gap-10 p-10 ">
                <h1 class="text-white text-7xl">About Me</h1><br />
                <div class="flex flex-col items-center justify-center gap-10 mt-9 p-10 ">
                    <h4 class="text-white text-3xl mb-4">Feel free to reach out for collaborations or opportunities</h4>
                    {/* <CardSpotlightDemo /> */}
                </div>

            </div>
        </div>
    );
}

const Section3 = () => {
    return (
        <div class="relative sticky lg:top-[-20vh] h-[100vh] bg-orange-400 text-black">
            <a
                href="#"
                className="group  text-white text-lgtransition-all duration-300"
            >
                <div class="items-center justify-center gap-10 p-10 ">
                    <div className="inline-flex items-center">

                        <h1 class="text-black text-7xl">Contact Me</h1>
                        {/* <ArrowRight /> */}

                    </div>

                    <h4 class="text-black items-center justify-center text-3xl mt-9">Feel free to reach out for collaborations or opportunities</h4>

                    {/* <SVGBackground /> */}

                    {/* <WaveBackground /> */}
                </div>
            </a >
        </div >
    );
}

