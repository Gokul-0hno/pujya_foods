const blogs = [{
  "title": "Lorem Ipsum 1",
  "date": "05/06/2022",
  "content": "Lorem Ipsum 3",
  "author": "Batman"
}, {
  "title": "Lorem Ipsum 2",
  "date": "06/06/2022",
  "content": "Lorem Ipsum 4",
  "author": "Robin"
}, {
  "title": "Lorem Ipsum 3",
  "date": "07/06/2022",
  "content": "Lorem Ipsum 5",
  "author": "Talia-Al-Guhl"
}];
class BlogWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currPost: 0,
      numPosts: 3
    };
  }
  handlePrevClick = () => {
    if (this.state.currPost == 0) this.setState({
      currPost: this.state.numPosts - 1
    });else this.setState({
      currPost: this.state.currPost - 1
    });
  };
  handleNextClick = () => {
    if (this.state.currPost == this.state.numPosts - 1) this.setState({
      currPost: 0
    });else this.setState({
      currPost: this.state.currPost + 1
    });
  };
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "blog-title-bar"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "head-title"
    }, this.props.blogsList[this.state.currPost].title), /*#__PURE__*/React.createElement("h4", {
      className: "head-author"
    }, "by ", this.props.blogsList[this.state.currPost].author), /*#__PURE__*/React.createElement("h4", {
      className: "head-date"
    }, "Published on: ", this.props.blogsList[this.state.currPost].date)), /*#__PURE__*/React.createElement("div", {
      className: "blog-content-pane"
    }, /*#__PURE__*/React.createElement("p", null, this.props.blogsList[this.state.currPost].content)), /*#__PURE__*/React.createElement("div", {
      className: "blog-nav"
    }, /*#__PURE__*/React.createElement("button", {
      className: "blog-nav-left blog-nav-btn",
      onClick: this.handlePrevClick
    }, "<"), /*#__PURE__*/React.createElement("button", {
      className: "blog-nav-right blog-nav-btn",
      onClick: this.handleNextClick
    }, ">")));
  }
}
const blog = ReactDOM.createRoot(document.getElementById("blog"));
blog.render( /*#__PURE__*/React.createElement(BlogWrapper, {
  blogsList: blogs
}));