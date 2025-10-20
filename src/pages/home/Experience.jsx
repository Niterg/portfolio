import { GlowingEffectDemo } from '../../components/GlowingEffectDemo'
import SVGAnimator from '../../components/SvgReveal'
import { useRef } from 'react';
import SvgScrollReveal from '../../components/SvgScrollReveal';
import GaneshaSvg from '../../assets/svg/Ganesha.svg?raw';
import Stupa from '../../assets/svg/stupa.svg?raw';

const Experience = () => {
    const section2Ref = useRef(null);
    return (
        <div class="relative contain fluid sticky p-9 bg-black 2xl:h-[200vh] xl:h-[200vh]">
            <div className="2xl:flex lg:flex">
                <span class="2xl:h-px w-full text-white 2xl:text-9xl lg:text-8xl md:text-8xl text-6xl 2xl:p-5 md:p-5 2xl:pl-9 lg:pl-9 ">Experiences</span>
                <div className=" top-[-20vh] flex items-center justify-center">
                    <div className="2xl:w-100 2xl:h-50 w-100 h-35  flex ">
                        {/* <SVGAnimator
                            svgPath="/svg/stupa.svg"
                            strokeColor="#2563eb"
                            className="w-full h-full max-w-4xl text-orange-400"
                        /> */}
                        <section ref={section2Ref} className="h-screen relative w-100  ">
                            <SvgScrollReveal
                                svgPath={Stupa}
                                strokeWidth={3}
                                gradientId="myGradient"
                                gradientColors={['orange', '#ec4899', 'aqua', 'white']}
                                startOffset="50"   // Section top at 20vh
                                endOffset="80"     // Section bottom at 80vh
                                sectionRef={section2Ref}  // Pass the section ref
                            />
                        </section>
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-center justify-center gap-10 2xl:px-10 md:p-10 p-0">
                <div class="flex flex-col items-center justify-center gap-10 mt-9 2xl:px-10 md:p-0 ">
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
export default Experience;