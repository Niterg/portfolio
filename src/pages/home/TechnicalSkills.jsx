import SkillsSection from "../../components/SkillsSection";
import { skillsData } from '../../data/skillsData';

const TechnicalSkills = () => {
    return (
        <div class="relative 2xl:top-0 lg:top-[-20vh] lg:h-[200vh] h-full bg-white">
            <div class=" items-center justify-center gap-10 p-10 ">
                <div className="lg:flex">
                    <h1 class="lg:h-px w-full text-black 2xl:text-9xl 2xl:text-7xl lg:text-7xl md:text-7xl text-6xl lg:px-5 lg:pl-9 ">Technical Skills</h1>
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
                            className="2xl:w-100 2xl:h-50 lg:w-100 h-30 flex object-contain transition-transform duration-300 hover:scale-120 hover:rotate-1"
                        />
                    </div>

                </div>
            </div>

            <SkillsSection skills={skillsData} />
        </div>

    );
}
export default TechnicalSkills;