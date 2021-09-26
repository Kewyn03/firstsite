import Card from "./Card";
import React from "react";


import '../../styles/mainContent.scss'
import AddCard from "./AddCard";
import ItemPage from "./ItemPage";
import { BrowserRouter as Router, Switch, Route, useParams, Link } from 'react-router-dom'
import { useAuth } from "../context/authcontext";
import { Item } from "semantic-ui-react";


function Hero({items, searchValue, onAddToCart, onChangeSearchInput, isLoading}) {

    const {isAdmin} = useAuth()




    const renderItems = () => {
        const filteredItems = items && items.filter(obj => obj.title.toLowerCase().includes(searchValue.toLowerCase()))

        console.log(filteredItems)
        return (isLoading ? [...Array(20)] : filteredItems)
            .map((obj, index) => (
                <>

                    <Link className='link' key={obj.id} to={`/items/${obj.id}`} exact>

                        <Card
                            key={index}

                            loading={isLoading}
                            onPlus={(item) => onAddToCart(item)}
                            {...obj}
                        />

                    </Link>
                </>
            ))

    }


return (
        <>


        <span className="main-content">
                        <div className="search-column d-flex p-20 m-10 float-left">



                            <div className="ui action input"><input onChange={onChangeSearchInput}
                                                                    value={searchValue} type="text"
                                                                    placeholder="Search..."/>
                                    <button className="ui icon button"><i aria-hidden="true"
                                                                          className="search icon"/></button>
                                </div>


                        </div>

                        <div className="mainContent  d-flex m-20">

                            {isAdmin ? <AddCard/> : ''}
                            {/*{console.log(isAdmin(),'admin?')}*/}
                            {renderItems()}



                        </div>
                    </span>


        </>
)
}


export default Hero