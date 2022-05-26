import React from 'react';
import useReviews from '../../Hooks/useReviews';
import person1 from '../../images/person1.jpg';
import person2 from '../../images/person2.jpg';
import person3 from '../../images/person3.jpg';
import Review from './Review';


const Reviews = () => {
    const [reviews] = useReviews()
    return (
        <div className='my-5'>
            <h1 className='text-warning text-center text-bold text-5xl my-8'>Customers Reviews</h1>

            <div className=" grid lg:grid-cols-3 sm:grid-cols-1 gap-3">
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-5'>





                <div className="card w-96 bg-base-100 shadow-xl justify-center hover:bg-sky-300 ">
                    <div className="card-body justify-center">
                        <h2 className="card-title">Jon Qary</h2>
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={person1} />
                            </div>
                        </div>
                        <div className="rating"> <span className='text-xl text-bold'> Ratings:</span>
                            <input type="radio" name="rating-4" className="mask mask-star-2  bg-orange-400" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400   " checked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400   " checked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400   " checked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400  " />
                        </div>

                        <h1>I can't forget their service.They are so helpful.</h1>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl justify-center hover:bg-sky-300 ">
                    <div className="card-body justify-center">
                        <h2 className="card-title">Alex Heals</h2>
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={person2} />
                            </div>
                        </div>
                        <div className="rating"><span className='text-xl text-bold'>Ratings:</span>
                            <input type="radio" name="rating-4" className="mask mask-star-2  bg-orange-400" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400   " checked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400   " checked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400   " checked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400  " />
                        </div>
                        <h1 className='text-bold text-xl'>Their services are very good.And I am setisfied with it. </h1>

                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl justify-center hover:bg-sky-300">
                    <div className="card-body justify-center">
                        <h2 className="card-title">Angelina Joli</h2>

                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={person3} />
                            </div>
                        </div>

                        <div className="rating"><span className='text-xl text-bold'>Ratings:</span>
                            <input type="radio" name="rating-4" className="mask mask-star-2  bg-orange-400" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400   " checked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400   " checked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400   " checked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400  " />
                        </div>

                        <h1 className='text-xl text-dark text-bold'>This is a very good site to visite</h1>
                    </div>
                </div>

            </div>



        </div>
    );
};

export default Reviews;