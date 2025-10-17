import { CardSpotlightDemo } from '../../components/CardSpotlightDemo'

const AboutMe = () => {
    return (
        <div class="lg:relative lg:sticky 2xl:top-[40vh] 2xl:h-[60vh] md:h-full bg-black">
            <div class=" items-center justify-center gap-10 p-10 ">
                <h1 class="text-white text-7xl lg:px-10">About Me</h1><br />
                <div class="flex flex-col items-center justify-center gap-10 mt-9 lg:p-10 p-0 ">
                    <h4 class="text-white text-3xl mb-4">Feel free to reach out for collaborations or opportunities</h4>
                    <CardSpotlightDemo />
                </div>
            </div>
        </div>
    );
}
export default AboutMe;