import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const SvgScrollReveal = ({
  svgPath,
  className = "",
  strokeWidth = 2,
  startOffset = "20",
  endOffset = "80",
  gradientId = null,
  gradientColors = null,
  sectionRef
}) => {
  const svgRef = useRef(null);
  const [paths, setPaths] = useState([]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: [`start ${parseFloat(startOffset)}vh`, `end ${parseFloat(endOffset)}vh`]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Function to calculate proper viewBox with stroke padding
  const calculateViewBoxWithStroke = (svgElement, strokeWidth) => {
    const originalViewBox = svgElement.getAttribute('viewBox');

    if (!originalViewBox) {
      // If no viewBox, create a default one with padding
      return `-${strokeWidth * 2} -${strokeWidth * 2} ${100 + strokeWidth * 4} ${100 + strokeWidth * 4}`;
    }

    const [x, y, width, height] = originalViewBox.split(' ').map(Number);

    // Calculate padding based on stroke width
    // Use strokeWidth * 1.5 to ensure enough space for the stroke
    const padding = Math.max(strokeWidth * 1.5, 5);

    return [
      x - padding,
      y - padding,
      width + padding * 2,
      height + padding * 2
    ].join(' ');
  };

  useEffect(() => {
    if (!svgRef.current || !svgPath) return;

    svgRef.current.innerHTML = '';

    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(svgPath, 'image/svg+xml');
    const svgElement = svgDoc.querySelector('svg');

    if (!svgElement) return;

    // Remove any style tags that might interfere
    const styleTags = svgElement.querySelectorAll('style');
    styleTags.forEach(style => style.remove());

    // Calculate and set the new viewBox with proper stroke padding
    const newViewBox = calculateViewBoxWithStroke(svgElement, strokeWidth);
    svgRef.current.setAttribute('viewBox', newViewBox);
    svgRef.current.setAttribute('preserveAspectRatio', 'xMidYMid meet');

    // Copy all attributes except class and style
    Array.from(svgElement.attributes).forEach(attr => {
      if (attr.name !== 'class' && attr.name !== 'style' && attr.name !== 'viewBox') {
        svgRef.current.setAttribute(attr.name, attr.value);
      }
    });

    // Move all children to our SVG
    while (svgElement.firstChild) {
      svgRef.current.appendChild(svgElement.firstChild);
    }

    // Add gradient definition if provided
    if (gradientId && gradientColors && gradientColors.length >= 2) {
      const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
      const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
      gradient.setAttribute('id', gradientId);
      gradient.setAttribute('x1', '0%');
      gradient.setAttribute('y1', '0%');
      gradient.setAttribute('x2', '100%');
      gradient.setAttribute('y2', '100%');

      gradientColors.forEach((color, index) => {
        const stop = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop.setAttribute('offset', `${(index / (gradientColors.length - 1)) * 100}%`);
        stop.setAttribute('stop-color', color);
        gradient.appendChild(stop);
      });

      defs.appendChild(gradient);
      svgRef.current.insertBefore(defs, svgRef.current.firstChild);
    }

    const pathElements = svgRef.current.querySelectorAll('path, line, polyline, polygon, circle, ellipse, rect');
    const pathArray = Array.from(pathElements);

    pathArray.forEach(path => {
      // Remove any existing stroke/fill attributes from the path
      path.removeAttribute('class');
      path.removeAttribute('stroke');
      path.removeAttribute('stroke-width');
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke-linecap', 'round');
      path.setAttribute('stroke-linejoin', 'round');
      path.setAttribute('stroke-width', strokeWidth.toString());
      path.style.transition = 'none';
      path.style.paintOrder = 'stroke';

      // Use gradient if provided, otherwise use class
      if (gradientId) {
        path.setAttribute('stroke', `url(#${gradientId})`);
        path.style.mixBlendMode = 'normal';
      }

      const length = path.getTotalLength?.() || 0;
      if (length) {
        path.style.strokeDasharray = `${length}`;
        path.style.strokeDashoffset = `${length}`;
      }
    });

    setPaths(pathArray);
  }, [svgPath, strokeWidth, gradientId, gradientColors]);

  useEffect(() => {
    if (paths.length === 0) return;

    // Force initial state to 0
    paths.forEach(path => {
      const length = path.getTotalLength?.() || 0;
      if (length) {
        path.style.strokeDashoffset = `${length}`;
      }
    });

    const unsubscribe = pathLength.on('change', (latest) => {
      paths.forEach(path => {
        const length = path.getTotalLength?.() || 0;
        if (length) {
          path.style.strokeDashoffset = `${length * (1 - latest)}`;
        }
      });
    });

    return () => unsubscribe();
  }, [pathLength, paths]);

  return (
    <div className="absolute z-0 inset-0">
      <div className="w-full h-full ">
        <svg
          ref={svgRef}
          className={`max-w-full max-h-full ${className}`}
          style={{ willChange: 'transform' }}
          preserveAspectRatio="xMidYMid meet"
        />
      </div>
    </div>
  );
};

export default SvgScrollReveal;