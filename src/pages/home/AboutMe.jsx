import { CardSpotlightDemo } from '../../components/CardSpotlightDemo'
import { useRef } from 'react';
import SvgScrollReveal from '../../components/SvgScrollReveal';
import SimpleCurve from '../../assets/svg/simple-line.svg?raw';

const AboutMe = () => {
    const Curve = useRef(null);

    return (
        <div className="relative bg-black h-full min-h-screen">
            {/* Container for both background and content */}
            <div className="relative w-full h-full">
                {/* SVG Background - Sticky */}
                <section ref={Curve} className="lg:sticky lg:top-0 absolute inset-0 lg:h-screen h-full flex items-center justify-center z-0 overflow-hidden">
                    <div className="flex items-center justify-center w-full">
                        <SvgScrollReveal
                            svgPath={SimpleCurve}
                            strokeWidth={50}
                            gradientId="myGradient"
                            gradientColors={['red', 'orange']}
                            startOffset="50"
                            endOffset="100"
                            sectionRef={Curve}
                            className="mx-auto transform scale-125 2xl:translate-y-30 xl:translate-y-30 lg:translate-y-20 translate-y-10"
                        />
                    </div>
                </section>

                {/* Content Overlay */}
                <div className="relative lg:absolute lg:top-0 lg:left-0 w-full lg:h-screen flex z-10 pointer-events-none">
                    <div className="pointer-events-auto p-6 sm:p-10 w-full mx-auto">
                        <h1 className="text-white text-7xl  mb-4 sm:mb-6 lg:mb-8">About Me</h1>
                        <h4 className="text-white text-lg sm:text-xl lg:text-2xl xl:text-3xl mb-4 sm:mb-6 lg:mb-8 text-center">
                            Feel free to reach out for collaborations or opportunities
                        </h4>
                        <div className="flex flex-col w-full pb-6 sm:pb-10">
                            <CardSpotlightDemo />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;