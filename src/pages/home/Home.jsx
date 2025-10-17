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
            <div className="sticky lg:top-[29vh] top-[20vh] lg:h-[120vh]">
                {/* Using with external SVG file */}
                <SVGScrollAnimator
                    svgPath="/svg/Ganesha.svg"
                    strokeColor="#3b82f6"
                    className="h-[750px] text-orange-400 mx-auto"
                />

                {/* Or using with inline SVG component */}
            </div>

            <div className="lg:sticky top-0 relative lg:h-[100vh] ">
                <Experience />
            </div>
            <div className="lg:sticky top-0 relative lg:h-[100vh] md:h-full h-full">
                <TechnicalSkills />
            </div>

            <div className="lg:sticky top-0 relative lg:h-[200vh]">
                {/* <SVGScrollAnimator /> */}
            </div>

            <div className="sticky relative lg:h-[100vh] h-full ">
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
            {/* <div class="relative bg-black top-[-20vh] h-[10vh] sticky flex flex-col items-center justify-center gap-2 p-4">
                <div className="text-white">2025 &copy; All rights Reserved </div>
                <div className="text-white">Parag Niraula </div>
            </div> */}
        </main>
    )
}

