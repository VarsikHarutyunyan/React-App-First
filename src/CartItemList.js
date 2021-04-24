import CartItem from './CartItem';


function CartItemList(props){
    console.log("CartItemList",props)
    return(
        <>
            {props.data.map((elem,index)=> <CartItem key={index} dataProduct={elem}/>)}
        </>
    )
}
export default CartItemList;