function ProductActions(props) {
    return (
        <div className='actions-container'>
            <h4 className='price-label'>Cost: &#x20B9;{props.cost}</h4>
            <button className='action-btn add-cart'>Add to cart</button>
        </div>
    );
}

export default ProductActions;