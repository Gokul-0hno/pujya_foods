import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import {ActionButton} from '../../components/misc/misc';

import React from 'react';

import './checkout_page.css';

export default function CheckoutPage() {
    return(
        <>
            <Navbar />
            <CheckoutForm />
            <Footer />
        </>
    );
}

class CheckoutForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleSubmit = (event) => {
        alert("You have successfully given me money for product")
        event.preventDefault();
    }

    handleChange = (event) => {
        let state = {};
        let key = event.target.name.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
            if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
            return index === 0 ? match.toLowerCase() : match.toUpperCase();
        });    
        state[key] = event.target.value;
        this.setState(state);
        event.preventDefault();
    }

    render() {
        return(
            <form className='checkout-form' onSubmit={this.handleSubmit}>
                <InputField for="First Name" onChange={this.handleChange} />
                <InputField for="Last Name" onChange={this.handleChange} />
                <InputField for="Address Line 1" onChange={this.handleChange} />
                <InputField for="Address Line 2" onChange={this.handleChange} />
                <InputField for="City" onChange={this.handleChange} />
                <InputField for="Zip" onChange={this.handleChange} />
                <InputField for="State" onChange={this.handleChange} />
                <InputField for="Country" onChange={this.handleChange} />
                <ActionButton id="proceed-to-payment">Proceed to payment</ActionButton>
            </form>
        );
    }
}

function InputField(props) {
    let name = props.for.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
        if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });

    return (
        <div className='input-field'>
            <label htmlFor={name}>{props.for}:</label>
            <input type="text" name={name} onChange={props.onChange} placeholder={props.for}/>
        </div>
    );
}