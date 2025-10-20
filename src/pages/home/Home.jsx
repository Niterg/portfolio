import { FloatingDockDemo } from '../../components/FloatingDockDemo'

// import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import '../../index.css'
import { useRef } from 'react';
import SVGScrollAnimator from '../../components/ScrollSvgReveal'
import Introduction from "./Introduction";
import Experience from "./Experience";
import TechnicalSkills from "./TechnicalSkills";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import SvgScrollReveal from '../../components/SvgScrollReveal';
import SimpleCurve from '../../assets/svg/simple-line.svg?raw';
import GaneshaSvg from '../../assets/svg/Ganesha.svg?raw';

// import SVGFillLoader from '../../components/SVGFill'

export default function Home() {
    const Introsection = useRef(null);
    return (
        <main className="">
            <div className="sticky relative top-0 lg:h-[100vh] w-6/6 ">
                {/* <TextHoverEffectDemo /> */}
                <Introduction />

            </div>
            <div className="sticky 2xl:top-[43vh] xl:top-[50vh] top-[45vh] lg:h-[120vh]">
                {/* Using with external SVG file */}
                {/* <SVGScrollAnimator
                    svgPath="/svg/Ganesha.svg"
                    strokeColor="#3b82f6"
                    className="2xl:h-[50vh] xl:h-[45vh] h-[40vh] text-orange-400 mx-auto"
                /> */}
                <section ref={Introsection} className="h-screen relative flex w-full item-center justify-center ">
                    <div className="flex items-center justify-center w-full">
                        <SvgScrollReveal
                            svgPath={GaneshaSvg}
                            strokeWidth={5}
                            gradientId="myGradient"
                            gradientColors={['red', 'orange']}
                            startOffset="100"   // Section top at 20vh
                            endOffset="150"     // Section bottom at 80vh
                            sectionRef={Introsection}  // Pass the section ref
                            className="mx-auto 2xl:h-110 h-85 " />
                    </div>
                </section>

                {/* Or using with inline SVG component */}
            </div>
            <div className="lg:sticky top-0 relative h-[50vh]">
                {/* <SVGScrollAnimator /> */}
            </div>
            <div className="lg:sticky lg:top-[-30vh] 2xl:top-0 relative lg:h-[100vh] h-full z-10">
                <Experience />
            </div>
            <div className="lg:sticky top-[20vh] relative lg:h-[200vh] z-0">
                {/* <SVGScrollAnimator /> */}
            </div>
            <div className="lg:sticky 2xl:top-[0vh] lg:top-0 relative lg:h-[100vh] 2xl:h-[100vh] md:h-full h-full z-10">
                <TechnicalSkills />
            </div>

            <div className="lg:sticky top-0 relative lg:h-[200vh] z-0">

            </div>

            <div className="lg:sticky relative top-0 lg:h-[100vh] min-h-screen z-10">
                <div className="lg:flex h-full">
                    <div className="lg:w-4/6 w-full h-full">
                        <AboutMe />
                    </div>
                    <div className="bg-black lg:w-2/6 w-full text-white">
                        <ContactMe />
                    </div>
                </div>
                {/* <Experience /> */}
            </div>

            <div className="lg:sticky top-0 relative lg:h-[150vh] z-0">

            </div>
            {/* <div class="relative bg-black top-[-20vh] h-[10vh] sticky flex flex-col items-center justify-center gap-2 p-4">
                <div className="text-white">2025 &copy; All rights Reserved </div>
                <div className="text-white">Parag Niraula </div>
            </div> */}
        </main>
    )
}
