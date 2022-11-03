const observer = new IntersectionObserver((entry) => {
    if (entry.isIntersecting) {
        console.log("intersecting");
    }
    else{
        console.log("not");
    }
});

observer.observe(document.getElementById("intro"));

const btn = document.getElementById('nav-btn');
const nav = document.getElementById('nav-items');
let isHidden = true;

function handleClick(){
    if (isHidden){
        nav.classList.remove('hide')
        nav.classList.add('show');
        isHidden = false;
    }
    else {
        nav.classList.remove('show');
        nav.classList.add('hide');
        isHidden = true;
    }
}

function focusOut() {
    nav.classList.remove('show');
    nav.classList.add('hide');
    isHidden = true;
}

btn.addEventListener('click', handleClick);
btn.addEventListener('focusout', focusOut);