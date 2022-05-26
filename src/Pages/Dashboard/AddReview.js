import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);

    const handleAddItem = event => {
        event.preventDefault();
        const Name = event.target.name.value;

        const Ratings = event.target.ratings.value;
        const Description = event.target.description.value;
        const img = event.target.img.value;

        const newItem = { Name, img, Ratings, Description };


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
        <div>
            <h2 className="text-2xl">Add a Review</h2>
            <div class="card w-96 bg-info text-primary-content">
                <form onSubmit={handleAddItem} class="card-body">
                    <h2 class="card-title">Card title!</h2>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Enter your name" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Image</span>
                        </label>
                        <input type="text" name='img' placeholder="Enter Your Image URL" class="input input-bordered" />

                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Ratings</span>
                        </label>
                        <input name='ratings' type="text" placeholder="Enter Your Ratings" class="input input-bordered" />

                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Descript</span>
                        </label>
                        <input type="text" name='description' placeholder="Description" class="input input-bordered" />

                    </div>
                    <div class="form-control mt-6">
                        <button type='submit' class="btn btn-warning">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddReview;