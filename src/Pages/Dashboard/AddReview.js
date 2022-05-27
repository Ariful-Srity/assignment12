import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);

    const handleAddItem = event => {
        event.preventDefault();
        const Name = event.target.name.value;

        const Ratings = event.target.ratings.value;
        const Descript = event.target.description.value;
        const img = event.target.img.value;

        const newItem = { Name, img, Ratings, Descript };


        fetch('http://localhost:5000/reviews', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert("Add Review!");
                event.target.reset();
            })

    }

    return (
        <div className='flex justify-center items-center gap-3'>
            <h2 className="text-5xl text-warning text-center">Add a Review</h2>
            <div className="card w-96 bg-info text-primary-content">

                <form onSubmit={handleAddItem} class="card-body">
                    <h2 className="card-title">Add A Review Here</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Enter your name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" name='img' placeholder="Enter Your Image URL" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Ratings</span>
                        </label>
                        <input name='ratings' type="text" placeholder="Enter Your Ratings" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Descript</span>
                        </label>
                        <input type="text" name='description' placeholder="Description" className="input input-bordered" />

                    </div>
                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-warning">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddReview;