import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useOrders from '../../Hooks/useOrders';
import useUsers from '../../Hooks/useUsers';
import Loading from '../Shared/Loading/Loading';

const ManageallOrders = () => {

    const [user, userLoading] = useAuthState(auth);
    const [users, usersLoading] = useUsers();
    const [orders, loading] = useOrders();
    const navigate = useNavigate();
    const [loggedInUser, setLoggedInUser] = useState({});
    const [renderCount, setRenderCount] = useState(0);

    useEffect(() => {
        setLoggedInUser(users.find(u => u.userEmail === user.email));
        setRenderCount(renderCount + 1);
    }, [users, user.email]);

    //if (loading || userLoading || usersLoading) {
    //   return <Loading />;
    //}

    if (renderCount === 2) {
        if (loggedInUser.role !== 'Admin') {
            navigate('/unAuthorizedAccess', { replace: true });
        }
    }
    return (
        <div>

            <h2>Manage All Orders</h2>
            {
                orders.length ?
                    <table striped bordered hover variant="dark" className='text-center w-75'>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Tool Name</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                                <th>Action / Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((userOrder, index) => <tr>
                                    <td>{index + 1}</td>
                                    <td>aa</td>
                                    <td>aaa</td>
                                    <td>$iud</td>
                                    <td>hellos</td>
                                </tr >)
                            }
                        </tbody>
                    </table>
                    :
                    <h3 className='text-danger text-center mt-5'>No order available</h3>
            }

        </div>
    );
};

export default ManageallOrders;