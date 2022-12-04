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
            <div className="carousel-container" id="carousel-container">
                <button className="left-btn" id="left-btn" onClick={this.moveLeft} title="Navigate left"></button>
                {items}
                <button className="right-btn" id="right-btn" onClick={this.moveRight} title="Navigate right"></button>
            </div>
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
        <section className="popular">
            <h1>Our most popular items</h1>
            <div className="popular-grid" id="popular-grid">
                {products} 
            </div>
        </section>
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

class ReviewPane extends React.Component {
    componentDidMount() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry);
                if (entry.isIntersecting){
                    entry.target.classList.add('review-show');
                }
            });
        });

        const hidden_elements = document.querySelectorAll('.review-hide');
        hidden_elements.forEach((el) => observer.observe(el));
        
        //Code to get reviews from the server for the particular product.
    }

    

    render() {
        this.reviews = [];
        for (let i = 0; i < 5; ++i) {
            this.reviews.push(
                <ReviewCapsule id={i} key={i}/>
            );
        }

        return(
            <section className="review-wrapper" id="review-wrapper">
                <h1 className="review-title">What our customers have to say:</h1>
                <div className="review-list" id="review-list">
                    {this.reviews}
                </div>
                
                <ReviewForm />
            </section>
        );
    }

}

class ReviewForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            order: "",
            rating: "",
            comment: ""
        };
    }

    handleSubmit = (event) => {
        alert(
            "Your rating summary:\n" + 
            `Order Number: ${this.state.order} \n` + 
            `Your rating: ${this.state.rating} \n` +
            `Your Comment: ${this.state.comment}`
        );

        this.setState({
            order: "",
            rating: "",
            comment: ""
        });
        event.preventDefault();
    }

    handleClick = (event) => {
        this.modal.style.display = "grid";
        
        if(this.formIsVisible) {
            this.form.classList.remove("review-form-show");
            this.formIsVisible = false;
            event.target.innerHTML = "Write a review";
        } else {
            this.form.classList.add("review-form-show");
            this.formIsVisible = true;
            event.target.innerHTML = "Close the form";
        }
        event.preventDefault();
    }

    componentDidMount() {
        this.form = document.getElementById("review-form");
        this.modal = document.getElementById("review-form-modal");
        this.formIsVisible = false;
    }

    handleOrderSearch = (event) => {
        event.preventDefault();
    }

    handleInputChange = (event) => {
        if(event.target.id === "review-order") {
            this.setState({order: event.target.value});
        } else if(event.target.id === "review-rating") {
            this.setState({rating: event.target.value});
        } else if(event.target.id === "review-comment") {
            this.setState({comment: event.target.value});
        }
    }

    handleClose = () => {
        this.form.classList.remove("review-form-show");
        this.formIsVisible = false;
        this.modal.style.display = "none";
        document.getElementById("review-create-new").innerHTML="Write a review"
    }

    render() {
        return(
            <>
                <div className="review-summary" id="review-summary">
                        <a className="review-create-new action-btn-gen" id="review-create-new" href="#review-form"onClick={this.handleClick}>Write a review</a>
                </div>
                <div className="review-form-modal" id="review-form-modal">
                    <form className="review-form" id="review-form" onSubmit={this.handleSubmit}>
                        <h3 className="review-form-title">Submit a review</h3>
                        <button className="review-close-btn" onClick={this.handleClose}>&#10006;</button>
                        <label className="review-label review-form-item" id="review-order-label" htmlFor="review-order">Enter your order number:</label>
                        <input required className="review-form-input review-order review-form-item" id="review-order" value={this.state.order} onChange={this.handleInputChange}/>
                        <button className="action-btn-gen review-order-search review-form-item" id="review-order-search" onClick={this.handleOrderSearch}>Enter</button>
                        <label required className="review-form-item">Rate your products:</label>
                        <input className="review-form-item" id="review-rating" value={this.state.rating} onChange={this.handleInputChange}/>
                        <label className="review-form-item" >Comments:</label>
                        <input className="review-form-item" id="review-comment" value={this.state.comment} onChange={this.handleInputChange}/>
                        <input className='review-form-item action-btn-gen' type='submit' value='Submit Review' />
                    </form>
                </div>  
            </>
        );
    }
}

function ReviewCapsule(props) {
    return(
        <div className="review-capsule review-hide" id={`review-capsule-${props.id}`} key={props.id}>
                    <img className="reviewer-avatar" src='https://via.placeholder.com/100' alt={`review by person number ${props.id}`}/> 
                    <p className="review-title" id={`review-title-${props.id}`}>Lorem Ipsum Dolor Sit Amet</p>
                    <div className="review-stars" id={`review-stars-${props.id}`}>⭐⭐⭐⭐⭐</div>
                    <div className="review-desc" id={`review-desc-${props.id}`}>Lorem Ipsum Dolor Sit amet</div>
        </div>
    );
}

export {Navbar, Footer, Carousel, ImageWrapper, ProductActions, PopularBanner, ProductCard, ReviewPane};
