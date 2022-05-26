import React from 'react';

const Review = ({ review }) => {

    const { Name, img, Ratings, Descript } = review;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl justify-center hover:bg-sky-300 ">
                <div className="card-body justify-center">
                    <h2 className="card-title">{Name}</h2>
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} />
                        </div>
                    </div>

                    <h1 className='text-bold text-xl'>Customer Ratings:{Ratings} </h1>
                    <h1 className='text-bold text-xl'>{Descript} </h1>

                </div>
            </div>

        </div>

    );
};

export default Review;