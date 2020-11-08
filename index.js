document.querySelectorAll(".share-container")[0].addEventListener("click", function(){
    if (window.innerWidth > 975){
    document.querySelectorAll(".share-popup")[0].classList.toggle("share-popup-clicked");
    document.querySelectorAll(".share-container")[0].classList.toggle("share-container-clicked");
    document.querySelector("path").classList.toggle("button-fill-clicked");
    } else{
        alert("mobile viewport");
    }
    
});