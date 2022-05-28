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
        setLoggedInUser(users.find(u => u.email === user.email));
    }, [users, user.email]);
    console.log(loggedInUser)
    

    //const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users', {
    //  method: 'GET',
    //  headers: {
    //    authorization: `Bearer ${localStorage.getItem('accessToken')}`
    // }
    // }).then(res => res.json()));
    //if (isLoading) {
    //  return <Loading></Loading>
    //}
    return (
        <div>
            <h2 className="text-2xl">All Users: {users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
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