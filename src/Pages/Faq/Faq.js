import React from 'react';

const Faq = () => {
    return (
        <div className='my-10'>
            <h1 className='text-5xl text-bold text-center text-warning my-8'>Frequently ask questions:</h1>


            <div tabindex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Whats new to my website?
                </div>
                <div className="collapse-content">
                    <p className='text-2xl text-success'>100% satisfaction of customers.</p>
                </div>
            </div>
            <div tabindex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How much time needed for delivery?
                </div>
                <div className="collapse-content">
                    <p className='text-2xl text-success'>Approximately 4 days.</p>
                </div>
            </div>
            <div tabindex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How is my products quality?
                </div>
                <div className="collapse-content">
                    <p className='text-2xl text-success'>My products quality is very good.</p>
                </div>
            </div>
            <div tabindex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Where is our office located?
                </div>
                <div className="collapse-content">
                    <p className='text-2xl text-success'>Our Office is at Dinajpur  .</p>
                </div>
            </div>
            <div tabindex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    WHATS OUR MAIN TARGET?
                </div>
                <div className="collapse-content">
                    <p className='text-2xl text-success'>Our main tergat is to serve people qualityfull products.</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;