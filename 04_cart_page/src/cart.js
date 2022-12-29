import { ActionButton, ProductTitle, QuantityDrop, SectionTitle, TextContent } from "./misc";

function CartPane(props) {
    let items = [];
    props.cartItems.forEach((item) => {
        items.push(<CartCapsule name={item.name} cost={item.cost} pictureSrc={item.src} weight={item.weight} key={item.catNo} itemNo={item.catNo} />)
    });
    return(
        <div className="cart-pane" id="cart-pane">
            <div className="cart-items">
                <SectionTitle id="cart-items">
                    Items in your cart
                </SectionTitle>
                <div className="cart-items-wrapper" id="cart-items-wrapper">
                    {items}
                </div>
            </div>
            <div className="cart-summary">
                <CartSummary />
            </div>
        </div>
    );
}

function CartSummary(props) {
    return(
        <section className="cart-summary" id="cart-summary">
            <SectionTitle id="cart-summary">Your cart summary:</SectionTitle>
            <div className="summary-wrapper" id="summary-wrapper">
                <TextContent id="total-txt" className="col-1">Total Amount:</TextContent>
                <TextContent id="total-amt" className="col-2">total amount</TextContent>
                <TextContent id="disc-txt" className="col-1">Discount:</TextContent>
                <TextContent id="disc-amt" className="col-2">discount</TextContent>
                <TextContent id="grand-txt" className="col-1">Grand Total:</TextContent>
                <TextContent id="grand-amt" className="col-2">grand total</TextContent>
                <ActionButton id="to-payment">Proceed to payment</ActionButton>
                <ActionButton id="continue-shop">Continue shopping</ActionButton>
            </div>
        </section>
    );
}

function CartCapsule(props) {
    return(
        <div className="cart-item" id= {`cart-item-${props.itemNo}`} >
            <img src={props.pictureSrc} alt={`cart item ${props.name}`} className="cart-item-picture" />
            <ProductTitle className="cart-item-title" id={props.name}>Item name: {props.name}</ProductTitle>
            <ActionButton id="cart-delete">Remove from Cart</ActionButton>
            <p className="cart-item-weight">Weight: {props.weight}</p>
            <p className="cart-item-cost">Cost: &#x20B9;{props.cost}</p>
            <QuantityDrop className="cart-item-quantity"/>
        </div>
    );
}

export default CartPane;