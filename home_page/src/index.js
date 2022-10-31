import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'

function App() {
    return (
        <NavBar />
    );
}

class NavBar extends React.Component {
    render() {
        return (
            <nav className='navbarCustom'>
                <span className='navBrand'>PUJYA FOODS  </span>

            </nav>
        );
    }
}



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

