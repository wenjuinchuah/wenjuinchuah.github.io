let card = document.querySelector("#firstCard");
setHeight();
console.log(getHeight());

window.addEventListener("resize", function() {
    setHeight();
    console.log(getHeight());
})

function getHeight() {
    return card.offsetHeight;
}

function setHeight() {
    document.querySelector("#secondCard").style.height = getHeight() + "px";
    document.querySelector("#thirdCard").style.height = getHeight() + "px";
}