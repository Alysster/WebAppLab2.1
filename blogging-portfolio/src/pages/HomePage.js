import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import './HomePage.css';

function HomePage() {
    return (
        <div className="home-page-container">
            <div className="home-card">
                <h1>Welcome to My Portfolio</h1>
                <p> I'm Claire, a passionate and dedicated Web Developer with a proven track record of delivering innovative solutions and creative designs for 7 years.

                    Feel free to explore my work, read my blog, or get in touch through the contact page. I'm always open to new opportunities, collaborations, and challenges.

                    Thank you for visiting - let's create something amazing together!</p>
            </div>
            <div className="slideshow-container">
                <Carousel
                    showArrows={true}
                    autoPlay
                    infiniteLoop
                    interval={3000}
                    showThumbs={false}
                    showStatus={false}
                    dynamicHeight={true}
                >
                    <div>
                        <img
                            src="./GettyImages.jpg"
                            alt="My colleague"
                        />
                        <p className="legend">My colleague.</p>
                    </div>
                    <div>
                        <img
                            src="./houlder-footage-of.jpg"
                            alt="Working on a project"
                        />
                        <p className="legend">Working on a brand new amazing project!</p>
                    </div>
                    <div>
                        <img
                            src="./stock.jpg"
                            alt="Planning meeting"
                        />
                        <p className="legend">Planning Team Meeting!</p>
                    </div>
                </Carousel>
            </div>
        </div>
    );
}

export default HomePage;
