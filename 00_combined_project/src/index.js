import React from "react";
import ReactDOM  from "react-dom/client";
import DetailsPage from "./pages/03_details_page/details_page";
function App() {
    return(
       <DetailsPage />
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)