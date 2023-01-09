import React from "react";
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import BlogWrapper from "../../components/blog_container/blog";
import Carousel from "../../components/carousel/carousel";
import PopularBanner from "../../components/popular_banner/popular_banner"
import './home.css';

const data = [
    {"name": "Matta Palada Payasam Mix", "quantity": "250gms", "description": "Lorem Ipsum Dolores Sit Amet", "cost": "70"},
    {"name": "Multi Millet Payasam Mix", "quantity": "500gms", "description": "Lorem Ipsum Dolores Sit Amet", "cost": "79.09"},
    {"name": "Adapradhaman Payasam Mix", "quantity": "250gms", "description": "Lorem Ipsum Dolores Sit Amet", "cost": "77.27"},
    {"name": "Sadhya Palada Payasam Mix", "quantity": "500gms", "description": "Lorem Ipsum Dolores Sit Amet", "cost": "215"},
    {"name": "Rava Kesari Mix", "quantity": "200gms", "description": "Lorem Ipsum Dolores Sit Amet", "cost": "65"},
    {"name": "Rice Ada Big", "quantity": "500gms", "description": "Lorem Ipsum Dolores Sit Amet", "cost": "150"},
    {"name": "Suraj Vermicelli Payasam Mix", "quantity": "250gms", "description": "Lorem Ipsum Dolores Sit Amet", "cost": "75"},
]

export default function HomePage() {
    return(
        <>
            <Navbar />
            <Intro />
            <Carousel objects={carouselItems}/>
            <PopularBanner list={data}/>
            <BlogWrapper />
            <Footer />
        </>
    );
}

function Intro() {
    return (
        <section className="intro" id="intro">
            <div className="intro-img-wrapper" id="intro-img-wrapper">
                <div className="intro-text-wrapper" id="intro-text-wrapper">
                    <h1 className="intro-text" id="intro-text">EXPERIENCE THE TASTE OF SOUTH INDIA</h1>
                </div>
                <a className="intro-btn" style={{backgroundColor: "transparent"}} href="/products"><button className="intro-btn" id="intro-btn" >VIEW ALL PRODUCTS</button></a>
            </div>        
        </section>
    );
}

const item1 = <><h1>Savouries</h1><p>Choose from a range of famous tea time snacks to add flair to your evenings.</p></>;
const item2 = <><h1>Ready-to-cook</h1><p>Crave idli but feel the method is cumbersome? We have you covered with our batter mixes.</p></>;
const item3 = <><h1>Payasams</h1><p>Choose from our range of delectable payasam mixes that ensure authentic taste with a fraction of the effort.</p></>;
const item4 = <><h1>Edible oils</h1><p>Choose from our range of edible oils manufactured with the highest safety standards in mind.</p></>;

const carouselItems = [item1, item2, item3, item4];