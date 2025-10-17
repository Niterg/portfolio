import React, { useEffect, useRef, useState } from 'react';

const SVGScrollAnimator = ({ svgPath, strokeColor = "#3b82f6", className = "" }) => {
    const containerRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [svgContent, setSvgContent] = useState(null);
    const [pathLengths, setPathLengths] = useState([]);

    useEffect(() => {
        const loadSVG = async () => {
            try {
                const response = await fetch(svgPath);
                const svgText = await response.text();
                setSvgContent(svgText);
            } catch (error) {
                console.error('Error loading SVG:', error);
            }
        };

        loadSVG();
    }, [svgPath]);

    useEffect(() => {
        if (!svgContent) return;

        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = svgContent;
        const tempSvg = tempDiv.querySelector('svg');

        if (tempSvg) {
            document.body.appendChild(tempSvg);
            tempSvg.style.position = 'absolute';
            tempSvg.style.visibility = 'hidden';

            const paths = tempSvg.querySelectorAll('path');
            const lengths = Array.from(paths).map(path => path.getTotalLength());

            document.body.removeChild(tempSvg);
            setPathLengths(lengths);
        }
    }, [svgContent]);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const start = -rect.height;
            const end = windowHeight;
            const current = rect.top;

            const progress = Math.max(0, Math.min(1, 1 - (current - start) / (end - start)));

            // Speed up animation: multiply by 2 so 50% scroll = 100% drawn
            const adjustedProgress = Math.min(1, progress * 2.6);

            setScrollProgress(adjustedProgress);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    if (!svgContent || pathLengths.length === 0) {
        return <div className={className}>Loading...</div>;
    }

    // const parser = new DOMParser();
    // const svgDoc = parser.parseFromString(svgContent, 'image/svg+xml');
    // const svgElement = svgDoc.querySelector('svg');
    // const viewBox = svgElement?.getAttribute('viewBox') || '0 0 400 800';
    // const paths = svgDoc.querySelectorAll('path');

    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(svgContent, 'image/svg+xml');
    const svgElement = svgDoc.querySelector('svg');
    const originalViewBox = svgElement?.getAttribute('viewBox') || '0 0 400 800';

    // Expand viewBox to prevent shadow clipping
    const [x, y, width, height] = originalViewBox.split(' ').map(Number);
    const padding = 50;
    const viewBox = `${x - padding} ${y - padding} ${width + padding * 2} ${height + padding * 2}`;

    const paths = svgDoc.querySelectorAll('path');

    return (
        <div ref={containerRef} className={className}>
            <svg
                viewBox={viewBox}
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <filter id="shadow3d">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
                        <feOffset dx="3" dy="3" result="offsetblur" />
                        <feComponentTransfer>
                            <feFuncA type="linear" slope="0.4" />
                        </feComponentTransfer>
                        <feMerge>
                            <feMergeNode />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>

                    <linearGradient id="tubeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(0,0,0,0.4)" />
                        {/* <stop offset="30%" stopColor="rgba(255,255,255,0.9)" />
                        <stop offset="70%" stopColor={strokeColor} /> */}
                        <stop offset="100%" stopColor="rgba(0,0,0,0.6)" />
                    </linearGradient>
                </defs>

                {Array.from(paths).map((path, index) => {
                    const d = path.getAttribute('d');
                    const length = pathLengths[index] || 0;
                    const drawn = length * scrollProgress;
                    const remaining = length - drawn;

                    return (
                        <g key={index}>
                            <path
                                d={d}
                                fill="none"
                                stroke="url(#tubeGradient)"
                                strokeWidth="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeDasharray={`${drawn} ${remaining}`}
                                filter="url(#shadow3d)"
                            />

                            <path
                                d={d}
                                fill="none"
                                stroke="rgba(255,255,255)"
                                strokeWidth="6"
                                strokeLinecap="round"
                                strokeDasharray={`${drawn} ${remaining}`}
                                style={{ transform: 'translateX(-3px)' }}
                            />

                            <path
                                d={d}
                                fill="none"
                                stroke="none"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeDasharray={`${drawn} ${remaining}`}
                                style={{ transform: 'translateX(4px)' }}
                            />
                        </g>
                    );
                })}
            </svg>

            {/* <div style={{
                position: 'fixed',
                top: '10px',
                right: '10px',
                background: 'rgba(0,0,0)',
                color: 'white',
                padding: '10px',
                borderRadius: '5px',
                fontSize: '12px',
                zIndex: 1000
            }}>
                Progress: {Math.round(scrollProgress * 100)}%
            </div> */}
        </div>
    );
};

export default SVGScrollAnimator;