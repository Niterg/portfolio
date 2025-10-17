import React, { useState, useRef, useEffect } from 'react';
import './CardExpandTransition.css';

const CardExpandTransition = ({
    children,
    cardContent,
    expandedContent,
    className = '',
    cardClassName = '',
    expandedClassName = '',
    transitionDuration = 400
}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const cardRef = useRef(null);
    const expandedRef = useRef(null);

    const handleCardClick = (e) => {
        const card = cardRef.current;
        if (!card) return;

        // Get click position relative to the card
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Get card dimensions
        const width = rect.width;
        const height = rect.height;

        setClickPosition({ x, y });
        setDimensions({ width, height });
        setIsExpanded(true);

        // Prevent body scroll when expanded
        document.body.style.overflow = 'hidden';
    };

    const handleClose = () => {
        setIsExpanded(false);
        document.body.style.overflow = 'unset';
    };

    // Handle escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isExpanded) {
                handleClose();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isExpanded]);

    // Handle outside click
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (isExpanded && expandedRef.current && !expandedRef.current.contains(e.target)) {
                handleClose();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, [isExpanded]);

    return (
        <div className={`card-expand-container ${className}`}>
            {/* Card */}
            <div
                ref={cardRef}
                className={`card-expand-card ${cardClassName} ${isExpanded ? 'card-expanding' : ''}`}
                onClick={handleCardClick}
                style={{
                    '--click-x': `${clickPosition.x}px`,
                    '--click-y': `${clickPosition.y}px`,
                    '--start-width': `${dimensions.width}px`,
                    '--start-height': `${dimensions.height}px`,
                    '--transition-duration': `${transitionDuration}ms`
                }}
            >
                {cardContent}
            </div>

            {/* Expanded Overlay */}
            {isExpanded && (
                <div className="card-expand-overlay" style={{ animationDuration: `${transitionDuration}ms` }}>
                    <div
                        ref={expandedRef}
                        className={`card-expand-content ${expandedClassName}`}
                        style={{ animationDuration: `${transitionDuration}ms` }}
                    >
                        <button
                            className="card-expand-close-btn"
                            onClick={handleClose}
                            aria-label="Close"
                        >
                            ×
                        </button>
                        {expandedContent}
                    </div>
                </div>
            )}
        </div>
    );
};

// Higher Order Component for direct card usage
const ExpandableCard = ({
    children,
    expandedContent,
    ...props
}) => {
    return (
        <CardExpandTransition
            cardContent={children}
            expandedContent={expandedContent}
            {...props}
        />
    );
};

export { CardExpandTransition, ExpandableCard };
export default CardExpandTransition;