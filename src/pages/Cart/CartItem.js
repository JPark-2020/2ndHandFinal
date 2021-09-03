import {fire, db} from '../../util/firebase';


const CartItem = (props) => {
  const myCartRef = db.collection("cart");

  
  function deleteItem(item) {
    myCartRef.doc(item).delete();
    
  }

  return (
    <div className="cartItem">
      <div className="cartImageContainer">
        <img className="cartItemImage" src={props.imageRef} alt="image" />
      </div>
      <div className="cartContentContainer">
        <div className="cartItemBrand">
          <p>
            <strong>{props.brand}</strong>: {props.name}
          </p>
        </div>
        <div className="cartItemSize">
          <p>{props.size}</p>
        </div>
        <div className="cartItemColor">
          <p>{props.color}</p>
        </div>
        <div className="cartItemPrice">
          <p>
            <strong>${props.price}</strong>
          </p>
        </div>
        <div>
            <a className="removeCart" onClick={() => deleteItem(props.item)}>
                Remove 
            </a>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
