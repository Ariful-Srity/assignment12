import React from 'react';

const Business = () => {
    return (
        <div className='my-8'>
            <h1 className='text-center text-5xl text-bold my-5 text-info'>Millions of People Trust us</h1>
            <h1 className='text-center text-xl'>Try to understand User Expectation</h1>
            <div class=" grid lg:grid-cols-5 shadow gap-3 py-5 py-5 sm:grid-cols-1 ">

                <div class="stat hover:bg-sky-100">
                    <div class="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div class="stat-title text-bold">We Served</div>
                    <div class="stat-value">100+</div>
                    <div class="stat-desc text-bold"> Customers Jan 1st - Feb 1st</div>
                </div>

                <div class="stat hover:bg-sky-100">
                    <div class="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                    </div>
                    <div class="stat-title">Annual Revinue</div>
                    <div class="stat-value">120M</div>
                    <div class="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div class="stat hover:bg-sky-100">
                    <div class="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                    </div>
                    <div class="stat-title">Reviews</div>
                    <div class="stat-value">33k+</div>
                    <div class="rating">
                        <input type="radio" name="rating-1" class="mask mask-star" />
                        <input type="radio" name="rating-1" class="mask mask-star" checked />
                        <input type="radio" name="rating-1" class="mask mask-star" />
                        <input type="radio" name="rating-1" class="mask mask-star" />
                        <input type="radio" name="rating-1" class="mask mask-star" />
                    </div>
                </div>
                <div class="stat hover:bg-sky-100">
                    <div class="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div class="stat-title">Tools</div>
                    <div class="stat-value text-primary">50+</div>
                    <div class="stat-desc">21% more than last month</div>
                </div>

                <div class="stat hover:bg-sky-100">
                    <div class="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                    </div>
                    <div class="stat-title">New Users</div>
                    <div class="stat-value">4,200</div>
                    <div class="stat-desc">↗︎ 400 (22%)</div>

                </div>

            </div>

            <div class="collapse">
                <input type="checkbox" />
                <div class="collapse-title text-xl font-medium btn">
                    You can Learn more by clicking  Here..
                </div>
                <div class="collapse-content">
                    <p className='text-xl'>Every homeowner needs a drilling tool at some point. For example, let’s say that you bought a new hanging shelf for the kitchen. To mount it on the wall, you will have to drill several holes. Also, if you want to attach two items to each other, you would need to drill holes and insert screws.

                        Always follow the MEP standards (mechanical, electrical and plumbing engineering). Make sure to hire an engineer who is fully qualified for any type of project in your home or commercial place.

                        Also, depending on the type of drill, you can use it to unscrew heavy tightened screws. However, it might be difficult to do with a cordless drill, since their batteries can’t provide enough power for that.This is A tools buying site so You can buy tools here.More than 100 of tools we can sell here having said that there are many kinds of tools here</p>
                    <p className='text-xl'>There are many tools here every day we buy more than 100types of tools here. </p>
                    <p className='text-xl'>So you can buy tools here if you want.And our happy clients get their feedback below</p>
                </div>
            </div>

        </div>
    );
};

export default Business;