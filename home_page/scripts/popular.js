const data = [{
  "name": "Matta Palada Payasam Mix",
  "quantity": "250gms",
  "description": "Lorem Ipsum Dolores Sit Amet",
  "cost": "70"
}, {
  "name": "Multi Millet Payasam Mix",
  "quantity": "500gms",
  "description": "Lorem Ipsum Dolores Sit Amet",
  "cost": "79.09"
}, {
  "name": "Adapradhaman Payasam Mix",
  "quantity": "250gms",
  "description": "Lorem Ipsum Dolores Sit Amet",
  "cost": "77.27"
}, {
  "name": "Sadhya Palada Payasam Mix",
  "quantity": "500gms",
  "description": "Lorem Ipsum Dolores Sit Amet",
  "cost": "215"
}, {
  "name": "Rava Kesari Mix",
  "quantity": "200gms",
  "description": "Lorem Ipsum Dolores Sit Amet",
  "cost": "65"
}, {
  "name": "Rice Ada Big",
  "quantity": "500gms",
  "description": "Lorem Ipsum Dolores Sit Amet",
  "cost": "150"
}, {
  "name": "Suraj Vermicelli Payasam Mix",
  "quantity": "250gms",
  "description": "Lorem Ipsum Dolores Sit Amet",
  "cost": "75"
}];
class ProductCard extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "product-card",
      id: this.props.itemId
    }, /*#__PURE__*/React.createElement("img", {
      className: "product-image",
      src: "https://placehold.jp/300x150.png",
      alt: this.props.itemId
    }), /*#__PURE__*/React.createElement("div", {
      className: "product-desc"
    }, /*#__PURE__*/React.createElement("h3", null, this.props.itemId), /*#__PURE__*/React.createElement("p", null, this.props.desc), /*#__PURE__*/React.createElement("h4", null, "Weight: ", this.props.quantity)), /*#__PURE__*/React.createElement(ProductActions, {
      cost: this.props.cost
    }));
  }
}
function ProductActions(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "actions-container"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "price-label"
  }, "Cost: \u20B9", props.cost), /*#__PURE__*/React.createElement("button", {
    className: "action-btn"
  }, "Add to cart"));
}
function PopularBanner(props) {
  let products = [];
  props.list.forEach(product => {
    products.push( /*#__PURE__*/React.createElement(ProductCard, {
      itemId: product.name,
      cost: product.cost,
      quantity: product.quantity,
      desc: product.description,
      key: product.name
    }));
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Our most popular items"), /*#__PURE__*/React.createElement("div", {
    className: "popular-grid",
    id: "popular-grid"
  }, products));
}
const popular = ReactDOM.createRoot(document.getElementById("popular"));
popular.render( /*#__PURE__*/React.createElement(PopularBanner, {
  list: data
}));