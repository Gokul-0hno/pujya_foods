import React from "react";

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
        
        let items = [];
        let key = 1;
        this.props.objects.forEach((element) => {
            items.push(<div className="carousel-item" key={key}>{element}</div>);
            ++key;
        });

        return(
            <section className="carousel-container" id="carousel-container">
                <button className="left-btn" id="left-btn" onClick={this.moveLeft}></button>
                {items}
                <button className="right-btn" id="right-btn" onClick={this.moveRight}></button>
            </section>
        );
    }
}

function ImageWrapper(props) {
    return(
        <img alt="" className='img-wrapper' src={props.src} />
    );
}

function ProductActions(props) {
    return (
        <div className='actions-container'>
            <h4 className='price-label'>Cost: &#x20B9;{props.cost}</h4>
            <button className='action-btn add-cart'>Add to cart</button>
        </div>
    );
}

function PopularBanner(props) {
    let products = [];
    props.list.forEach((product) => {
        products.push(<ProductCard itemId={product.name} cost={product.cost} quantity={product.quantity} desc={product.description} key={product.name}/>);
    });

    return(
        <div className="popular">
            <h1>Our most popular items</h1>
            <div className="popular-grid" id="popular-grid">
                {products} 
            </div>
        </div>
    );
}

class ProductCard extends React.Component {
    render() {
        return (
            <div className='product-card' id={this.props.itemId}>
                <img className='product-image' src='https://placehold.jp/300x150.png' alt={this.props.itemId}/>
            
                <div className='product-desc'>
                    <h3>{this.props.itemId}</h3>
                    <h4>Weight: {this.props.quantity}</h4>
                </div>

                <ProductActions cost={this.props.cost} />
            </div>
        );
    }
}

export {Navbar, Footer, Carousel, ImageWrapper, ProductActions, PopularBanner, ProductCard};
