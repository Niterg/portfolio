import React, { useRef, useEffect } from 'react';
import './ScrollablePath.css';

const CursiveLine = ({
    color = '#8B5CF6',
    thickness = 2,
    speed = 1,
    opacity = 0.6
}) => {
    const pathRef = useRef(null);

    useEffect(() => {
        const path = pathRef.current;
        if (!path) return;

        const pathLength = path.getTotalLength();

        path.style.strokeDasharray = `${pathLength}`;
        path.style.strokeDashoffset = `${pathLength}`;

        const handleScroll = () => {
            const scrollable = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = window.scrollY;
            const progress = scrolled / scrollable;

            const draw = pathLength * progress * speed;
            path.style.strokeDashoffset = pathLength - draw;
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [speed]);

    return (
        <div className="cursive-line-container">
            <svg
                className="cursive-line-svg"
                viewBox="0 0 1000 200"
                preserveAspectRatio="none"
            >
                <path
                    ref={pathRef}
                    className="cursive-path"
                    d="M 50,100 C 150,50 200,150 300,100 S 450,50 550,100 S 700,150 800,100 S 950,50 950,100"
                    style={{
                        stroke: color,
                        strokeWidth: thickness,
                        opacity: opacity
                    }}
                />
            </svg>
        </div>
    );
};

export default CursiveLine;