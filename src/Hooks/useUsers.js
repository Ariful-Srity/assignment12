import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import auth from "../firebase.init";
import useToken from "./useToken";

const useUsers = () => {
    const [token] = useToken();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (token) {
            setLoading(true);
            fetch(`https://dry-ravine-38749.herokuapp.com/users`, {
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
                .then(data => {
                    setUsers(data);
                    setLoading(false);
                })
        }
    }, [token])
    return [users, loading];
}
export default useUsers;