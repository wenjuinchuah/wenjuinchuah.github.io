// cardHeight of Education Background
let card = document.querySelector("#firstCard");
setHeight();
console.log(getHeight());

window.addEventListener("resize", function() {
    setHeight();
    console.log(getHeight());
})

// cardHeight getter
function getHeight() {
    return card.offsetHeight;
}

// cardHeight setter
function setHeight() {
    document.querySelector("#secondCard").style.height = getHeight() + "px";
    document.querySelector("#thirdCard").style.height = getHeight() + "px";
}