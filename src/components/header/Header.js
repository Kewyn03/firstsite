import React,{Component} from "react";

import ChangeTheme from "../ChangeTheme";
import HeaderIcon from '../../img/HeaderIcon.ico'

export default class Header extends Component {


    render() {
        return (
            <component id="Header">
                <header className="header">
                    <div className="container-fluid">

                        <nav className="navbar navbar-expand-sm ">
                            <ul className="navbar-nav">
                                <a href="" className="logoHeader">
                                    <img src={HeaderIcon} alt="Site Logo"/>
                                </a>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Каталог</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Как это работает</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Техподдержка</a>
                                </li>

                            </ul>

                        </nav>
                        <div className="change-theme">
                            <ChangeTheme />
                        </div>
                    </div>
                </header>

            </component>
        )

    }

}

