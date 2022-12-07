function CartPane(props) {
    let items = [];
    props.cartItems.forEach((item) => {
        items.push(<CartCapsule name={item.name} cost={item.cost} pictureSrc={item.src} weight={item.weight} key={item.catNo} itemNo={item.catNo} />)
    });
    return(
        <div className="cart-pane" id="cart-pane">
            <h1 className="cart-title">Items in your cart:</h1>
            {items}
        </div>
    );
}

function CartCapsule(props) {
    return(
        <div className="cart-item" id= {`cart-item-${props.itemNo}`} >
            <img src={props.pictureSrc} alt={`cart item ${props.name}`} className="cart-item-picture" />
            <h3 className="cart-item-title">Item name: {props.name}</h3>
            <p className="cart-item-weight">Weight: {props.weight}</p>
            <p className="cart-item-cost">Cost: &#x20B9;{props.cost}</p>
            <p className="cart-item-quantity">Quantity: 1</p>
        </div>
    );
}

export default CartPane;