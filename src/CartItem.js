function CartItem (props){

    return (
        <div className="productContent">
            <div className="productImg">
                <img  src = {props.dataProduct.image} />
            </div>

            <div className="productDescription">
                <h2>{props.dataProduct.name}</h2>
                <p>{props.dataProduct.color}</p>
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <div className="productPrice">
                <img src="https://icons-for-free.com/iconfiles/png/512/delete+remove+trash+trash+bin+trash+can+icon-1320073117929397588.png" />
                {/*<span>{props.dataProduct.price}</span>*/}
            </div>
        </div>
    )
}

export default CartItem;