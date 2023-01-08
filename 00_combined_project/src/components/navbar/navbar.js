import React from "react";
import './navbar.css';

class Navbar extends React.Component {

    componentDidMount() {
        this.menu = document.getElementById("nav-items")
        this.isDisplayed = false;
        this.btn = document.getElementById("nav-btn");
        this.btn.addEventListener("focusout", this.handleFocusOut);
    }

    handleFocusOut = () =>{
        this.menu.classList.remove('show');
        this.menu.classList.add('hide');
        this.isHidden = true;
    }

    handleClick = () => {
        if(!this.isDisplayed) {
            this.menu.classList.add("show");
            this.menu.classList.remove("hide");
            this.isDisplayed = true;
        }
        else {
            this.menu.classList.add("hide");
            this.menu.classList.remove("show");
            this.isDisplayed = false;
        }
    }

    render() {
        return(
            <nav className="navbar" id="navbar">
                <button className="nav-link nav-brand" href="#">PUJYA Foods</button>
                <button className="nav-btn" id="nav-btn" onClick={this.handleClick}><i className="fa-solid fa-bars"></i></button>
                <div className="nav-items" id="nav-items">
                    <a className="nav-link" href="#products">Products</a>
                    <a className="nav-link" href="#about">About us</a>
                    <a className="nav-link" href="#contact">Contact us</a>
                </div>
            </nav>
        );
    }
}

export default Navbar