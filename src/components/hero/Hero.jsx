import Card from "./Card";
import React from "react";


import '../../styles/mainContent.scss'
import AddCard from "./AddCard";

function Hero({items, searchValue, onAddToCart, onChangeSearchInput, isLoading, loggedIn}) {



    const renderItems = () => {
        const filteredItems = items && items.filter(obj => obj.title.toLowerCase().includes(searchValue.toLowerCase()))

        return (isLoading ? [...Array(20)] : filteredItems)
            .map((obj, index) => (
                <Card
                    key={index}

                    loading={isLoading}
                    onPlus={(item) => onAddToCart(item)}
                    {...obj}
                />
            ))
    }
    return (
        <>
            {loggedIn ? (

                <span className="main-content">
                        <div className="search-column d-flex p-20 m-10 float-left">

                                    {console.log(loggedIn)}

                            <div className="ui action input"><input onChange={onChangeSearchInput}
                                                                    value={searchValue} type="text"
                                                                    placeholder="Search..."/>
                                    <button className="ui icon button"><i aria-hidden="true"
                                                                          className="search icon"/></button>
                                </div>


                        </div>

                        <div className="mainContent  d-flex m-20">

                                {AddCard}
                            {renderItems()}


                        </div>
                    </span>
            ) : (<span className="main-content">
                        <div className="search-column d-flex p-20 m-10 float-left">

                            {console.log(loggedIn)}

                            <div className="ui action input"><input onChange={onChangeSearchInput}
                                                                    value={searchValue} type="text"
                                                                    placeholder="Search..."/>
                                    <button className="ui icon button"><i aria-hidden="true"
                                                                          className="search icon"/></button>
                                </div>


                        </div>

                        <div className="mainContent  d-flex m-20">


                                {renderItems()}


                        </div>
                    </span>)

            }
        </>
    )
}


export default Hero