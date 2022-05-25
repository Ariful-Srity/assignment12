import React from 'react';
import Services from '../Services/Services/Services';
import banner from '../../images/newbanner.jpg';
import banner1 from '../../images/newbanner1.jpg';
import banner2 from '../../images/newbanner2.jpg';
import Heroarea from '../Heroarea/Heroarea';
import Business from '../Business/Business';
import Reviews from '../Reviews/Reviews';

import Faq from '../Faq/Faq';



const Home = () => {
    return (
        <div>


            <div class="carousel w-full ">
                <div id="slide1" class="carousel-item relative w-full">
                    <img src={banner} className="w-full h-50" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={banner} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>


            <Services></Services>
            <Heroarea></Heroarea>
            <Business></Business>
            <Reviews></Reviews>
            <Faq></Faq>


        </div>


    );
};

export default Home;