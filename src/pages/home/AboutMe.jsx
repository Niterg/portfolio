import { CardSpotlightDemo } from '../../components/CardSpotlightDemo'
import { useRef } from 'react';
import SvgScrollReveal from '../../components/SvgScrollReveal';
import SimpleCurve from '../../assets/svg/simple-line.svg?raw';

const AboutMe = () => {
    const Curve = useRef(null);

    return (
        <div className="relative bg-black min-h-screen w-full overflow-hidden">
            {/* Container for both background and content */}
            <div className="relative w-full min-h-screen">
                {/* SVG Background - Sticky */}
                <section ref={Curve} className="sticky top-0 h-screen flex items-center justify-center z-0">
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
                <div className="absolute top-0 left-0 w-full  flex z-10 pointer-events-none">
                    <div className="pointer-events-auto p-10 w-full  mx-auto">
                        <h1 className="text-white text-7xl mb-6 lg:mb-8 ">About Me</h1>
                        <h4 className="text-white text-xl sm:text-2xl lg:text-3xl mb-6 lg:mb-8 text-center ">
                            Feel free to reach out for collaborations or opportunities
                        </h4>
                        <div className="flex flex-col w-full">

                            <CardSpotlightDemo />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;