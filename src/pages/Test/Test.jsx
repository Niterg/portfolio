import { useRef } from 'react';
import SvgScrollReveal from '../../components/SvgScrollReveal';
import GaneshaSvg from '../../assets/svg/Ganesha.svg?raw';
import Stupa from '../../assets/svg/stupa.svg?raw';
import Experience from "../home/Experience";
import GajurBell from '../../assets/svg/gajur-bell.svg?raw';
import Mylogo from '../../assets/svg/mylogo.svg?raw';
import SimpleCurve from '../../assets/svg/simple-line.svg?raw';

export default function MyPage() {
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    return (
        <div>
            {/* Section 1 */}
            <div className="lg:sticky top-0 relative lg:h-[200vh]  z-0">
                {/* <SVGScrollAnimator /> */}
                {/* <MyPage /> */}
            </div>
            <section className="h-screen">
                <h1>First Section</h1>
                <Experience />
            </section>
            <section ref={section1Ref} className="h-screen relative w-250">
                <SvgScrollReveal
                    svgPath={Stupa}
                    strokeWidth={2}
                    gradientId="myGradient"
                    gradientColors={['#3238f1', 'red', '#5982ff']}
                    startOffset="50"   // Section top at 20vh
                    endOffset="0"     // Section bottom at 80vh
                    sectionRef={section1Ref}  // Pass the section ref
                />
                <h1>Mero Logo</h1>
            </section>
            {/* Section 2 - Pass the ref */}
            <section ref={section2Ref} className="h-screen relative w-100  ">
                <SvgScrollReveal
                    svgPath={GaneshaSvg}
                    strokeWidth={2}
                    gradientId="myGradient"
                    gradientColors={['#3b82f6', '#ec4899', '#8b5cf6']}
                    startOffset="50"   // Section top at 20vh
                    endOffset="80"     // Section bottom at 80vh
                    sectionRef={section2Ref}  // Pass the section ref
                />
            </section>


            {/* Section 2 - With SVG */}

            {/* Section 3 - No SVG */}
            <section className="h-screen">
                <h1>Third Section</h1>
            </section>
            {/* Section 2 - Different SVG */}
            {/* <section className="h-screen w-[50vh] relative">
                <SvgScrollReveal
                    svgPath={GajurBell}
                    className="stroke-pink-500"
                    strokeWidth={1}
                />
            </section> */}
            {/* <section className=" flex h-[100vh] w-[50vh] relative">
                <hr />
                <h1>Yo mero geet</h1>
                <SvgScrollReveal
                    svgPath={Mylogo}
                    className="stroke-pink-500"
                    strokeWidth={1}
                />
            </section> */}
        </div>
    );
}