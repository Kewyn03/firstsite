import React from 'react'
import { Link } from 'react-router-dom'
import './Auth.scss'


function SignLinks({
                       loggedIn,login,logout,signin
                   }) {


    return true ? (
        <span className=''>
            <ul className="navbar-nav">
                <button className='button-signup wrap' onClick={signin}><Link to='/signup' className='link'>Sign up</Link></button>
                <button className='button-login wrap' onClick={login}><Link to='/signin' className='link'>Login</Link></button>
            </ul>
            </span>
    ) : (
        <span className='right'>
            <ul className=" navbar-nav align-items-baseline ">
                <button className='button-logout wrap ' onClick={() => logout}><Link to='/' className='link'>Log Out</Link></button>


                {/*<li><NavLink to='/' className=""></NavLink></li>*/}
            </ul>
        </span>
    )
}


export default SignLinks