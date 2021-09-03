import React, { useState } from "react";
import { fire, db, storage } from "../../util/firebase";
import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router-dom";
import "./SellForm.css";

const SellForm = () => {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemBrand, setItemBrand] = useState("");
  const [itemSize, setItemSize] = useState("");
  const [itemColor, setItemColor] = useState("");
  const [itemCategory, setItemCategory] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [fileUrl, setFileUrl] = useState();

  const sellRef = db.collection("itemsForSale");
  let history = useHistory();

  const fileHandler = async (event) => {
    const file = event.target.files[0];
    const storageRef = storage.ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const itemInfo =
      uuidv4();
    const newItem = await sellRef.doc(itemInfo).set({
      item: itemName,
      brand: itemBrand,
      price: itemPrice,
      description: itemDescription,
      category: itemCategory,
      id: itemInfo,
      size: itemSize, 
      color: itemColor,
      image: fileUrl,
      sellerId: fire.auth().currentUser.uid,
      sellerName: fire.auth().currentUser.email,
      
    });
    history.push("/");
  };


  return (
    <form className="sellForm" onSubmit={submitHandler}>
      <h1>Add a new listing</h1>

      <div className="sellSection detailSection">
        <h2>DETAILS</h2>

        <input
          type="text"
          value={itemName}
          name="itemName"
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Item Name"
          required
        />
        <input
          type="text"
          value={itemBrand}
          onChange={(e) => setItemBrand(e.target.value)}
          classname="secondSellInput"
          placeholder="Designer"
          required
        />

        <select
          id="categories"
          name="categories"
          value={itemCategory}
          onChange={(e) => setItemCategory(e.target.value)}
          required
        >
          <option value="" disabled selected hidden>
            Category
          </option>
          <option value="tops">Tops</option>
          <option value="bottoms">Bottoms</option>
          <option value="footwear">Footwear</option>
          <option value="outerwear">Outerwear</option>
          <option value="accessories">Accessories</option>
        </select>

        <select
          id="sizes"
          name="sizes"
          value={itemSize}
          onChange={(e) => setItemSize(e.target.value)}
          required
        >
          <option value="" disabled selected hidden>
            Size
          </option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>

      <div className="sellSection colorSection">
        <h2>COLOR</h2>
        <input
          value={itemColor}
          onChange={(e) => setItemColor(e.target.value)}
          type="text"
          placeholder="Color"
          required
        />
      </div>

      <div className="sellSection descriptionSection">
        <h2>DESCRIPTION</h2>
        <textarea
          value={itemDescription}
          onChange={(e) => setItemDescription(e.target.value)}
          required
        />
      </div>

      <div className="sellSection priceSection">
        <h2>PRICE</h2>
        <span className="currencyIcon">
          $
          <input
            type="number"
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
            placeholder="Price (USD)"
            required
          />
        </span>
      </div>

      <div className="sellSection imageSection">
        <h2>ITEM IMAGE</h2>
        <input type="file" onChange={fileHandler} required />
      </div>

      <button className="sellPublish">Publish</button>
    </form>
  );
};

export default SellForm;
