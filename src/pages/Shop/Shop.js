import React, { useState, useEffect } from "react";
import { fire, db, storage } from "../../util/firebase";
import "./Shop.css";
import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router-dom";

const Shop = () => {
  const [availableMerchandise, setAvailableMerchandise] = useState([]);

  const userEmail = fire.auth().currentUser.email;
  const cartRef = db.collection("cart");
  const cartDoc = uuidv4();

  let history = useHistory();

  const purchaseHandler = async (item) => {
    const newItem = await cartRef.doc(cartDoc).set({
      item,
      cartOwner: userEmail,
      id: cartDoc,
    });

    history.push("/cart");
  };

  useEffect(() => {
    const fetchMerchandise = async () => {
      const itemsCollection = await db.collection("itemsForSale").get();
      setAvailableMerchandise(
        itemsCollection.docs.map((doc) => {
          return doc.data();
        })
      );
    };
    fetchMerchandise();
  }, []);

  return (
    <div className="shopContainer">
      <h4 className="shopHeader">Available Listings</h4>
      <div className="buyFeed">
        {availableMerchandise.map((item) => {
          if (item.sellerName === userEmail) {
            return (
              <div className="buyItems" key={item.id}>
                <img className="buyImage" src={item.image} alt={item.item} />
                <hr />
                <p className="itemBrand">
                  {item.brand.toUpperCase()}{" "}
                  <span className="itemSize">{item.size}</span>
                </p>
                <p>{item.item}</p>

                <p>{item.color}</p>
                <p>
                  <strong>${item.price}</strong>
                </p>
                <p>{item.sellerName}</p>
              </div>
            );
          }
          return (
            <div className="buyItems" key={item.id}>
              <img className="buyImage" src={item.image} alt={item.item} />
              <hr />
              <p className="itemBrand">
                {item.brand.toUpperCase()}{" "}
                <span className="itemSize">{item.size}</span>
              </p>
              <p>{item.item}</p>

              <p>{item.color}</p>
              <p>
                <strong>${item.price}</strong>
              </p>
              <p>{item.sellerName}</p>
              <p className="purchaseItem" onClick={() => purchaseHandler(item)}>
                Add To Cart
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
