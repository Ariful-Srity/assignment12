import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useUsers from '../../Hooks/useUsers';
import Loading from '../Shared/Loading/Loading';

const MyProfile = () => {


    const [user] = useAuthState(auth);
    const [update, setUpdate] = useState(false);
    const [users, loading] = useUsers();
    const [loggedInUser, setLoggedInUser] = useState({});
    const [updateLoading, setUpdateLoading] = useState(false);


    useEffect(() => {
        setLoggedInUser(users.find(u => u.email === user.email));
    }, [users, user.email]);
    // console.log(loggedInUser);

    //  if (loading || updateLoading) {
    //    return <Loading />;
    //}

    const handleProfileUpdate = event => {
        event.preventDefault();
        setUpdateLoading(true);
        const location = event.target.district.value;
        const phone = event.target.phone.value;
        const linkedIn = event.target.linkedIn.value;
        const education = event.target.education.value;
        const userProfileInfo = { location, linkedIn, education, phone };

        const url = `http://localhost:5000/users/${loggedInUser._id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userProfileInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUpdate(false);
                setUpdateLoading(false);
                setLoggedInUser(userProfileInfo);
                toast.success('Profile Updated Successfully!');
            });
    }




    return (
        <div className=' mx-5 my-3'>

            <h2 className="text-3xl">My Profile</h2>
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-5">

                <div>
                    <img className='rounded' src={user.photoURL} alt="" />
                    <p className='text-xl my-2 mb-0'>Username: {user.displayName}</p>
                    <p className='mb-0'>Email: {user.email}</p>

                    <div className={loggedInUser?.education ? '' : ''}>
                        <p className='text-xl mb-0'>District: {loggedInUser?.location}</p>
                        <p className='mb-0'>Phone: {loggedInUser?.phone}</p>
                        <p className='mb-0'>Education: {loggedInUser?.education}</p>
                        <p className='mb-0'>LinkedIn Profile: <a
                            href={loggedInUser?.linkedIn}
                            className="text-decoration-none"
                            target="_blank"
                            rel="noreferrer"
                        >{loggedInUser?.linkedIn?.split('/')[4].toUpperCase()}</a></p>
                    </div>

                    <p className={update ? 'hidden' : 'm-0 fs-5 text-info'}>Update Profile? <button className='btn btn-primary' onClick={() => setUpdate(!update)}>Click Here</button></p>
                </div>

                <div className={update ? 'ms-5' : 'hidden'}>
                    <h3 className="text-xl text-warning mb-3">Please update your profile</h3>
                    <form onSubmit={handleProfileUpdate}>
                        <div className="mb-3 form-control" controlId="formBasicDistrict">
                            <label className='label'>District</label>
                            <input name="district" type="text" className='input input-bordered' placeholder="Enter your district name" required />
                        </div>

                        <div className="form-control mb-3" controlId="formBasicPhone">
                            <label className='label'>Phone</label>
                            <input onWheel={e => e.target.blur()} className='input input-bordered' name="phone" type="number" placeholder="Enter your phone number" required />
                        </div>

                        <div className="mb-3 form-control" controlId="formBasicLinkedIn">
                            <label>LinkedIn Profile Link</label>
                            <input name="linkedIn" type="text" className='input input-bordered' placeholder="Enter your LinkedIn Profile Link" required />
                        </div>

                        <p className='mb-1 text-xl'>Education</p>
                        <select name="education" aria-label="Default select example" defaultValue="Graduate">
                            <option value="Graduate">Graduate</option>
                            <option value="Undergraduate">Undergraduate</option>
                            <option value="HSC">HSC</option>
                            <option value="SSC">SSC</option>
                            <option value="Under SSC">Under SSC</option>
                        </select>

                        <button className=' btn mt-3  btn-primary mx-3' variant="secondary" type="submit">
                            Update Profile
                        </button>
                        <button onClick={() => setUpdate(false)} className=' btn btn-info my-3' variant="secondary" type="submit">
                            Cancel
                        </button>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default MyProfile;