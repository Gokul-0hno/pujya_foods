import React from 'react'

class Carousel extends React.Component {

    componentDidMount() {
        this.items = document.getElementsByClassName("carousel-item")
        this.items_len = this.items.length;

        this.curr_item = 0;
        this.last_item = this.items_len - 1;
        this.next_item = 1;
        this.items.item(this.last_item).classList.add("carousel-left");
        this.items.item(this.curr_item).classList.add("carousel-focus");
        this.items.item(this.next_item).classList.add("carousel-right");


    }

    moveLeft = () => {
        this.items.item(this.last_item).classList.remove("carousel-left")
        this.items.item(this.curr_item).classList.remove("carousel-focus");
        this.items.item(this.next_item).classList.remove("carousel-right");
        this.next_item = this.curr_item;
        this.curr_item = this.last_item;
        if (this.last_item === 0){
            this.last_item = this.items_len - 1;
        }
        else{
            this.last_item = this.last_item - 1;
        }
        this.items.item(this.last_item).classList.add("carousel-left")
        this.items.item(this.curr_item).classList.add("carousel-focus");
        this.items.item(this.next_item).classList.add("carousel-right");
    }

    moveRight = () => {
        this.items.item(this.last_item).classList.remove("carousel-left")
        this.items.item(this.curr_item).classList.remove("carousel-focus");
        this.items.item(this.next_item).classList.remove("carousel-right");
        this.last_item = this.curr_item;
        this.curr_item = this.next_item;
        if (this.next_item === this.items_len - 1) {
            this.next_item = 0;
        }
        else{
            this.next_item = this.next_item + 1;
        }
        this.items.item(this.last_item).classList.add("carousel-left")
        this.items.item(this.curr_item).classList.add("carousel-focus");
        this.items.item(this.next_item).classList.add("carousel-right");
    }

    render() {
        
        let items = [];
        let key = 1;
        this.props.objects.forEach((element) => {
            items.push(<div className="carousel-item" key={key}>{element}</div>);
            ++key;
        });

        return(
            <div className="carousel-container" id="carousel-container">
                <button className="left-btn" id="left-btn" onClick={this.moveLeft} title="Navigate left"></button>
                {items}
                <button className="right-btn" id="right-btn" onClick={this.moveRight} title="Navigate right"></button>
            </div>
        );
    }
}

export default Carousel