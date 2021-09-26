import React from "react";

import HeaderIcon from './HeaderIcon.ico'
import { Link } from 'react-router-dom'
import SignLinks from './SignedOutLinks'
import {useAuth } from '../context/authcontext'
import './Auth.scss'
import { render } from "@testing-library/react";




function Header(props) {

    const {loggedIn} = useAuth()

    return (
            <>
            <span className="header">
                <div className="container-fluid">

                    <nav className=" navbar-expand-sm">
                        <ul className="navbar-nav">
                            <li  className="logoHeader">
                                <Link to='/'>
                                    <img src={HeaderIcon} alt="Site Logo"/>
                                </Link>
                            </li>
                            <li className="nav-item navbar-text">
                                <Link className="nav-link" to="items">Каталог</Link>
                            </li>
                            <li className="nav-item navbar-text">
                                <Link className="nav-link" to="/FAQ">Как это работает</Link>
                            </li>
                            <li className="nav-item navbar-text">
                                <Link className="nav-link" to="/support">Техподдержка</Link>
                            </li>



                            <li onClick={props.onClickCart} className="nav-item d-flex align-center ml-10 mr-10 cu-p ">

                                    <img width={18} height={18} src='../../img/cart.svg' alt='cart'/>

                            </li>
                            <li>
                                 {loggedIn ? (<li className="user-name-header"> Hello {localStorage.getItem('login')} </li>) : ('Sign Up or Sign In')}
                            </li>


                            <SignLinks />
                        </ul>


                    </nav>

                </div>
            </span>

            </>
    )


}

export default Header
