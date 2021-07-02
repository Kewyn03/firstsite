import React, {Component} from 'react'
import ReactDom from 'react-dom'
import { Switch, Route } from 'react-router-dom'
import {connect} from "react-redux";
import fire from './fire'

import { getDatabase,set,ref} from 'firebase/database'
import Drawer from "./components/Drawer";
import Hero from "./components/hero/Hero"
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import {FirebaseDatabaseProvider} from "@react-firebase/database";
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import './styles.css'
import './styles/mainContent.css'
import AppContext from "./components/context";

import Card from "./components/hero/Card";
import Rarity from "./components/category/Rarity";
import Quality from "./components/category/Quality";
import Categories from "./components/category/Categories";



function App () {



    const [items,setItems] = React.useState([])
    const [searchValue,setSearchValue] = React.useState('')
    const [cartItems,setCartItems] = React.useState([])
    const [cartOpened,setCartOpened] =React.useState(false)
    const [isLoading,setIsLoading] =React.useState(true)



    React.useEffect(() => {
        async function fetchData() {
        setIsLoading(true)
            const cartResponse = await fire.get('/cart.json')
            const itemsResponse = await fire.get('/arr.json')

        setIsLoading(false)

            setCartItems(cartResponse.data);
        setItems(itemsResponse.data);

        }

        fetchData();

    },[])

    const onAddToCart = async (obj) => {
        try {
            const findItem = cartItems && cartItems.find((item) => Number(item.parentId) === Number(obj.id));
            if (findItem ) {
                setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
                await fire.delete(`/cart/${findItem.id}`);
            } else {
                setCartItems((prev) => [...prev, obj]);
                const { data } = await fire.post('/cart.json', obj);
                setCartItems((prev) =>
                    prev.map((item) => {
                        if (item.parentId === data.parentId) {
                            return {
                                ...item,
                                id: data.id,
                            };
                        }
                        return item;
                    }),
                );
            }
        } catch (error) {
            alert('Ошибка при добавлении в корзину');
            console.error(error);
        }
    };

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value)
    }

    const onRemoveItem=(id) => {
        fire.delete(`/cart.json/${id}`)
        setCartItems((prev) => prev.filter(item => item.id !== id))
    }

    const isItemAdded = (id) => {
       return  cartItems.some((item) => Number(item.parentId) === Number(id))


    }



    return (

        <AppContext.Provider value={{cartItems,items,isItemAdded}}>
            <div className="App">
                {cartOpened && <Drawer cartItems={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} /> }
                <Header onClickCart={() => setCartOpened(true)}
                        className="header-content"/>


                <Route path='/signup' exact>
                    <SignUp/>
                </Route>
                <Route path='/signin' exact>
                    <SignIn/>
                </Route>


                <Route path="/" exact>
                    <Hero items={items}
                          cartItems={cartItems}
                          searchValue={searchValue}
                          setSearchValue={setSearchValue}
                          onChangeSearchInput={onChangeSearchInput}
                          onAddToCart={onAddToCart}
                          isLoading={isLoading}
                    />

                </Route>

                <Footer className="footer-content"/>

            </div>

        </AppContext.Provider>





    );

}

export default App


