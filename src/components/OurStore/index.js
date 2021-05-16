import React from 'react';
import './styles.css';

function OurStore(props) {
    return (
        <div>
            <section className="our-story">
                <div className="container" style={{ marginBottom: 30 }}>
                    <div className="latest-product-title title-text">
                        <h2>OUR STORY</h2>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit es</p>
                    </div>
                </div>
                <div className="relative our-story1 container">
                    <video autoPlay controls src="images/video.mp4" width="100%"></video>
                </div>
            </section>
        </div>
    );
}

export default OurStore;