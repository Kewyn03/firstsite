import React from 'react'
import './ItemPage.scss'
import './ItemSoloPage.scss'
import { useParams } from "react-router-dom";

export default function ItemPage({resource}) {

    const items = resource.items.read()
    const id = useParams()
    const newId = Object.values(id)[0]
    const ourItem =  items.find((index) => index.id === newId)

    return (
        <>

            {/*{items.filter(index => index === newId)}*/}
            <>
                <div className='itemPageImage'>
                    {/*<p>{props.location.state.itemId}</p>*/}

                    <img className='imgBlock' src={ourItem.imageURL} alt="Skin"/>

                    <p className='cardTitle'>{ourItem.title}</p>
                    <div className="priceBlock ">

                        <p>{ourItem.price} $</p>

                    </div>
                    <div className='itemDescription'>
                        {ourItem.description}
                    </div>



                </div>

            </>
        </>


    );

}



