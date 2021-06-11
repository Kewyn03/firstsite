import React, {Component} from 'react'
import ReactDom from 'react-dom'

import {setSkins} from './actions/skins'
import {connect} from "react-redux";
import './store'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'


import './index.scss'
class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                {/*<Hero />*/}
                <Footer />
            </div>
        );
    }
}
export default App;

