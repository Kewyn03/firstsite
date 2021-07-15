import React, {Component} from 'react'

import { Switch, Route } from 'react-router-dom'

import axios from 'axios'

import Drawer from "./components/Drawer";
import Hero from "./components/hero/Hero"
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import './styles.css'
import './styles/mainContent.css'
import AppContext from "./components/context";





function App () {



    const [items,setItems] = React.useState([])
    const [searchValue,setSearchValue] = React.useState('')
    const [cartItems,setCartItems] = React.useState([])
    const [cartOpened,setCartOpened] =React.useState(false)
    const [isLoading,setIsLoading] =React.useState(true)



    React.useEffect(() => {
        async function fetchData() {
            try {

                const cartResponse = await axios.get('https://60e5c694086f730017a6fdf1.mockapi.io/cart')
                const itemsResponse = await axios.get('https://60e5c694086f730017a6fdf1.mockapi.io/items')

                setIsLoading(false)

                setCartItems(cartResponse.data);
                setItems(itemsResponse.data);

            } catch (error) {
                alert('oshibka zaprosa dannih')
                console.error(error)
            }
        }

        fetchData();


    },[] )

    const onAddToCart = async (obj) => {
        try {
            const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
            if (findItem ) {
                setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
                await axios.delete(`https://60e5c694086f730017a6fdf1.mockapi.io/cart/${findItem.id}`);
            } else {
                setCartItems((prev) => [...prev, obj]);
                const { data } = await axios.post('https://60e5c694086f730017a6fdf1.mockapi.io/cart', obj);
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

    const onAddToHero = async(obj) => {
        try {

        } catch(error) {
            alert('Ошибка добавления товара на сайт')
            console.error(error)
        }
    }

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value)
    }

    const onRemoveItem=(id) => {
        try {
            axios.delete(`https://60e5c694086f730017a6fdf1.mockapi.io/cart/${id}`)
            setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(id)))
        } catch (error) {
            alert('oshibka pri ydalenii')
        }
    }

    const isItemAdded = (id) => {
       return  cartItems.some((item) => Number(item.parentId) === Number(id))


    }




    return (

        <AppContext.Provider value={{cartItems,items,isItemAdded,onAddToCart,setCartItems,setCartOpened}}>
            <div className="App">
                <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} opened={cartOpened}/>
                <Header onClickCart={() => setCartOpened(true)}
                        className="header-content"/>


                <Route path='/signup' exact>
                    <SignUp />
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
                          onAddToHero={onAddToHero}
                    />

                </Route>

                <Footer className="footer-content"/>

            </div>

        </AppContext.Provider>





    );

}

export default App


