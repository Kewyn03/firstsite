import React from "react";

import HeaderIcon from '../header/HeaderIcon.ico'
import { Link } from 'react-router-dom'
import '../../styles/payments.scss'
import '../../styles.scss'

export default function Footer() {


    return (
        <>
            <span className="footer">
                <div className="container-fluid">
                    <div className="footer-middle">
                        <div className="footer-column width25">
                            <h3 className="footer-title">О сайте</h3>
                            <ul className="footer-list clear">

                                <li className="footer-item list-reset">
                                    <Link className='footer-link' to='/here'>Тут</Link></li>
                                <li className="footer-item list-reset">
                                    <Link className='footer-link' to='/about'>О нас</Link></li>
                                <li className="footer-item list-reset">
                                    <Link className='footer-link' to='/something'>Что-нибудь еще</Link></li>
                            </ul>
                        </div>
                        <div className="footer-column width25">
                            <h3 className="footer-title">Помощь</h3>
                            <ul className="footer-list clear">
                                <li className="footer-item list-reset">
                                    <Link className='footer-link' to='/support'>Техническая поддержка</Link></li>
                                <li className="footer-item list-reset">
                                    <Link className='footer-link' to='/rules'>Правила пользования</Link></li>
                            </ul>
                        </div>
                        <div className="footer-column width25">
                            <h3 className="footer-title">О сайте</h3>
                            <ul className="footer-list clear">
                                <li className="footer-item list-reset">
                                    <Link className='footer-link' to='/contacts'>Контакты</Link></li>
                                <li className="footer-item list-reset">
                                    <Link className='footer-link' to='/about'>О нас</Link></li>
                                <li className="footer-item list-reset">
                                    <Link className='footer-link' to='/something'>Что-нибудь еще</Link></li>

                            </ul>
                        </div>
                        <div className="payments-icons width25">
                            <b className="footer-title">Мы принимаем</b>
                            <div className="payments footer-payments">
                                <div className="footer-paytype icon_qiwi"/>
                                <div className="footer-paytype icon_visa"/>
                                <div className="footer-paytype icon_mastercard"/>
                                <div className="footer-paytype icon_alfabank"/>
                                <div className="footer-paytype icon_skinpay"/>
                                <div className="footer-paytype icon_bitcoin"/>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        {/*<ul className="social">*/}
                        {/*    <li className="footer-social-items">*/}
                        {/*        /!*<img className="footer-icons-styles" src="vkIcon.svg" />*!/*/}
                        {/*        <a href="https://www.instagram.com/kewyn1488/"*/}
                        {/*           className="footer-social-links footer-social-link-inst" target="_blank"*/}
                        {/*           aria-label="Link to instagram"></a>*/}
                        {/*    </li>*/}
                        {/*    <li className="footer-social-items">*/}
                        {/*        /!*<img className="footer-icons-styles" src="vkIcon.svg" />*!/*/}
                        {/*        <a href="https://vk.com/kewyn" className="footer-social-links footer-social-link-vk"*/}
                        {/*           target="_blank" aria-label="Link to vk"></a>*/}
                        {/*    </li>*/}
                        {/*    <li className="footer-social-items">*/}
                        {/*        /!*<img className="footer-icons-styles" src="vkIcon.svg" />*!/*/}
                        {/*        <a href="https://mail.yandex.by/#inbox"*/}
                        {/*           className="footer-social-links footer-social-link-mail" target="_blank"*/}
                        {/*           aria-label="Link to mail"></a>*/}
                        {/*    </li>*/}
                        {/*    <li className="footer-social-items">*/}
                        {/*        /!*<img className="footer-icons-styles" src="vkIcon.svg" />*!/*/}
                        {/*        <a href="#" className="footer-social-links footer-social-link-..." target="_blank"*/}
                        {/*           aria-label="Link to ..."></a>*/}
                        {/*    </li>*/}
                        {/*</ul>*/}
                        <Link to="/" className="logoFooter">
                            <img src={HeaderIcon} alt="Site Logo"/>
                        </Link>
                        <small className="copyright">&copy;&nbsp;2021@KewynMarket. All Rights Reserved.</small>
                    </div>

                </div>

            </span>

    </>
    )


}
