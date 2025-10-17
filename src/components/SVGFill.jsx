import React, { useEffect, useRef, useState } from 'react';

const SVGFillLoader = ({
    svgPath,
    fillColor = "#00ff88",
    outlineColor = "rgba(255,255,255,0.3)",
    className = ""
}) => {
    const containerRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [svgContent, setSvgContent] = useState(null);

    // Load SVG
    useEffect(() => {
        fetch(svgPath)
            .then(response => {
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                return response.text();
            })
            .then(text => {
                setSvgContent(text);
            })
            .catch(error => {
                console.error('Error loading SVG:', error);
            });
    }, [svgPath]);

    // Scroll handler - fill completes at 70% scroll
    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calculate raw progress (0 to 1)
            const rawProgress = 1 - (rect.bottom / (windowHeight + rect.height));
            const clampedProgress = Math.max(0, Math.min(1, rawProgress));

            // Accelerate progress so fill completes at 70% scroll
            const acceleratedProgress = Math.min(1, clampedProgress / 0.7);

            setScrollProgress(acceleratedProgress);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    // Fallback SVG
    const fallbackSVG = `
        <svg width="400" height="400" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M50,10 A40,40 0 0,1 90,50 A40,40 0 0,1 50,90 A40,40 0 0,1 10,50 A40,40 0 0,1 50,10" 
                  stroke="white" stroke-width="1" fill="none"/>
        </svg>
    `;

    const displaySVG = svgContent || fallbackSVG;

    return (
        <div
            ref={containerRef}
            className={`relative w-full h-full ${className}`}
        >
            {/* Background Outline - Transparent background */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div
                    className="w-full h-full flex items-center justify-center p-8"
                    dangerouslySetInnerHTML={{ __html: displaySVG }}
                    style={{
                        opacity: 0.3,
                        filter: 'brightness(1.5)'
                    }}
                />
            </div>

            {/* Filled Version - Revealed by Scroll */}
            <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                    clipPath: `inset(${(1 - scrollProgress) * 100}% 0% 0% 0%)`,
                }}
            >
                <div
                    className="w-full h-full flex items-center justify-center p-8"
                    dangerouslySetInnerHTML={{ __html: displaySVG }}
                    style={{
                        filter: `drop-shadow(0 0 15px ${fillColor})`,
                    }}
                />
            </div>
        </div>
    );
};

export default SVGFillLoader;