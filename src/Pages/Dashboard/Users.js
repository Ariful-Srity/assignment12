import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useUsers from '../../Hooks/useUsers';

import Loading from '../Shared/Loading/Loading';
import UserRow from './UserRow';


const Users = () => {
    const [user] = useAuthState(auth);
    const [users] = useUsers();
    const [loggedInUser, setLoggedInUser] = useState({});
    useEffect(() => {
        setLoggedInUser(users?.find(u => u.email === user.email));
    }, [users, user.email]);
    console.log(loggedInUser)


    //const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://dry-ravine-38749.herokuapp.com/users', {
    //  method: 'GET',
    //  headers: {
    //    authorization: `Bearer ${localStorage.getItem('accessToken')}`
    // }
    // }).then(res => res.json()));
    //if (isLoading) {
    //  return <Loading></Loading>
    //}
    return (
        <div className='grid lg:grid-cols-2 sm:grid-cols-1'>

            <div className="overflow-x-auto">
                <h2 className="text-4xl text-center text-warning">All Users: {users.length}</h2>
                <table className="table lg:w-full sm:w-half">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>

                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <UserRow
                                key={user._id}
                                user={user}
                            // refetch={refetch}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;