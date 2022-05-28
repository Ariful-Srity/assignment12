import React from 'react';

import ontor from '../../images/ontor.jpg'

const Portfolio = () => {
    return (
        <div className='grid justify-items-center my-10 ' >

            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={ontor} class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">Hello, I am <span className='text-warning'>Ariful Hasan Ontor</span></h1>
                        <p class="py-6">I am A student of Hajee Mohammad Denesh Science and Technology University,Dinajpur.</p>

                    </div>
                </div>
            </div>

            <div class="card bg-base-100 shadow-xl px-4 py-4 lg: sm:grid-cols-1 grid gap-2">

                <div class=" items-center text-center">

                    <div class="card  bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h1 className='text-center text-5xl text'>Name:<span className='text-bold text-warning'>Ariful Hasan 0ntor</span> </h1>
                            <h1 className='text-center text-3xl'>Email Adress: arifulontor84@gmail.com</h1>

                        </div>
                    </div>
                </div>

                <div class=" bg-base-100 shadow-xl">
                    <div class="">
                        <h1 className='text-5xl text-warning'>Educational background:</h1>
                        <p className='text-xl text-info'>I Finished My Secondary education from Thanaghat BL High School.</p>
                        <p className='text-xl text-info'>I finished My Higher Secondary education from Bhurungamari Govt College</p>
                        <p className='text-xl text-info'>Now i am studying in Hajee Mohammad Danesh Science and Technology University,Dinajpur</p>
                        <p className='text-2xl text-bold text-success'>Faculty of   Computer Science Engineering</p>
                        <p className='text-2xl text-bold text-success'>Department of Electronics and Communication Engineering</p>
                        <p className='text-5xl text-bold text-success'>Level:3 , Semester:2</p>
                    </div>
                </div>

                <div class=" w-96 bg-base-100 shadow-xl">
                    <div class="">
                        <h1 className='text-center text-warning text-4xl'>Skills:</h1>

                        <ul>
                            1. HTML
                        </ul>
                        <ul>
                            2. CSS
                        </ul>
                        <ul>
                            3.  Bootstrap
                        </ul>
                        <ul>
                            4. Tailwind CSS
                        </ul>
                        <ul>
                            5. Javascrtipt
                        </ul>
                        <ul>
                            6.  React JS
                        </ul>
                        <ul>
                            7.  Node JS
                        </ul>
                        <ul>
                            8. Express JS
                        </ul>
                        <ul>
                            9. Mongo DB
                        </ul>
                        <ul>
                            10. Firebase Authentication
                        </ul>
                        <ul>
                            11. C programming
                        </ul>
                        <ul>
                            12.  JAVA
                        </ul>
                        <ul>
                            13. PHP
                        </ul>
                    </div>
                </div>


                <div class=" bg-base-100 shadow-xl">
                    <div class=" ">
                        <h1 className='text-center text-warning text-5xl'>Live Links:</h1>
                        <p className='text-success'>Link 1: https://bespoke-bienenstitch-d3788a.netlify.app </p>
                        <p className='text-success'>Link 2:https://regal-bublanina-e71d5d.netlify.app </p>
                        <p className='text-success'>Link 3:https://hardcore-einstein-33a1b2.netlify.app </p>

                    </div>
                </div>


            </div>
        </div>

    );
};

export default Portfolio;