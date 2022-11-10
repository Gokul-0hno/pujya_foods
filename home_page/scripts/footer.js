class FooterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };
  handleSubmit = event => {
    if (this.state.value === "") alert("Enter a valid email ID");else {
      alert("You are now suscribed to the newsletter!\nYour mail ID: " + this.state.value);
      this.props.wrapper.style.display = "";
      this.setState({
        value: ""
      });
    }
    event.preventDefault();
  };
  render() {
    return /*#__PURE__*/React.createElement("form", {
      onSubmit: this.handleSubmit,
      className: "nl-form"
    }, /*#__PURE__*/React.createElement("label", {
      className: "nl-label"
    }, "Subscribe to our newsletter"), /*#__PURE__*/React.createElement("input", {
      className: "nl-input",
      type: "email",
      placeholder: "Email",
      value: this.state.value,
      onChange: this.handleChange
    }), /*#__PURE__*/React.createElement("input", {
      className: "nl-submit",
      type: "submit",
      value: "Subscribe"
    }));
  }
}
const banner = document.getElementById("footer-form");
function revealForm() {
  banner.style.display = "block";
}
const footer = ReactDOM.createRoot(document.getElementById("footer-form"));
footer.render( /*#__PURE__*/React.createElement(FooterForm, {
  wrapper: banner
}));
const nl_disp = document.getElementById("nl-interested");
nl_disp.addEventListener("click", revealForm);