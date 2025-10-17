import React, { useEffect, useRef, useState } from 'react';

const SVGAnimator = ({ svgPath, strokeColor = "orange", className = "" }) => {
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

            // Simple bottom-to-top animation
            // 0% when container bottom at viewport bottom
            // 100% when container top at viewport top
            const containerBottom = rect.bottom;
            const containerTop = rect.top;

            // Calculate progress
            let progress = (windowHeight - containerBottom) / (windowHeight + rect.height);
            progress = Math.max(0, Math.min(1, progress));

            setScrollProgress(progress);
        };

        // Use requestAnimationFrame for smoother performance
        let ticking = false;
        const updateProgress = () => {
            handleScroll();
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(updateProgress);
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll, { passive: true });
        onScroll(); // Initial calculation

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, []);

    if (!svgContent || pathLengths.length === 0) {
        return (
            <div className={`flex items-center justify-center ${className}`}>
                <div className="text-gray-500">Loading SVG...</div>
            </div>
        );
    }

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
        <div
            ref={containerRef}
            className={`flex items-center justify-center ${className}`}
        >
            <div className="relative w-full h-full flex items-center justify-center">
                <svg
                    viewBox={viewBox}
                    className="w-full h-full max-w-4xl mx-auto" // Centered with max width
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid meet"
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
                                    stroke="orange"
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

                {/* Optional: Progress indicator */}
                {/* <div style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: 'rgba(0,0,0,0.8)',
                    color: 'white',
                    padding: '8px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    zIndex: 10,
                    fontFamily: 'monospace'
                }}>
                    {Math.round(scrollProgress * 100)}% drawn
                </div> */}
            </div>
        </div>
    );
};

export default SVGAnimator;