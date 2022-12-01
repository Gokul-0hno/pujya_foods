import React from "react";
import ReactDOM from "react-dom/client";
import "./react.css";
import {Navbar, Footer, Carousel, ImageWrapper, PopularBanner, ReviewPane} from './components.js'

const images = [{src: "https://via.placeholder.com/900"}, 
                {src: "https://via.placeholder.com/900"},
                {src: "https://via.placeholder.com/900"},
                {src: "https://via.placeholder.com/900"},
                {src: "https://via.placeholder.com/900"},
                {src: "https://via.placeholder.com/900"},
                {src: "https://via.placeholder.com/900"},
                {src: "https://via.placeholder.com/900"}];

const details = {title: "Ada Pradhaman Mix", cost: 87, description: "We present before you ADA PRADHAMAN Mix from PUJYA foods. " + 
"Ada Pradhaman, an absolute classic dessert from Kerala, popular especially during the festival of Onam. " + 
"Ada Pradhaman is a variation of ada payasam, made with rice Ada, palm jaggery, coconut milk, cashew nuts and raisins too. " + 
"A quick, easy and delicious Kerala traditional dessert to relish during the festive season and Onam sadhya is incomplete without this rich and delicious ada pradhaman. " + 
"Available in 250gms packing."};

let toRender = [];

images.forEach((image) => {
    toRender.push(<ImageWrapper src={image.src} />);
});

const data = [
    {"name": "Matta Palada Payasam Mix", "quantity": "250gms", "description": "Lorem Ipsum Dolores Sit Amet", "cost": "70"},
    {"name": "Multi Millet Payasam Mix", "quantity": "500gms", "description": "Lorem Ipsum Dolores Sit Amet", "cost": "79.09"},
    {"name": "Adapradhaman Payasam Mix", "quantity": "250gms", "description": "Lorem Ipsum Dolores Sit Amet", "cost": "77.27"},
    {"name": "Sadhya Palada Payasam Mix", "quantity": "500gms", "description": "Lorem Ipsum Dolores Sit Amet", "cost": "215"},
    {"name": "Rava Kesari Mix", "quantity": "200gms", "description": "Lorem Ipsum Dolores Sit Amet", "cost": "65"},
    {"name": "Rice Ada Big", "quantity": "500gms", "description": "Lorem Ipsum Dolores Sit Amet", "cost": "150"},
    {"name": "Suraj Vermicelli Payasam Mix", "quantity": "250gms", "description": "Lorem Ipsum Dolores Sit Amet", "cost": "75"},
]

class App extends React.Component {
    render() {
        return(
            <>
                <Navbar />
                <main className="content-area" id="content-area">
                    <Carousel objects={toRender} />                        
                    <DetailsPane data={this.props.data}/>
                </main>
                <ReviewPane />
                <PopularBanner list={data}/>               
                <Footer />
            </>
        );
    }
}

class DetailsPane extends React.Component {
    render() {
        return(
            <div className="details-pane" id="details-pane">
                <p className="dp-title">{this.props.data.title}</p>
                <p className="dp-desc">{this.props.data.description}</p>
                <DetailsActions cost={this.props.data.cost} />
            </div>
        );
    }
}

function DetailsActions(props) {
    return(
        <div className="dp-actions-container" id="dp-actions-container">
            <h4 className="dp-price-label" id="dp-price-label">Cost: &#x20B9;{props.cost}</h4>
            <button className="dp-action-btn buy-now">Buy Now</button>
            <button className="dp-action-btn add-cart">Add to cart</button>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App data={details}/>)