import React from "react";
import ReactDOM  from "react-dom/client";
import HomePage from "./pages/01_home_page/home_page";
function App() {
    return(
       <HomePage />
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)