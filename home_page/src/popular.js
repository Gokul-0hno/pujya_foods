const data = [
    {"name": "Matta Palada Payasam Mix", "quantity": "250gms", "description": "Lorem Ipsum Dolores Sit Amet", "cost": "70"},
    {"name": "Multi Millet Payasam Mix", "quantity": "500gms", "description": "Lorem Ipsum Dolores Sit Amet", "cost": "79.09"},
    {"name": "Adapradhaman Payasam Mix", "quantity": "250gms", "description": "Lorem Ipsum Dolores Sit Amet", "cost": "77.27"},
    {"name": "Sadhya Palada Payasam Mix", "quantity": "500gms", "description": "Lorem Ipsum Dolores Sit Amet", "cost": "215"},
    {"name": "Rava Kesari Mix", "quantity": "200gms", "description": "Lorem Ipsum Dolores Sit Amet", "cost": "65"},
    {"name": "Rice Ada Big", "quantity": "500gms", "description": "Lorem Ipsum Dolores Sit Amet", "cost": "150"},
    {"name": "Suraj Vermicelli Payasam Mix", "quantity": "250gms", "description": "Lorem Ipsum Dolores Sit Amet", "cost": "75"},
]


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

function ProductActions(props) {
    return (
        <div className='actions-container'>
            <h4 className='price-label'>Cost: &#x20B9;{props.cost}</h4>
            <button className='action-btn'>Add to cart</button>
        </div>
    );
}

function PopularBanner(props) {
    let products = [];
    props.list.forEach((product) => {
        products.push(<ProductCard itemId={product.name} cost={product.cost} quantity={product.quantity} desc={product.description} key={product.name}/>);
    });

    return(
        <>
            <h1>Our most popular items</h1>
            <div className="popular-grid" id="popular-grid">
                {products} 
            </div>
        </>
    );
}

const popular = ReactDOM.createRoot(document.getElementById("popular"));
popular.render(<PopularBanner list = {data}/>)