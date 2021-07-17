import React from 'react';
import AppContext from './context/context';

import './Drawer.module.scss'
import '../styles/styles.scss'

const Info = ({title, description}) => {
    const {setCartOpened} = React.useContext(AppContext);

    return (
        <>
            <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                <h2>{title}</h2>
                <p className="opacity-6">{description}</p>

            </div>
            <button onClick={() => setCartOpened(false)} className="greenButtonBack">
                <img src="img/arrow.svg" className="reverse-arrow" alt="Arrow"/>
                Вернуться назад
            </button>
        </>
    );
};

export default Info;