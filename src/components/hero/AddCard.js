import React from 'react'
import '../../styles/mainContent.scss'



function AddCard({
                  id,
                  title,
                  imageURL,
                  price,
                  loggedIn,
                  isAdmin,

              }) {


    const obj = {id, parentId : id, title, imageURL, price}

    const createItem = () => {
        try {

        }
        catch (error) {
            alert('Error! Item not created!')
        }
    }


    return (true) ? (
        <div className='card mr-5'>

                        <img width={100} height={75} src='img/btn-plus.svg' alt="Skin"/>

                        <div className="d-flex justify-between align-center m-5">

                            <div>123123123</div>
                            <img className="plus" onClick={createItem}/>


                        </div>


                ) }
        </div>
    ) : (
        console.log('not logged in')
    )

}

export default AddCard