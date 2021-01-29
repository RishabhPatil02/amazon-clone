import React from 'react'
import {useStateValue} from "./StateProvider";
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal';
function Checkout() {

    const[{basket}]=useStateValue();

    return (
        <div className="checkout">
            <div className="checkout_left">
            {basket?.length===0 ? (
                <div className= "checkout_title">
                    <h2>Your shopping basket is empty</h2>
                    <p>You have no items in your basket. to buy one or more items, click "Add to basket" next to the item</p>
                </div>
            ):(
                <div className= "checkout_title">
                    <h2>Your shopping basket</h2>
                    {basket?.map((item)=>{
                        console.log(item);
                        return(
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}/>
                    )})}
                    
                </div>
            )}
            </div>
            {basket.length>0 &&(
                <div classssName="checkout_right">
                    <Subtotal/>
                </div>
            )}   
        </div>
    );
}

export default Checkout
