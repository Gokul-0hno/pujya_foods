import React from "react";
import './footer.css';

export default class Footer extends React.Component {
    componentDidMount() {
        this.banner = document.getElementById("footer-form");
    }

    revealForm = () => {
        this.banner.style.display = "grid";
    }

    render() {
        return(
            <footer className="footer" id="footer">
                <FooterForm />
                <div className="soc-banner" id="follow">
                    <i className="soc-ico fa-regular fa-envelope" id="nl-interested" onClick={this.revealForm}></i>
                    <i className="fa-regular fa-map soc-ico"></i>
                    <i className="soc-ico fa-brands fa-twitter"></i>
                    <i className="soc-ico fa-brands fa-instagram"></i>
                    <i className="soc-ico fa-brands fa-facebook"></i>
                    <i className="soc-ico fa-brands fa-youtube"></i>
                </div>
                <p className="footer-text">	&#169;2022 Pujya Foods</p>
            </footer>
  
        );
    }
}

class FooterForm extends React.Component {
  constructor(props){
      super(props);
      this.state = {value: ""};
  }

  handleChange = (event) => {
      event.stopPropagation();
      this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
      event.stopPropagation();      
      if (this.state.value === "") alert("Enter a valid email ID");
      else { 
          alert("You are now suscribed to the newsletter!\nYour mail ID: " + this.state.value);
          this.wrapper.style.display="";
          this.setState({value: ""});
      }
      event.preventDefault();
  }
  
  handleClose = (event) => {
      this.wrapper.style.display="";
      event.preventDefault();  
  }

  componentDidMount() {
    this.wrapper = document.getElementById("footer-form");
  }

  render() {
      return (
        <div className="footer-form" id="footer-form">
          <form onSubmit={this.handleSubmit} className="nl-form">
              <label className='nl-label'>Subscribe to our newsletter!</label>
              <button className="nl-close-btn" onClick={this.handleClose}>&#10006;</button>
              <i className="fa-solid fa-envelopes-bulk nl-icon" />
              <input className='nl-input' type='email' placeholder='Email' value={this.state.value} onChange={this.handleChange} />
              <input className='nl-submit' type='submit' value='Subscribe' />
              <p className="nl-p">(P.S. We won't share your email address with any third party)</p>
          </form>
        </div>
      );
  }
}