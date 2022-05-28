import { useEffect, useState } from "react";

const useOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://dry-ravine-38749.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return [orders];
}
export default useOrders;

