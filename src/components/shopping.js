import React, { Component } from 'react';
import '../styles/shopping.css';
import Icon2 from '../images/cooky-icon-2.png'


class Shopping extends Component {

    render() {
        return (
        <>
          <section id="shopping">
            <div id="shopping-pa">
                <h3>Shop OR Served Deserts </h3>
                <p>You Can Choose Your Deserts</p>
                <a href="pages/shop.html">Shop Deserts</a>
            </div>
            <div id="shopping-img">

            </div>

        </section>
        <img id="icon-2" src={Icon2} alt="cookies"></img>
        </>
        );
    }
}

export default Shopping;