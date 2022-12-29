import React from "react";

function SectionTitle(props){
    return (<p className={`section-title section-title-${props.id} ${props.className}`} id={`${props.id}-title`}>{props.children}</p>);
}

function ActionButton(props){
    return(<button className={`action-btn action-btn-${props.id} ${props.className}`} id={`${props.id}-btn`}>{props.children}</button>);
}

function ProductTitle(props) {
    return (<p className={`product-title product-title-${props.id} ${props.className}`} id={`${props.id}-title`}>{props.children}</p>);
}

function TextContent(props) {
    return (<p className={`text-content text-content-${props.id} ${props.className}`} id={`${props.id}`}>{props.children}</p>);
}

class QuantityDrop extends React.Component {
    render() {
        return(
            <div id="quantity-selector" className={`${this.props.className}`}>
                
                <button>-</button>
                <select name="Quantity:" id="quantity">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button>+</button>
            </div>
        );
    }
}

export {SectionTitle, ActionButton, ProductTitle, TextContent, QuantityDrop};

