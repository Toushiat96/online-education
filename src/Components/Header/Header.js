import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'



const Header = () => {
    return (
    <div className="container">
       <div className ="img">
       <img src={logo} alt="" />
       </div>
       <div>
      
      
       <nav className="navbar navbar-expand-lg navbar-light bg-primary item">
  <a className="navbar-brand" href="/">Home</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/">Dashboard <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Course List</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">E-Book</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="/">Login</a>
      </li>
     
    </ul>
    
  </div>
</nav>
      
      
            
    </div>
    </div>
    );
};

export default Header;