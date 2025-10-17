import { FloatingDockDemo } from '../../components/FloatingDockDemo'

// import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import '../../index.css'
import SVGScrollAnimator from '../../components/ScrollSvgReveal'
import Introduction from "./Introduction";
import Experience from "./Experience";
import TechnicalSkills from "./TechnicalSkills";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
// import SVGFillLoader from '../../components/SVGFill'

export default function Home() {
    return (
        <main className="">
            <div className="sticky relative top-0 lg:h-[100vh] w-6/6 ">
                {/* <TextHoverEffectDemo /> */}
                <Introduction />

            </div>
            <div className="sticky 2xl:top-[28vh] xl:top-[45vh] top-[45vh] lg:h-[120vh]">
                {/* Using with external SVG file */}
                <SVGScrollAnimator
                    svgPath="/svg/Ganesha.svg"
                    strokeColor="#3b82f6"
                    className="2xl:h-[50vh] xl:h-[45vh] h-[40vh] text-orange-400 mx-auto"
                />

                {/* Or using with inline SVG component */}
            </div>
            <div className="lg:sticky top-0 relative h-[200vh]">
                {/* <SVGScrollAnimator /> */}
            </div>
            <div className="lg:sticky lg:top-[-30vh] 2xl:top-0 relative lg:h-[100vh] h-full ">
                <Experience />
            </div>
            <div className="lg:sticky top-[20vh] relative lg:h-[200vh]">
                {/* <SVGScrollAnimator /> */}
            </div>

            <div className="lg:sticky 2xl:top-[0vh] lg:top-0 relative lg:h-[100vh] 2xl:h-[150vh] md:h-full h-full">
                <TechnicalSkills />
            </div>

            <div className="lg:sticky top-0 relative lg:h-[200vh]">
                {/* <SVGScrollAnimator /> */}
            </div>

            <div className="sticky relative top-0 lg:h-[100vh] h-full ">
                <div className="lg:flex">
                    <div className="lg:w-4/6 w-6/6">
                        <AboutMe />
                    </div>
                    <div className="bg-black lg:w-2/6 w-6/6 text-white">
                        <ContactMe />
                    </div>
                </div>
                {/* <Experience /> */}
            </div>

            <div className="lg:sticky top-0 relative lg:h-[200vh]">
                {/* <SVGScrollAnimator /> */}
            </div>
            {/* <div class="relative bg-black top-[-20vh] h-[10vh] sticky flex flex-col items-center justify-center gap-2 p-4">
                <div className="text-white">2025 &copy; All rights Reserved </div>
                <div className="text-white">Parag Niraula </div>
            </div> */}
        </main>
    )
}

