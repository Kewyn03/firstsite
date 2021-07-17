import React from "react";

import HeaderIcon from './HeaderIcon.ico'
import { Link } from 'react-router-dom'
import SignedOutLinks from './SignedOutLinks'

import './Auth.scss'
function Header(props) {


    return (
        <component id="Header">
            <header className="header">
                <div className="container-fluid">

                    <nav className=" navbar-expand-sm">
                        <ul className="navbar-nav">
                            <li  className="logoHeader">
                                <Link to='/'>
                                    <img src={HeaderIcon} alt="Site Logo"/>
                                </Link>
                            </li>
                            <li className="nav-item navbar-text">
                                <Link to="items">
                                    <a className="nav-link" href="#">Каталог</a>
                                </Link>
                            </li>
                            <li className="nav-item navbar-text">
                                <Link to="/FAQ">
                                    <a className="nav-link" href="#">Как это работает</a>
                                </Link>
                            </li>
                            <li className="nav-item navbar-text">
                                <Link to="/support">
                                    <a className="nav-link" href="#">Техподдержка</a>
                                </Link>
                            </li>

                            <li onClick={props.onClickCart} className="nav-item d-flex align-center mr-10 cu-p">

                                    <img width={18} height={18} src='../../img/cart.svg'/>

                            </li>

                            {/*<SignedInLinks />*/}
                            <SignedOutLinks/>

                        </ul>

                    </nav>

                </div>
            </header>

        </component>
    )


}

export default Header
