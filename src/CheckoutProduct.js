import React from 'react'
import './CheckoutProduct.css'
import {useStateValue} from "./StateProvider"
function CheckourProduct({id,title,image,price,rating}) {
    const[{basket},dispatch]=useStateValue();
    const RemoveFromBasket=()=>{
        dispatch({
        type:"REMOVE_FROM_BASKET",
        id:id,
        });
    }
    return (
        <div className="checkoutProduct">
            <img src={image} className="checkoutProduct_image"/>
            <div className="checkoutProduct_info">
                <div className="checkoutProduct_title">{title}</div>
                <div className="checkoutProduct_price">
                    <small>Rs.</small>
                    <strong>{price}</strong>
                </div>
                <div className="checkoutProduct_rating">
            {Array(rating)
                .fill()
                .map((_)=>(
                    <div>⭐</div>
                ))}
                </div>
                <button onClick={RemoveFromBasket}>Remove from basket</button>
            </div>
            
            </div>
    
    )
}

export default CheckourProduct
