import React from 'react'
import './react.css'


class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: ""};
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    handleSubmit = (event) => {
        if (this.state.value === "") alert("Enter a valid email ID");
        else alert("You are now suscribed to the newsletter!\nYour mail ID: " + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="newsletter-form">
                <label className='newsletter-label'>Subscribe to our newsletter</label>
                <input className='email-input' type='email' placeholder='Email' value={this.state.value} onChange={this.handleChange} />
                <input className='subs-btn' type='submit' value='Subscribe' />
            </form>
        );
    }
}

export {Footer};