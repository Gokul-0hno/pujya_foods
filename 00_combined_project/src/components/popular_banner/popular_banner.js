import ProductCard from "../product_card/productcard";
import {SectionTitle} from "../misc/misc";
import './popular_banner.css';

function PopularBanner(props) {
    let products = [];
    props.list.forEach((product) => {
        products.push(<ProductCard itemId={product.name} cost={product.cost} quantity={product.quantity} desc={product.description} key={product.name}/>);
    });

    return(
        <section className="popular">
            <SectionTitle> Our most popular products </SectionTitle>
            <div className="popular-grid" id="popular-grid">
                {products} 
            </div>
        </section>
    );
}

export default PopularBanner