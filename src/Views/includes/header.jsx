import React from 'react';
import { Link,BrowserRouter as Router } from 'react-router-dom';

export default
class Header extends React.Component{
    render(){
        return(
            <header id="header" className="fixed-top header-transparent">
                <div className="container">

                <div className="logo float-left">
                    <h1 className="text-light"><a href="index.html"><span>Moderna</span></a></h1>
                    <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"/></a>
                </div>

                <nav className="nav-menu float-right d-none d-lg-block">
                    
                    <ul>
                    <li className="active"><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/team">Team</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    {/* <li className="drop-down"><a href="">Drop Down</a>
                        <ul>
                        <li><a href="#">Drop Down 1</a></li>
                        <li className="drop-down"><a href="#">Drop Down 2</a>
                            <ul>
                            <li><a href="#">Deep Drop Down 1</a></li>
                            <li><a href="#">Deep Drop Down 2</a></li>
                            <li><a href="#">Deep Drop Down 3</a></li>
                            <li><a href="#">Deep Drop Down 4</a></li>
                            <li><a href="#">Deep Drop Down 5</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Drop Down 3</a></li>
                        <li><a href="#">Drop Down 4</a></li>
                        <li><a href="#">Drop Down 5</a></li>
                        </ul>
                    </li> */}
                    <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                    
                </nav>

                </div>
            </header>
        )
    }
}