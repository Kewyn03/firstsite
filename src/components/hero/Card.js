import React from 'react'
import ContentLoader from "react-content-loader";
import '../../styles/mainContent.scss'
import AppContext from "../context/context";

function Card({
                  id,
                  title,
                  imageURL,
                  price,
                  onPlus,
                  loading = false,

              }) {

    const {isItemAdded} = React.useContext(AppContext)


    const obj = {id, parentId : id, title, imageURL, price}

    const onClickPlus = () => {
        onPlus(obj)

    }


    return (



        <div className='card mr-5'>

            {
                loading ? ( <ContentLoader
                        speed={2}
                        width={100}
                        height={140}
                        viewBox="0 0 100 140"
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb"

                    >
                        <rect x="0" y="1" rx="0" ry="0" width="99" height="81"/>
                        <rect x="0" y="88" rx="0" ry="0" width="59" height="27"/>
                        <rect x="-6" y="120" rx="0" ry="0" width="105" height="17"/>
                        <rect x="67" y="87" rx="0" ry="0" width="32" height="27"/>
                        <rect x="163" y="124" rx="0" ry="0" width="0" height="1"/>
                    </ContentLoader> ) : (

                <>


                    <div>

                        <img width={100} height={75} src={imageURL} alt="Skin"/>

                        <div className="d-flex justify-between align-center m-5">

                            <span>{price} $</span>

                            <img className="plus" onClick={onClickPlus}
                                 src={isItemAdded(id) ? ' img/btn-checked.svg' : 'img/btn-plus.svg'} alt='button-add'/>


                        </div>
                        <span className='cardTitle'>{title}</span>

                    </div>


                    </>

                ) }

        </div>

    )

}

export default Card