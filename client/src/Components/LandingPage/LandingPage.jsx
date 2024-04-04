import React from 'react';
import bgImage from '../../assets/homepage.webp';
import { Link } from 'react-router-dom';


const LandingPage = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1340,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        // add a background image to the landing page
        <div className="bg-cover bg-center bg-no-repeat h-screen" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="flex flex-col items-center py-24 h-full bg-black bg-opacity-50">
                <h1 className="text-white text-6xl font-bold">Capture The Flag</h1>
                <p className="text-white text-2xl my-5">Ready . Set . PWN!</p>

                <Link to="/signup" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">Join Now</Link>


            </div>


            {/* category slider */}


        </div>
    );
};

export default LandingPage;