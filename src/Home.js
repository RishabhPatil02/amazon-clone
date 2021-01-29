import React from 'react'
import "./Home.css";
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_3000x1200._CB431281466_.jpg" alt=""/>
            <div className="home_row">
            <Product
                id="1"
                title="laptop"
                price={24000}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/61Dw5Z8LzJL._SX679_.jpg"
                />
                
                <Product
                id="2"
                title="television set"
                price={12000}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/712yOJiKWIL._SX679_.jpg"
                />
                <Product
                id="3"
                title="mobile"
                price={10000}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71-Su4Wr0HL._SL1500_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
