import React from 'react'
import ReactDOM from 'react-dom/client'
import { Footer } from './components';
import './index.css'

function ProductPage() {
    return (
        <>
            <SearchBar />
            <Results />
            
        </>
    );
}


function SearchBar() {
    return (
        <div className='search-wrapper'>
            <input className='search-bar' placeholder='Search'></input>
            <Sorter />
        </div>
    );
}

function Results() {
    return (
        <>
            <ResultBanner resultText="Sweets" />
            <ResultsGrid />
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

function ResultsGrid() {
    return (
        <div className='results-grid'>
            <ProductCard itemId='Adapradhaman - 250gms' cost='900'/>
            <ProductCard itemId='Palada - 500gms' cost='900'/>
            <ProductCard itemId='Payasam' cost='900'/>
            <ProductCard itemId='Payasam' cost='900'/>
            <ProductCard itemId='Payasam' cost='900'/>
            <ProductCard itemId='Payasam' cost='900'/>
            <ProductCard itemId='Payasam' cost='900'/>
            <ProductCard itemId='Payasam' cost='900'/>
            <ProductCard itemId='Payasam' cost='900'/>
        </div>
    );
}

class ProductCard extends React.Component {
    render() {
        return (
            <div className='product-card'>
                <img className='product-image' src='https://placehold.jp/300x150.png' alt={this.props.itemId}/>
            
                <div className='product-desc'>
                    <h3>{this.props.itemId}</h3>
                    <p>lorem ipsum dolores sit amet</p>
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
root.render(<ProductPage />)

const form = ReactDOM.createRoot(document.getElementById('footer-form'));
form.render(<Footer />);