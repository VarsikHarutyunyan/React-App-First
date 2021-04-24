import React, {useState, useEffect} from "react";
import CartItemList from "./CartItemList";


function Cart() {
    const [data, setData] = useState();
    const json = async () => {
        const dat = await fetch("DataProduct.json");
        const getJson = await dat.json()
        setData(getJson)
    }

    useEffect(() => {
        json();
    }, [])

    return (
        <div>
            {<CartItemList data={data}/>}
            {JSON.stringify(data)}
        </div>
    )
}

export default Cart;

