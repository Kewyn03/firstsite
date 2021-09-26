import React from 'react'
import '../../styles/mainContent.scss'

import database from "../../database";


function AddCard({
                     // id,
                     // title,
                     // imageURL,
                     // price,

                     setItems,

                     // isAdmin,

                 }) {


    // const obj = {id, parentId : id, title, imageURL, price}


    const createItem = async () => {

            try {
                const getItems = await database.get('items')
                if (getItems.data.id < getItems) {
                    let newItem;
                    await database.post('items', newItem)
                }
            } catch (error) {
                alert('Error! Item not created!')
            }



    }

    return (
    <div className='card mr-5'>

        <img width={100} height={75} src='img/btn-plus.svg' alt="Skin"/>

        <div className="d-flex justify-between align-center m-5">

            <img className="plus" onClick={createItem} alt='plus img'/>
        </div>

    </div>

    )
}

export default AddCard