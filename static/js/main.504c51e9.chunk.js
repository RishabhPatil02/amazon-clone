(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},51:function(e,t,c){},53:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c(0),i=c.n(a),n=c(15),r=c.n(n),o=(c(36),c(37),c(12)),l=c(3),j=c(10),d=(c(38),c(26)),h=c.n(d),b=c(27),m=c.n(b),u=Object(a.createContext)(),O=function(){return Object(a.useContext)(u)},x=function(e){var t=e.reducer,c=e.initialState,i=e.children;return Object(s.jsx)(u.Provider,{value:Object(a.useReducer)(t,c),children:i})};var p=function(){var e=O(),t=Object(j.a)(e,2),c=t[0].basket;return t[1],console.log(c),Object(s.jsxs)("nav",{className:"header",children:[Object(s.jsx)(o.b,{to:"./",children:Object(s.jsx)("img",{className:"header_logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png"})}),Object(s.jsxs)("div",{className:"header_search",children:[Object(s.jsx)("input",{type:"text",className:"header_searchInput"}),Object(s.jsx)(h.a,{className:"header_searchIcon"})]}),Object(s.jsxs)("div",{className:"header_nav",children:[Object(s.jsx)(o.b,{to:"/login",className:"header_link",children:Object(s.jsxs)("div",{className:"header_option",children:[Object(s.jsx)("span",{className:"header_optionLineOne",children:"Hello"}),Object(s.jsx)("span",{className:"header_optionLineTwo",children:"Sign in"})]})}),Object(s.jsx)(o.b,{to:"/",className:"header_link",children:Object(s.jsxs)("div",{className:"header_option",children:[Object(s.jsx)("span",{className:"header_optionLineOne",children:"Returns"}),Object(s.jsx)("span",{className:"header_optionLineTwo",children:"& orders"})]})}),Object(s.jsx)(o.b,{to:"/login",className:"header_link",children:Object(s.jsxs)("div",{className:"header_option",children:[Object(s.jsx)("span",{className:"header_optionLineOne",children:"Your"}),Object(s.jsx)("span",{className:"header_optionLineTwo",children:"Prime"})]})}),Object(s.jsx)(o.b,{to:"/checkout",className:"header_link",children:Object(s.jsxs)("div",{className:"header_optionBasket",children:[Object(s.jsx)(m.a,{}),Object(s.jsx)("span",{className:"header_optionLineTwo header_basketCount",children:null===c||void 0===c?void 0:c.length})]})})]})]})},g=(c(45),c(28));c(46);var v=function(e){var t=e.id,c=e.title,a=e.image,i=e.price,n=e.rating,r=O(),o=Object(j.a)(r,2);Object(g.a)(o[0]);var l=o[1];return Object(s.jsxs)("div",{className:"product",children:[Object(s.jsxs)("div",{className:"product_info",children:[Object(s.jsx)("p",{children:c}),Object(s.jsxs)("p",{className:"product_price",children:[Object(s.jsx)("small",{children:"Rs."}),Object(s.jsx)("strong",{children:i})]}),Object(s.jsx)("div",{className:"product_rating",children:Array(n).fill().map((function(e){return Object(s.jsx)("p",{children:"\u2b50"})}))})]}),Object(s.jsx)("img",{className:"product_image",src:a,alt:""}),Object(s.jsx)("button",{onClick:function(){l({type:"ADD_TO_BASKET",item:{id:t,title:c,price:i,rating:n,image:a}})},children:"Add to basket"})]})};var _=function(){return Object(s.jsxs)("div",{className:"home",children:[Object(s.jsx)("img",{className:"home_image",src:"https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_3000x1200._CB431281466_.jpg",alt:""}),Object(s.jsxs)("div",{className:"home_row",children:[Object(s.jsx)(v,{id:"1",title:"laptop",price:24e3,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/61Dw5Z8LzJL._SX679_.jpg"}),Object(s.jsx)(v,{id:"2",title:"television set",price:12e3,rating:3,image:"https://images-na.ssl-images-amazon.com/images/I/712yOJiKWIL._SX679_.jpg"}),Object(s.jsx)(v,{id:"3",title:"mobile",price:1e4,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/71-Su4Wr0HL._SL1500_.jpg"})]})]})};c(47),c(48);var N=function(e){var t=e.id,c=e.title,a=e.image,i=e.price,n=e.rating,r=O(),o=Object(j.a)(r,2),l=(o[0].basket,o[1]);return Object(s.jsxs)("div",{className:"checkoutProduct",children:[Object(s.jsx)("img",{src:a,className:"checkoutProduct_image"}),Object(s.jsxs)("div",{className:"checkoutProduct_info",children:[Object(s.jsx)("div",{className:"checkoutProduct_title",children:c}),Object(s.jsxs)("div",{className:"checkoutProduct_price",children:[Object(s.jsx)("small",{children:"Rs."}),Object(s.jsx)("strong",{children:i})]}),Object(s.jsx)("div",{className:"checkoutProduct_rating",children:Array(n).fill().map((function(e){return Object(s.jsx)("div",{children:"\u2b50"})}))}),Object(s.jsx)("button",{onClick:function(){l({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove from basket"})]})]})},k=(c(49),c(29)),f=c.n(k),y=c(21),S=c(14),L=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},T=function(e,t){switch(console.log(t),t.type){case"ADD_TO_BASKET":return Object(S.a)(Object(S.a)({},e),{},{basket:[].concat(Object(y.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var c=Object(y.a)(e.basket),s=e.basket.findIndex((function(e){return e.id===t.id}));return s>=0?c.splice(s,1):console.warn("Cant remove product(id:".concat(t.id,") as its not in the basket")),Object(S.a)(Object(S.a)({},e),{},{basket:c});default:return{state:e}}};var w=function(){var e=O(),t=Object(j.a)(e,2),c=t[0].basket;return t[1],Object(s.jsxs)("div",{className:"subtotal",children:[Object(s.jsx)(f.a,{renderText:function(e){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("p",{children:["Subtotal(",c.length," items):",Object(s.jsx)("strong",{children:e})]})})},decimalScale:2,value:L(c),displayType:"text",thousandSeparator:!0,prefix:"Rs."}),Object(s.jsx)("button",{children:"Proceed to Checkout"})]})};var P=function(){var e=O(),t=Object(j.a)(e,1)[0].basket;return Object(s.jsxs)("div",{className:"checkout",children:[Object(s.jsx)("div",{className:"checkout_left",children:0===(null===t||void 0===t?void 0:t.length)?Object(s.jsxs)("div",{className:"checkout_title",children:[Object(s.jsx)("h2",{children:"Your shopping basket is empty"}),Object(s.jsx)("p",{children:'You have no items in your basket. to buy one or more items, click "Add to basket" next to the item'})]}):Object(s.jsxs)("div",{className:"checkout_title",children:[Object(s.jsx)("h2",{children:"Your shopping basket"}),null===t||void 0===t?void 0:t.map((function(e){return console.log(e),Object(s.jsx)(N,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})}),t.length>0&&Object(s.jsx)("div",{classssName:"checkout_right",children:Object(s.jsx)(w,{})})]})};c(51);var A=function(){return Object(s.jsx)("div",{className:"login",children:Object(s.jsx)("h1",{children:"Login Page"})})};function R(){return Object(s.jsx)(o.a,{children:Object(s.jsx)("div",{className:"app",children:Object(s.jsxs)(l.c,{children:[Object(s.jsxs)(l.a,{path:"/checkout",children:[Object(s.jsx)(p,{}),Object(s.jsx)(P,{})]}),Object(s.jsx)(l.a,{path:"/login",children:Object(s.jsx)(A,{})}),Object(s.jsxs)(l.a,{path:"/",children:[Object(s.jsx)(p,{}),Object(s.jsx)(_,{})]})]})})})}r.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(x,{initialState:{basket:[]},reducer:T,children:Object(s.jsx)(R,{})})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.504c51e9.chunk.js.map