import React, { useState, useEffect } from "react";
import { fire, db, storage } from "../../util/firebase";
import CartItem from "./CartItem";
import "./Cart.css";



const Cart = () => {
  const [cart, setCart] = useState([]);
  const myCartRef = db.collection("cart");

  function getCartItems() {
    myCartRef
      .where("cartOwner", "==", fire.auth().currentUser.email)
      .onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        console.log(items);
        setCart(items);
      });
  }

  useEffect(() => {
    getCartItems();
  }, []);


  function getTotal() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      let item = parseInt(cart[i].item.price);
      total = total + item;
    }
    return total;
  }



  if(cart.length < 1){
      return (
          <h1>No Items...</h1>
      )
  }
  return (
    <div className="cartPage">
      <h1 className="cartHeader">My Items</h1>

      <div className="cartContainer">
        {cart.map((item) => {
          return (
            <CartItem
              imageRef={item.item.image}
              brand={item.item.brand}
              price={item.item.price}
              color={item.item.color}
              size={item.item.size}
              name={item.item.item}
              item={item.id}
              key={item.id}
            />
          );
        })}
      </div>
      <div className="cartTotal">
        <p className="totalHeader">Total Price: </p>
        <p className="totalAmount">${getTotal()} </p>
      </div>
    </div>
  );
};

export default Cart;
