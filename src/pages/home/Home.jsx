import { FloatingDockDemo } from '../../components/FloatingDockDemo'
import { CardSpotlightDemo } from '../../components/CardSpotlightDemo'
import { GlowingEffectDemo } from '../../components/GlowingEffectDemo'
import '../../index.css'

function Home() {
    return (
        <div class="bg-neutral-900">
            <div class="flex flex-col items-center justify-center gap-10 p-10 ">
                <h1 class="text-white text-9xl">Parag Niraula</h1>
                <h4 class="text-white text-5xl">DevOps Engineer (AWS / Kubernetes / Terraform) | Open to Remote</h4>
            </div>
            <span class="h-px w-full text-white text-6xl p-5 pl-9">Experience</span>
            <div class="flex flex-col items-center justify-center gap-10 p-10 ">
                {/* <CardSpotlightDemo /> */}
                <GlowingEffectDemo />
                <div>
                    {/* <FloatingDockDemo /> */}
                </div>
                {/* <div className="relative min-h-[200vh] bg-gray-950 text-white">

                    <div className="p-20">
                        <h1 className="text-6xl font-bold">Scroll down to draw the line</h1>
                    </div>
                </div> */}
            </div>

        </div>
    )
}

export default Home