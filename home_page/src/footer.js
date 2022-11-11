class FooterForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: ""};
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    handleSubmit = (event) => {
        if (this.state.value === "") alert("Enter a valid email ID");
        else { 
            alert("You are now suscribed to the newsletter!\nYour mail ID: " + this.state.value);
            this.props.wrapper.style.display="";
            this.setState({value: ""});
        }
        event.preventDefault();
    }
    
    handleClose = (event) => {
        this.props.wrapper.style.display="";
        event.preventDefault();        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="nl-form">
                <label className='nl-label'>Subscribe to our newsletter</label>
                <button className="nl-close-btn" onClick={this.handleClose}>&#10006;</button>
                <input className='nl-input' type='email' placeholder='Email' value={this.state.value} onChange={this.handleChange} />
                <input className='nl-submit' type='submit' value='Subscribe' />
            </form>
        );
    }
}



const banner = document.getElementById("footer-form");
function revealForm() {
    banner.style.display = "grid";
}

const footer = ReactDOM.createRoot(document.getElementById("footer-form"));
footer.render(<FooterForm wrapper={banner}/>)

const nl_disp = document.getElementById("nl-interested");
nl_disp.addEventListener("click", revealForm);