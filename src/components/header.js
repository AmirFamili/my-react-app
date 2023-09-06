import React, { Component } from 'react';
import '../styles/header.css';
import Sweet from '../images/sweet.png'

class Header extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <header>
            <div id="menu">
            <img src={Sweet} alt="sweet" />
            <nav id="nav">
                <div id="menu-left">
                    <a href="index.html" id="menu__left-a">Home</a>
                    <a href="pages/shop.html" id="menu__left-a">Shop</a>
                    <a href="#about" id="menu__left-a">About Us</a>
                </div>

                <a href="pages/registration.html" id="menu__right-a">Sing Up / Log In</a>

            </nav>
        </div>
        <section id="home" class="landing">
            <div class="home-wrap">
                <div class="home-inner">
                    <div id="dark"></div>
                </div>
            </div>
        </section>
        <section id="sec-title">
            <h1 id="title">Welcome to Sweet Cake</h1>
            <p>It's one of the best cooking cake in the world </p>
        </section>
    </header>
            </>
        );
    }
}
 
export default Header;