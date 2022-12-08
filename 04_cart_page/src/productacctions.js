import { ActionButton } from "./misc";

function ProductActions(props) {
    return (
        <div className='actions-container'>
            <h4 className='price-label'>Cost: &#x20B9;{props.cost}</h4>
            <ActionButton className="add-cart" id="add-cart">
                Add to cart
            </ActionButton>
        </div>
    );
}

export default ProductActions;