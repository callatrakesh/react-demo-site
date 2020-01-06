import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Header extends Component {
  render(){
    return (
        <header className="header">
            <div className="fo">
           		<a className="h-logo" href="#">Site Logo</a>
	            <ul className="nav-bar">
	           	  	<li>
	           	  		<Link to="/" className="nav-link">Home</Link>
	           	  	</li>
	           	  	<li>
	           	  		<Link to="/about" className="nav-link">About Us</Link>
	           	  	</li>		
	            </ul>
            </div>
        </header>
    );
 }
}

export default Header;