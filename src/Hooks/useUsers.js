import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import auth from "../firebase.init";

const useUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/users`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    localStorage.removeItem('accessToken');
                    signOut(auth);
                    return;
                }
                return res.json();
            })
            .then(data => setUsers(data))
    }, [])
    return [users, setUsers];
}
export default useUsers;