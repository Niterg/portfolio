import { Telescope, Search, Sparkles, Terminal, Cloudy, School } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect";
import { CardSpotlight } from "../components/ui/card-spotlight";
import ArrowRight from "../assets/arrow-right.svg";

export function GlowingEffectDemo() {
    return (
        <ul
            className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">

            <GridItem
                area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5] "
                icon={<Cloudy className="h-6 w-6 text-black dark:text-neutral-100 " />}
                title="Side Quest"
                work="DevOps Intern"
                description="Kubernetes on Hetzner" />
            <GridItem
                area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
                icon={<School className="h-6 w-6 text-black dark:text-neutral-100 " />}
                title="DeerWalk Training Center"
                work="DevOps Traineeship on AWS"
                description="AWS" />
            <GridItem
                area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
                icon={<Telescope className="h-6 w-6 text-black dark:text-neutral-100 " />}
                title="Nepal Telecom"
                work="Full Stack Developer [Django]"
                description="Geographical Tower Selection & RBAC System" />
            <GridItem
                area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
                icon={<Sparkles className="h-6 w-6 text-black dark:text-neutral-100 " />}
                title="Relevant Projects"
                work="Kubernetes, AWS, React Portfolio"
                description="Projects" />
            <GridItem
                area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
                icon={<Search className="h-6 w-6 text-black dark:text-neutral-100 " />}
                title="Let's Work Together"
                work="Open to Opportunities"
                description="I'm probably writing code as you browse this " />
        </ul>
    );
}

const GridItem = ({
    area,
    icon,
    title,
    work,
    description,
    link,
}) => {
    return (
        <li className={`min-h-[14rem] list-none ${area}`}>
            <CardSpotlight className="relative rounded-2xl h-full border p-0 md:p-0 cursor-pointer transition-all transition-shadow duration-500 hover:dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
                <GlowingEffect
                    spread={50}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.1} />
                <a
                    href={`${link}`}
                    className="group  text-white text-lgtransition-all duration-300"
                >
                    <div
                        className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 ">
                        <div className="relative flex flex-1 flex-col justify-between gap-3">
                            <div className="group inline-flex items-center overflow-hidden">
                                <div className="relative w-fit rounded-3xl m-2 border border-gray-600 p-3 hover:shadow-[0_0_12px_rgba(59,130,246,0.6)] transition-shadow duration-500 float-right">
                                    <GlowingEffect
                                        spread={50}
                                        glow={true}
                                        disabled={false}
                                        proximity={64}
                                        inactiveZone={0.1} />
                                    {icon}
                                </div>
                                {/* Text appears on hover */}
                                <h3
                                    className="opacity-0 translate-x-[-1rem] ml-2 -tracking-4 font-sans text-2xl/[1.375rem] text-balance text-black md:text-3xl/[1.875rem] transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 dark:text-neutral-400"
                                >
                                    {description}
                                </h3>
                            </div>
                            <div className="space-y-3">
                                <h3
                                    className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] text-balance text-black md:text-5xl/[2.875rem] dark:text-white">
                                    {title}
                                </h3>


                                <div className="inline-flex items-center">
                                    <img
                                        src={ArrowRight}
                                        alt="arrow"
                                        className="w-6 h-6 opacity-0 -translate-x-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 filter brightness-0 invert"
                                    />
                                    <h3
                                        className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] text-balance text-black md:text-3xl/[1.875rem] ml-1 transition-all duration-300 group-hover:translate-x-2 -translate-x-6 dark:text-orange-400">
                                        {work}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </CardSpotlight>
        </li>
    );
};
