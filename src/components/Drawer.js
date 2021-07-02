import React from "react";
import AppContext from "./context";
import fire from '../fire'
import '../styles/styles.scss'

function Drawer({ onClose, onRemove,items = [] }) {
  const {cartItems,setCartItems} = React.useContext(AppContext)
  const [isOrderComplete,setIsOrderComplete] = React.useState(false)
  const [orderId,setOrderId] = React.useState(null)

  const onClickOrder = async () => {
   try {
     const {data} = await fire.post('/orders',cartItems)
     setOrderId(data.id)
     setIsOrderComplete(true)
   } catch (error) {
     alert('oshibka zakaza')
   }
  }

  return (
    <div className="overlay">
      <div className="drawer flex">
        <h2 className="d-flex justify-between mb-30">
          Корзина <img onClick={onClose} className="cu-p" src="/img/btn-remove.svg" alt="Close" />
        </h2>

        <div className="items">
          {items.map((obj) => (
            <div key={obj.id} className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: `url(${obj.imageURL})` }}
                className="cartItemImg">
              </div>
              <div className="mr-20 flex">
                <p className="mb-5">{obj.title}</p>
                <b>{obj.price} руб.</b>
              </div>
              <img onClick={() => onRemove(obj.id)} className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
            </div>
          ))}
        </div>

        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>

              <b>21 498 руб. </b>
            </li>
            <li>
              <span>Налог 5%:</span>

              <b>1074 руб. </b>
            </li>
          </ul>
          <button onClick={onClickOrder} className="greenButton">
            Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
