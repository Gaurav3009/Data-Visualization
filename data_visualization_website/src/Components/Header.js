import React from 'react'
import '../style/Header.scss';
import logo from './img/logo.png';

function Header() {
  return (
    <nav>
        {/* <section class="nav-left">
            <img src={logo} alt = "Logo"/>
        </section>
        <section class="nav-right">
            <section class="nav-right--links">
                <a href="#">Community</a>
                <a href="#">About</a>
                <a href="#">Contact us</a>
            </section>
            <section class="nav-right--btns">
                <button class="btn-login">Login</button>
                <button class="btn-sign-up">Sign up</button>
            </section>
            
        </section> */}
        <div className = "heading"><h1>DATA VISUALIZATION PROJECT</h1></div>
    </nav>
  )
}

export default Header