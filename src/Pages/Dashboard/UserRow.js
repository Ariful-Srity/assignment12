import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user }) => {


    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ role: 'admin' })
        })
            .then(res => {
                console.log(res)
                if (res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success(`Successfully made an admin`);
                }
                console.log(data)

            })
    }
    return (
        <tr>
            <th></th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-success btn-outline">Make Admin</button>}</td>
        </tr>
    );
};

export default UserRow;