console.log('Loaded!');

//Change the text of the main-text div
var element = document.getElementById("main-text");
element.innerHTML = "New Value";

//Move the image
var img = document.getElementById('madi');
// var marginLeft = 0;
// function moveRight(){
//     marginLeft = marginLeft+1;
//     img.style.marginLeft = marginLeft + "px";
// }
img.onClick = function () {
    //Every 100ms apply the move right function
    // var interval = setInterval(moveRight, 50);
    img.style.marginRight = '100px';  
};