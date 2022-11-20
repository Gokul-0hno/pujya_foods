import React from "react";
import ReactDOM from "react-dom/client";
import "./react.css";
import {Navbar, Footer, Carousel} from './components.js'

class App extends React.Component {
    render() {
        return(
            <>
                <Navbar />
                <div className="content-area" id="content-area">
                    <Carousel />
                    <DetailsPane />
                </div>
                
                <Footer />
            </>
        );
    }
}

class DetailsPane extends React.Component {
    render() {
        return(
            <div className="details-pane" id="details-pane">

            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)