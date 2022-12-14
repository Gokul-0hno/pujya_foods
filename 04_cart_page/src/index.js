import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './footer.js';
import Navbar from './navbar';
import './cart.css';
import PopularBanner from './popularbanner'
import CartPane from './cart';


const products = [
    {"name": "Matta Palada Payasam Mix", "quantity": "250gms", "description": "Lorem Ipsum Dolores Sit Amet", "cost": "70"},
    {"name": "Multi Millet Payasam Mix", "quantity": "500gms", "description": "Lorem Ipsum Dolores Sit Amet", "cost": "79.09"},
    {"name": "Adapradhaman Payasam Mix", "quantity": "250gms", "description": "Lorem Ipsum Dolores Sit Amet", "cost": "77.27"},
    {"name": "Sadhya Palada Payasam Mix", "quantity": "500gms", "description": "Lorem Ipsum Dolores Sit Amet", "cost": "215"},
    {"name": "Rava Kesari Mix", "quantity": "200gms", "description": "Lorem Ipsum Dolores Sit Amet", "cost": "65"},
    {"name": "Rice Ada Big", "quantity": "500gms", "description": "Lorem Ipsum Dolores Sit Amet", "cost": "150"},
    {"name": "Suraj Vermicelli Payasam Mix", "quantity": "250gms", "description": "Lorem Ipsum Dolores Sit Amet", "cost": "75"},
]

const cartItems = [
    {"name": "Matta Palada Payasam Mix", "weight": "250gms", "cost": "70", "src": "https://via.placeholder.com/100", "catNo": "5"},
    {"name": "Multi Millet Payasam Mix", "weight": "500gms", "cost": "79.09", "src": "https://via.placeholder.com/100", "catNo": "6"},
    {"name": "Adapradhaman Payasam Mix", "weight": "250gms", "cost": "77.27", "src": "https://via.placeholder.com/100", "catNo": "10"},
];

function App(props) {
    return (
        <>
            <Navbar />
            <section className='content-area'>
                <CartPane cartItems={cartItems}/>
                <PopularBanner list={products}/>
            </section>
            <Footer />
        </>
    );    
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)