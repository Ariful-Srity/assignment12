import React from 'react';

const Register = () => {
    return (
        <div className='flex justify-center items-center h-screen'>

            <div class="card w-96 bg-base-100 shadow-xl ">
                <div class="card-body">
                    <h2 class="text-5xl text-center text-bold">Register</h2>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text text-xl text-bold">Name:</span>

                        </label>
                        <input type="text" placeholder="Enter Your Name" class="input input-bordered w-full max-w-xs" />
                        <label class="label">
                            <span class="label-text text-xl text-bold">Email:</span>

                        </label>
                        <input type="email" placeholder="Enter Your Email" class="input input-bordered w-full max-w-xs" />
                        <label class="label">
                            <span class="label-text text-xl text-bold">Password:</span>

                        </label>
                        <input type="text" placeholder="Enter Your Password" class="input input-bordered w-full max-w-xs" />

                    </div>

                </div>
            </div>


        </div>
    );
};

export default Register;