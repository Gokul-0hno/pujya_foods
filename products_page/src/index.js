import React from 'react'
import ReactDOM from 'react-dom/client'
import { Footer } from './components';
import './react.css'

const data = [
    {"name": "Matta Palada Payasam Mix", "quantity": "250gms", "description": "Lorem Ipsum Dolores Sit Amet", "cost": "70"},
    {"name": "Multi Millet Payasam Mix", "quantity": "500gms", "description": "Lorem Ipsum Dolores Sit Amet", "cost": "79.09"},
    {"name": "Adapradhaman Payasam Mix", "quantity": "250gms", "description": "Lorem Ipsum Dolores Sit Amet", "cost": "77.27"},
    {"name": "Sadhya Palada Payasam Mix", "quantity": "500gms", "description": "Lorem Ipsum Dolores Sit Amet", "cost": "215"},
    {"name": "Rava Kesari Mix", "quantity": "200gms", "description": "Lorem Ipsum Dolores Sit Amet", "cost": "65"},
    {"name": "Aniruddh", "quantity": "random", "description": "random", "cost": "random"}
]


class ProductPage extends React.Component{
    render() {
        return (
            <>
                <SearchBar />
                <Results results={this.props.data}/>

            </>
        );
    }
}


function SearchBar() {
    return (
        <div className='search-wrapper'>
            <input className='search-bar' placeholder='Search'></input>
            <Sorter />
        </div>
    );
}

function Results(props) {
    return (
        <>
            <ResultBanner resultText="Sweets" />
            <ResultsGrid list={props.results}/>
        </>
    );
}

function Sorter() {
    return (
        <label className='sort-select'>Sort by:
            <select className='drop-down'>
                <option>Most popular</option>
                <option>Price - High to Low</option>
                <option>Price - Low to High</option>
            </select>
        </label>
    );
}

function ResultBanner(props) {
    return (
        <div className='result-banner'><h1>{props.resultText}</h1></div>
    );

}

class ResultsGrid extends React.Component {
    render() {
        let products = [];
        this.props.list.forEach((product) => {
            products.push(<ProductCard itemId={product.name} cost={product.cost} quantity={product.quantity} desc={product.description} key={product.name}/>);
        });
        return(
        <div className='results-grid'>
           {products} 
        </div>
        );
    }
}

class ProductCard extends React.Component {
    render() {
        return (
            <div className='product-card' id={this.props.itemId}>
                <img className='product-image' src='https://placehold.jp/300x150.png' alt={this.props.itemId}/>
            
                <div className='product-desc'>
                    <h3>{this.props.itemId}</h3>
                    <p>{this.props.desc}</p>
                    <h4>Weight: {this.props.quantity}</h4>
                </div>

                <ProductActions cost={this.props.cost} />
            </div>
        );
    }
}

function ProductActions(props) {
    return (
        <div className='actions-container'>
            <h4 className='price-label'>Cost: &#x20B9;{props.cost}</h4>
            <button className='action-btn'>Add to cart</button>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ProductPage data={data}/>)

const form = ReactDOM.createRoot(document.getElementById('footer-form'));
form.render(<Footer />);