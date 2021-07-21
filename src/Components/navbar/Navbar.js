import React, { Component } from 'react';
import logo from '../../assets/images/logo.png'
import background from '../../assets/images/background.png'

import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <img src={logo} alt='logo' className='d-inline-block align-top' width='90' height='90' />
                <div>
            
                    <ul className="navbar-nav">
                        <li className="nav-item" >Home</li>
                        <li>Signup</li>
                        <li>Login</li>
                    </ul>
                </div>

                
                
            </div>
  
  
</nav>
      
      
    );
  }
}

export default Navbar;
