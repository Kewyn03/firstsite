import React, { Suspense } from 'react'

import { BrowserRouter, Route } from 'react-router-dom'

import database from './database'
import { useResource } from "./components/hero/resource";
import Drawer from "./components/Drawer";
import Hero from "./components/hero/Hero"
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import HelloPage from './components/hero/helloPage'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'

import './styles.scss'
import './styles/mainContent.scss'
import AppContext from "./components/context/context";
import { AuthProvider } from "./components/context/authcontext";
import ItemPage from "./components/hero/ItemPage";


function App() {

    const resource = useResource()
    const [items, setItems] = React.useState([])
    const [searchValue, setSearchValue] = React.useState('')
    const [cartItems, setCartItems] = React.useState([])
    const [cartOpened, setCartOpened] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(true)
    const [ourItem, setOurItems] = React.useState([])


    React.useEffect(() => {
        async function fetchData() {
            try {

                const cartResponse = await database.get('cart')
                const itemsResponse = await database.get('items')

                setIsLoading(false)

                setCartItems(cartResponse.data);
                setItems(itemsResponse.data);

            } catch (error) {
                alert('Error! Data no received!')
                console.error(error)
            }
        }

        fetchData();


    }, [])


    const onAddToCart = async (obj) => {
        try {
            const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
            if (findItem) {
                setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
                await database.delete(`cart/${findItem.id}`);
            } else {
                setCartItems((prev) => [...prev, obj]);
                const {data} = await database.post('cart', obj);

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
            alert('Error! Item no added to cart!');
            console.error(error);
        }
    };


    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value)
    }

    const onRemoveItem = (id) => {
        try {
            database.delete(`cart/${id}`)
            setCartItems((prev) => prev.filter(item => Number(item.id) !== Number(id)))
        } catch (error) {
            alert('Error! Item not deleted!')
        }
    }

    const isItemAdded = (id) => {
        return cartItems.some((item) => Number(item.parentId) === Number(id))


    }


    return (
        <BrowserRouter>
            <AuthProvider>
                <AppContext.Provider value={{cartItems, items, isItemAdded, onAddToCart, setCartItems, setCartOpened}}>



                        <div className="App">
                            <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}
                                    opened={cartOpened}/>
                            <Header onClickCart={() => setCartOpened(true)}
                                    className="header-content"/>


                            <Route path='/signup' exact render={() => <SignUp/>}>

                                <SignUp/>
                            </Route>
                            <Route path='/signin' exact render={() => <SignIn/>}>;

                                <SignIn/>

                            </Route>

                            {/*component={SignIn }*/}


                            <Route path='/items/:id' exact>
                                <Suspense fallback={<p>Loading...</p>}>
                                    <ItemPage resource={resource}/>
                                </Suspense>
                            </Route>

                            <Route path='/' exact>
                                <HelloPage/>
                            </Route>

                            <Route path="/items" exact>
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
            </AuthProvider>


        </BrowserRouter>


    );

}

export default App


