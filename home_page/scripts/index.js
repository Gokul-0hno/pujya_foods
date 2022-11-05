const left_btn = document.getElementById("left-btn");
const right_btn = document.getElementById("right-btn");

const items = document.getElementsByClassName("carousel-item")
const items_len = items.length;

let curr_item = 0;
let last_item = items_len - 1;
let next_item = 1;
items.item(last_item).classList.add("carousel-left");
items.item(curr_item).classList.add("carousel-focus");
items.item(next_item).classList.add("carousel-right");

function clickLeft(){
    items.item(last_item).classList.remove("carousel-left")
    items.item(curr_item).classList.remove("carousel-focus");
    items.item(next_item).classList.remove("carousel-right");
    next_item = curr_item;
    curr_item = last_item;
    if (last_item === 0){
        last_item = items_len - 1;
    }
    else{
        last_item = last_item - 1;
    }
    items.item(last_item).classList.add("carousel-left")
    items.item(curr_item).classList.add("carousel-focus");
    items.item(next_item).classList.add("carousel-right");
}

function clickRight() {
    items.item(last_item).classList.remove("carousel-left")
    items.item(curr_item).classList.remove("carousel-focus");
    items.item(next_item).classList.remove("carousel-right");
    last_item = curr_item;
    curr_item = next_item;
    if (next_item === items_len - 1) {
        next_item = 0;
    }
    else{
        next_item = next_item + 1;
    }
    items.item(last_item).classList.add("carousel-left")
    items.item(curr_item).classList.add("carousel-focus");
    items.item(next_item).classList.add("carousel-right");
}

left_btn.addEventListener("click", clickLeft);
right_btn.addEventListener("click", clickRight);


