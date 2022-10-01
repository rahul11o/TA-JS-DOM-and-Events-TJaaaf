 
 function random(numb){
    return (Math.floor(Math.random() * numb ) + 1);
 };


clickMe = document.querySelector(".first ");
clickMe.addEventListener("click" , () => {
let randomColor = `rgb(${random(255)},${random(255)},${random(255)})`
clickMe.style.backgroundColor = randomColor;

})
 
mouse = document.querySelector(".second");
mouse.addEventListener("mousemove" , () => {
let randomColor =  `rgb(${random(255)},${random(255)},${random(255)})`
mouse.style.backgroundColor = randomColor;
})


