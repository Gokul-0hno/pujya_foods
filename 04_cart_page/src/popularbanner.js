import ProductCard from "./productcard";

function PopularBanner(props) {
    let products = [];
    props.list.forEach((product) => {
        products.push(<ProductCard itemId={product.name} cost={product.cost} quantity={product.quantity} desc={product.description} key={product.name}/>);
    });

    return(
        <section className="popular">
            <h1 className="popular-head">Our most popular items</h1>
            <div className="popular-grid" id="popular-grid">
                {products} 
            </div>
        </section>
    );
}

export default PopularBanner