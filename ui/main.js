console.log('Loaded!');

//Change the text of the main-text div
var element = document.getElementById("main-text");
element.innerHTML = "New Value";

//Move the image
var img = document.getElementById("madi");
img.onClick = function () {
    //Every 100ms apply the move right function
    // var interval = setInterval(moveRight, 100);
    img.style.marginLeft = '100px';  
};