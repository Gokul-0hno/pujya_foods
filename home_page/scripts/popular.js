'use strict';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false
    };
  }
  render() {
    if (this.state.liked) {
      return 'Frekin aswesomehk';
    }
    return /*#__PURE__*/React.createElement("button", {
      onClick: () => this.setState({
        liked: true
      })
    }, "Dislike");
  }
}
let domContainer = document.querySelector('#popular');
ReactDOM.render( /*#__PURE__*/React.createElement(LikeButton, null), domContainer);