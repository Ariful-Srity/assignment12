import React from 'react';
import hero from '../../images/herosection.jpg';

const Heroarea = () => {
    return (
        <div className="hero min-h-screen bg-secondary my-10">
            <div className="hero-content flex-col lg:flex-row-reverse sm:flex-col-1">
                <img src={hero} className="max-w-sm rounded-lg shadow-2xl h-100" />
                <div>
                    <h1 className="text-4xl font-bold text-dark">Are YOu looking for Drill or Drill's Tools?</h1>
                    <p className="py-6 px-5 text-dark text-2xl">So,You are in the right place!!!!You can buy any kinds of tools here related with drills.But you have cheack wheather the equipment are available or not.You can buy it from here.Thanks in advance.Feel free to buy.</p>

                </div>
            </div>
        </div>
    );
};

export default Heroarea;