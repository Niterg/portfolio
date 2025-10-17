import React from 'react';
import { CursiveLine } from './Scrollable';

export const SVGBackground = () => {
    return (
        <div>
            <CursiveLine
                color="#EC4899"
                thickness={3}
                speed={1.2}
                opacity={0.7}
            />

            <div style={{ height: '200vh', padding: '50px' }}>
                <h1>Simple Cursive Line</h1>
                <p>Scroll down to see the cursive line draw itself</p>
            </div>
        </div>
    );
};