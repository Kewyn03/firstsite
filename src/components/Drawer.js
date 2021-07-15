import React from "react";
import AppContext from "./context";
import Info from './Info'
import axios from "axios";

import styles from './Drawer.module.scss'
import '../styles/styles.scss'


const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClose, onRemove,items = [] ,opened}) {
  const {cartItems,setCartItems} = React.useContext(AppContext)
  const [isOrderComplete,setIsOrderComplete] = React.useState(false)
  const [orderId,setOrderId] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(false);
  const totalPrice = cartItems.reduce((sum,obj) => obj.price + sum,0)

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post('https://60e5c694086f730017a6fdf1.mockapi.io/orders', {
        items: cartItems,
      });
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete('https://60e5c694086f730017a6fdf1.mockapi.io/cart' + item.id);
        await delay(1000);
      }
    } catch (error) {
      alert('Ошибка при создании заказа :(');
    }
    setIsLoading(false);
  };

  return (
      <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
          <div className={styles.drawer}>
              <h2 className="d-flex justify-between mb-30">
                  Корзина <img onClick={onClose} className="cu-p" src="/img/btn-remove.svg" alt="Close" />
              </h2>

              { items.length > 0 ? (
                  <>
              <div className="items">
                  {items.map((obj) => (
                      <div key={obj.id} className="cartItem d-flex align-center mb-20">
                          <div
                              style={{ backgroundImage: `url(${obj.imageURL})` }}
                              className="cartItemImg">
                          </div>
                          <div className="mr-20 flex">
                              {console.log(obj)}
                              <p className="mb-5">{obj.title}</p>
                              <b>{obj.price} $</b>
                          </div>
                          <img onClick={() => onRemove(obj.id)} className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                      </div>
                  ))}
              </div>
                  <div className="cartTotalBlock">
                      <ul>
                          <li>
                              <span>Итого:</span>

                              <b>{totalPrice} $ </b>
                          </li>

                      </ul>
                      <button onClick={onClickOrder} className="greenButton">
                          Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
                      </button>
                  </div>
                  </>
              )
              : (
                      <Info
                          title={isOrderComplete ? 'Заказ оформлен!' : 'Корзина пустая'}
                          description={
                              isOrderComplete
                                  ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                                  : 'Добавьте хоть что-то'
                          }

                      />
              ) }
          </div>
      </div>
  )
}

export default Drawer;
