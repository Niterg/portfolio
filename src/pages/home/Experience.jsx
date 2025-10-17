import { GlowingEffectDemo } from '../../components/GlowingEffectDemo'
import SVGAnimator from '../../components/SvgReveal'

const Experience = () => {
    return (
        <div class="relative contain fluid sticky p-9 bg-black lg:h-[200vh]">
            <div className="lg:flex md:flex">
                <span class="lg:h-px w-full text-white lg:text-9xl md:text-8xl text-6xl lg:p-5 md:p-5 lg:pl-9 ">Experience</span>
                <div className=" top-[-20vh] flex items-center justify-center">
                    <div className="lg:w-100 lg:h-50  flex  text-orange-400">
                        <SVGAnimator
                            svgPath="/svg/stupa.svg"
                            strokeColor="#2563eb"
                            className="w-full h-full max-w-4xl text-orange-400"
                        />
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-center justify-center gap-10 lg:px-10 md:p-10 p-0">
                <div class="flex flex-col items-center justify-center gap-10 mt-9 lg:px-10 md:p-0 ">
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