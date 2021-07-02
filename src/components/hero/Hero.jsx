import Rarity from "../category/Rarity";
import Quality from "../category/Quality";
import Categories from "../category/Categories";
import Card from "./Card";
import React from "react";
import {render} from "@testing-library/react";
import AppContext from "../context";

import '../../styles/mainContent.css'

function Hero({items,searchValue,onAddToCart,onChangeSearchInput,isLoading}) {

    const renderItems=() => {
        const filteredItems = items && items.filter(obj =>obj.title.toLowerCase().includes(searchValue.toLowerCase()))

        return (isLoading ? [...Array(70)] : filteredItems)
            .map((obj,index) => (
                <Card
                    key={index}

                    loading={isLoading}
                    onPlus={(item) => onAddToCart(item)}
                    {...obj}
                />
            ))
    }
    return(
        <span className="main-content">
                        <div className="search-column d-flex p-20 m-10 float-left">



                                <div className="ui action input"><input onChange={onChangeSearchInput} value={searchValue} type="text" placeholder="Search..."/>
                                    <button className="ui icon button"><i aria-hidden="true" className="search icon"/></button>
                                </div>


                        </div>

                        <div className="mainContent  d-flex m-20">


                                {renderItems()}


                        </div>
                    </span>

    )
}

export default Hero