import { FloatingDockDemo } from '../../components/FloatingDockDemo'
import { CardSpotlightDemo } from '../../components/CardSpotlightDemo'
import { GlowingEffectDemo } from '../../components/GlowingEffectDemo'

function Home() {
    return (

        <div class="flex flex-col items-center justify-center gap-10 p-10">
            <h1>Parag Niraula</h1>
            <h4>DevOps Engineer</h4>
            <CardSpotlightDemo />
            <GlowingEffectDemo />
            <div>
                <FloatingDockDemo />
            </div>
        </div>
    )
}

export default Home