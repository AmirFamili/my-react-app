import React, { Component } from 'react';
import '../styles/chef.css';
import Chef1 from '../images/chef/1.jpg';
import Chef2 from '../images/chef/2.jpeg';
import Chef3 from '../images/chef/3.jpeg';
import Chef4 from '../images/chef/4.jpeg';



class Chef extends Component {
    
    render() { 
        return (
        <>
         <h2 id="title-bakers">Best Bakers</h2>

<section id="chefs">
    <div class="two-chefs">
        <div class="chef">
        <img src={Chef1} alt="chef" class="chef-img"/> 
            <h3 class="chef-name">James Harper</h3>
            <p class="chef-about">James is the best chef for baking wedding cake , cup cake and dessert.</p>
            <div class="icons">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-twitter"></i>
            </div>

        </div>
        <div class="chef">
        <img src={Chef2} alt="chef" class="chef-img"/> 
            <h3 class="chef-name">
                Benjamin Aaron</h3>
            <p class="chef-about">Sophia is best chef for baking cup cake and chocolate.</p>
            <div class="icons">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-twitter"></i>
            </div>
        </div>
    </div>

    <div class="two-chefs">
        <div class="chef">
            <img src={Chef3} alt="chef" class="chef-img"/> 
            <h3 class="chef-name"> Sophia Alexander</h3>
            <p class="chef-about">Benjamin is the best chef for baking wedding cake and rollet.</p>
            <div class="icons">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-twitter"></i>
            </div>
        </div>
        <div class="chef">
            <img src={Chef4} alt="chef" class="chef-img"/> 
            <h3 class="chef-name">Lucas Cameron</h3>
            <p class="chef-about">Sophia is the best chef for baking cup cake and wedding cake.</p>
            <div class="icons">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-twitter"></i>
            </div>
        </div>
    </div>

</section>

        </>
        );
    }
}
 
export default Chef;