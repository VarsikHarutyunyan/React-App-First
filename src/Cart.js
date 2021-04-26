import React, { useState, useEffect } from "react";
import CartItemList from "./CartItemList";
import "./CartCss.css"
import CartHeader from './CartHeader';
import CartFooter from './CartFooter';

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
        <div className="aa">
            <CartHeader />OnAddBtnClick
            {data && <CartItemList data={data} id={data.id}
                onDelete={
                    (dataProduct) => {
                        setData(data.filter((t) => t.id !== dataProduct.id))
                    }}
                onButtonAdd={
                    (dataProduct) => {
                        setData(
                            data.map(x => {
                                if (x.id === dataProduct.id) {
                                    ++x.quantity
                                }
                                return x
                            })
                        )
                    }
                }
            />}
            <CartFooter />
        </div>
    )
}

export default Cart;

