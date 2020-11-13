
let buttonArray = document.querySelectorAll(".share-container");
let sharePopup = document.querySelectorAll(".share-popup");
let path = document.querySelector("path");
let textFooter = document.querySelector(".text-div-footer");
let mobileFooter = document.querySelector(".footer-mobile-div");

for(let i = 0; i <= buttonArray.length - 1; i++ ){
    buttonArray[i].addEventListener("click", function () {
        if (window.innerWidth > 975) {
            sharePopup[0].classList.toggle("share-popup-clicked");
            buttonArray[0].classList.toggle("share-container-clicked");
            path.classList.toggle("button-fill-clicked");
        } else {
            textFooter.classList.toggle("text-div-footer-hidden");
            mobileFooter.classList.toggle("footer-mobile-div-clicked");
        }
    
    });
}
