import React from "react";
import ReactDOM  from "react-dom/client";
import HomePage from "./pages/01_home_page/home_page";
import ProductsPage from './pages/02_products_page/products_page';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)