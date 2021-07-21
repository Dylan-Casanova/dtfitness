import React, { Component } from 'react';

import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a> DTFitness</a>
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
