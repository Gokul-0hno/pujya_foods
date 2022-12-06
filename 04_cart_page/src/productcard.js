import React from "react";
import ProductActions from "./productacctions";
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

export default ProductCard