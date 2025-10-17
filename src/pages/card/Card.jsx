import React from 'react';
import CardExpandTransition from './CardExpandTransition';

const StyledCardExample = () => {
    return (
        <CardExpandTransition
            cardContent={
                <div className="styled-card">
                    <div className="card-image">
                        <img src="/thumbnail.jpg" alt="Thumbnail" />
                    </div>
                    <div className="card-body">
                        <h3>Beautiful Card</h3>
                        <p>Click anywhere to see the full content</p>
                    </div>
                </div>
            }
            expandedContent={
                <div className="full-page-content">
                    <div className="hero-image">
                        <img src="/full-size.jpg" alt="Full size" />
                    </div>
                    <div className="content-wrapper">
                        <h1>Full Page View</h1>
                        <p>This is the expanded view with detailed information</p>
                    </div>
                </div>
            }
            cardClassName="custom-card"
            expandedClassName="custom-expanded"
            transitionDuration={600}
        />
    );
};