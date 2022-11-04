const left_btn = document.getElementById("left-btn");
const right_btn = document.getElementById("right-btn");

const items = document.getElementsByClassName("carousel-item")
const items_len = items.length;

let curr_item = 0;
items.item(0).classList.add("carousel-focus");

function clickLeft(){
    items.item(curr_item).classList.remove("carousel-focus");
    if (curr_item === 0){
        curr_item = items_len - 1;
    }
    else{
        curr_item = curr_item - 1;
    }
    items.item(curr_item).classList.add("carousel-focus");
}

function clickRight() {
    items.item(curr_item).classList.remove("carousel-focus");
    if (curr_item === items_len - 1){
        curr_item = 0;
    }
    else{
        curr_item = curr_item + 1;
    }
    items.item(curr_item).classList.add("carousel-focus");
}

left_btn.addEventListener("click", clickLeft);
right_btn.addEventListener("click", clickRight);


