import CartItem from './CartItem';


function CartItemList(props){
    console.log("CartItemList")
    console.log(props)
    return(
        <>
            {props.map((elem,index)=> <CartItem key={index} dataProduct={elem}/>)}
        </>
    )
}
export default CartItemList;