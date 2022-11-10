const blogs = [{"title": "Lorem Ipsum 1", "date": "05/06/2022", "content": "Lorem Ipsum 3", "author": "Batman"}, 
               {"title": "Lorem Ipsum 2", "date": "06/06/2022", "content": "Lorem Ipsum 4", "author": "Robin"},
               {"title": "Lorem Ipsum 3", "date": "07/06/2022", "content": "Lorem Ipsum 5", "author": "Talia-Al-Guhl"},
            ]

class BlogWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currPost: 0, numPosts: 3}
    }

    handlePrevClick = () => {
        if (this.state.currPost == 0) this.setState({currPost: this.state.numPosts - 1});
        else this.setState({currPost: this.state.currPost - 1}); 
    }

    handleNextClick = () => {
        if (this.state.currPost == this.state.numPosts - 1) this.setState({currPost: 0});
        else this.setState({currPost: this.state.currPost + 1});
    }

    render() {
        return (
            <>
                <div className="blog-title-bar">
                    <h3 className = "head-title">{this.props.blogsList[this.state.currPost].title}</h3>
                    <h4 className="head-author">by {this.props.blogsList[this.state.currPost].author}</h4>
                    <h4 className = "head-date">Published on: {this.props.blogsList[this.state.currPost].date}</h4>
                </div>

                <div className="blog-content-pane">
                    <p>{this.props.blogsList[this.state.currPost].content}</p>
                </div>

                <div className="blog-nav">
                    <button className="blog-nav-left" onClick={this.handlePrevClick}>&lt;</button>
                    <button  className="blog-nav-right" onClick={this.handleNextClick}>&gt;</button>
                </div>
            </>
        );
    }
}

const blog = ReactDOM.createRoot(document.getElementById("blog"));
blog.render(<BlogWrapper blogsList = {blogs}/>)