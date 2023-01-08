import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import ProductCard from '../../components/product_card/productcard';
import './products_page.css'

const data = [
    {"name": "Matta Palada Payasam Mix", "quantity": "250gms", "description": "Lorem Ipsum Dolores Sit Amet", "cost": "70"},
    {"name": "Multi Millet Payasam Mix", "quantity": "500gms", "description": "Lorem Ipsum Dolores Sit Amet", "cost": "79.09"},
    {"name": "Adapradhaman Payasam Mix", "quantity": "250gms", "description": "Lorem Ipsum Dolores Sit Amet", "cost": "77.27"},
    {"name": "Sadhya Palada Payasam Mix", "quantity": "500gms", "description": "Lorem Ipsum Dolores Sit Amet", "cost": "215"},
    {"name": "Rava Kesari Mix", "quantity": "200gms", "description": "Lorem Ipsum Dolores Sit Amet", "cost": "65"},
    {"name": "Aniruddh", "quantity": "random", "description": "random", "cost": "random"}
]

export default function ProductsPage() {
    return (
        <>
            <Navbar />
            <ProductGrid results={data}/>
            <Footer />
        </>
    );
}

function ProductGrid(props) {
    const products = [];
    props.results.forEach((product) => {
        products.push(<ProductCard itemId={product.name} cost={product.cost} quantity={product.quantity} desc={product.description} key={product.name}/>);
    });

    return(
        <div className='results-grid'>
            {products}
        </div>
    );
}