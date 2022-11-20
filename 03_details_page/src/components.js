import React from "react";

function Navbar(props) {
    return(
        <nav className="navbar" id="navbar">
            <button className="nav-link nav-brand" href="#">PUJYA Foods</button>
            <button className="nav-btn" id="nav-btn"><i className="fa-solid fa-bars"></i></button>
            <div className="nav-items" id="nav-items">
                <a className="nav-link" href="#products">Products</a>
                <a className="nav-link" href="#about">About us</a>
                <a className="nav-link" href="#contact">Contact us</a>
            </div>
        </nav>
    );
}

function Footer(props) {
    return(
        <footer className="footer" id="footer">
        <div className="footer-form" id="footer-form"></div>
        <div className="soc-banner" id="follow">
            <i className="soc-ico fa-regular fa-envelope" id="nl-interested"></i>
            <i className="fa-regular fa-map soc-ico"></i>
            <i className="soc-ico fa-brands fa-twitter"></i>
            <i className="soc-ico fa-brands fa-instagram"></i>
            <i className="soc-ico fa-brands fa-facebook"></i>
            <i className="soc-ico fa-brands fa-youtube"></i>
        </div>
        <p className="footer-text">	&#169;2022 Pujya Foods</p>
    </footer>
    );
}

class Carousel extends React.Component {

    componentDidMount() {
        this.items = document.getElementsByClassName("carousel-item")
        this.items_len = this.items.length;

        this.curr_item = 0;
        this.last_item = this.items_len - 1;
        this.next_item = 1;
        this.items.item(this.last_item).classList.add("carousel-left");
        this.items.item(this.curr_item).classList.add("carousel-focus");
        this.items.item(this.next_item).classList.add("carousel-right");


    }

    moveLeft = () => {
        this.items.item(this.last_item).classList.remove("carousel-left")
        this.items.item(this.curr_item).classList.remove("carousel-focus");
        this.items.item(this.next_item).classList.remove("carousel-right");
        this.next_item = this.curr_item;
        this.curr_item = this.last_item;
        if (this.last_item === 0){
            this.last_item = this.items_len - 1;
        }
        else{
            this.last_item = this.last_item - 1;
        }
        this.items.item(this.last_item).classList.add("carousel-left")
        this.items.item(this.curr_item).classList.add("carousel-focus");
        this.items.item(this.next_item).classList.add("carousel-right");
    }

    moveRight = () => {
        this.items.item(this.last_item).classList.remove("carousel-left")
        this.items.item(this.curr_item).classList.remove("carousel-focus");
        this.items.item(this.next_item).classList.remove("carousel-right");
        this.last_item = this.curr_item;
        this.curr_item = this.next_item;
        if (this.next_item === this.items_len - 1) {
            this.next_item = 0;
        }
        else{
            this.next_item = this.next_item + 1;
        }
        this.items.item(this.last_item).classList.add("carousel-left")
        this.items.item(this.curr_item).classList.add("carousel-focus");
        this.items.item(this.next_item).classList.add("carousel-right");
    }

    render() {
    return(
        <section className="carousel-container" id="carousel-container">
            <button className="left-btn" id="left-btn" onClick={this.moveLeft}></button>
            <div className="carousel-item" id="item-1">
                <h1>Payasams</h1>
                <p>
                    Choose from our range of delectable payasam mixes that ensure authentic taste with a fraction of the effort.
                </p>
            </div>

            <div className="carousel-item" id="item-2">
                <h1>Masalas</h1>
                <p>
                    Perfect blend of spices in line with the traditional recipes help you make the same tasty food items every 
                    single time.
                </p>
            </div>

            <div className="carousel-item" id="item-3">
                <h1>Savouries</h1>
                <p>
                    Choose from a range of famous tea time snacks to add flair to your evenings.
                </p>
            </div>

            <div className="carousel-item" id="item-4">
                <h1>Ready-to-cook</h1>
                <p>Crave idli but feel the method is cumbersome? We have you covered with our batter mixes.</p>
            </div>

            <div className="carousel-item" id="item-5">
                <h1>Edible oils</h1>
                <p>
                    Choose from our range of edible oils manufactured with the highest safety standards in mind.
                </p>
            </div>

            <button className="right-btn" id="right-btn" onClick={this.moveRight}></button>
        </section>
    );
    }
}

export {Navbar, Footer, Carousel};
