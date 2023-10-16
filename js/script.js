
// tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// cardHeight of Education Background
let card = document.querySelector("#firstCard");
let firstProjectCard = document.querySelector("#firstProjectCard");
let thirdProjectCard = document.querySelector("#thirdProjectCard");
let storeBadge = document.querySelector("#store-badge");
let copyright = document.querySelector("#copyright");

window.addEventListener("load", function() {
    let currentYear = new Date().getFullYear();
    copyright.innerHTML = `<p>Copyright &copy; ${currentYear} Chuah Wen Juin</p>`;

    if (firstProjectCard.offsetHeight >= thirdProjectCard.offsetHeight) {
        setHeight(firstProjectCard);
    } else {
        setHeight(thirdProjectCard);
    }
    setCardHeight();
})

window.addEventListener("resize", function() {
    if (storeBadge.offsetHeight == 115.32) {
        setHeight(firstProjectCard); 
    } else {
        firstProjectCard.offsetHeight = 431;
        setHeight(firstProjectCard);
    }
    
    // if (firstProjectCard.offsetHeight > thirdProjectCard.offsetHeight) {
    //     setHeight(firstProjectCard);
    // } else {
    //     setHeight(thirdProjectCard);
    // }
    setCardHeight();
})

// cardHeight getter
function getCardHeight() {
    return card.offsetHeight;
}

// cardHeight setter
function setCardHeight() {
    document.querySelector("#secondCard").style.height = getCardHeight() + "px";
    document.querySelector("#thirdCard").style.height = getCardHeight() + "px";
}

// cardHeight getter
function getHeight(projectCard) {
    if (projectCard.offsetHeight == firstProjectCard.offsetHeight) {
        return firstProjectCard.offsetHeight;
    } else {
        return thirdProjectCard.offsetHeight;
    }
}

// cardHeight setter
function setHeight(projectCard) {
    if (projectCard.offsetHeight == firstProjectCard.offsetHeight) {
        document.querySelector("#thirdProjectCard").style.height = getHeight(firstProjectCard) + "px";
        document.querySelector("#secondProjectCard").style.height = getHeight(firstProjectCard) + "px";
    } else {
        document.querySelector("#firstProjectCard").style.height = getHeight(thirdProjectCard) + "px";
        document.querySelector("#secondProjectCard").style.height = getHeight(thirdProjectCard) + "px";
    }
}