import ProductCard from "./productcard";
import { SectionTitle } from "./misc";

function PopularBanner(props) {
    let products = [];
    props.list.forEach((product) => {
        products.push(<ProductCard itemId={product.name} cost={product.cost} quantity={product.quantity} desc={product.description} key={product.name}/>);
    });

    return(
        <section className="popular">
            <SectionTitle id="popular-products">
                Our most popular products
            </SectionTitle>
            <div className="popular-grid" id="popular-grid">
                {products} 
            </div>
        </section>
    );
}

export default PopularBanner