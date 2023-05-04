let button1 = document.querySelector(".counter__plus");
let button2 = document.querySelector(".counter__minus");
let button3 = document.querySelector(".counter__reset");
let counterText = document.querySelector(".counter");
let counter = 0;

button1.addEventListener("click", function() {
    counter = counter + 1;
    
    counterText.innerText = counter;
    
});

button2.addEventListener("click", function() {
    counter = counter - 1;
    counterText.innerText = counter;
})

button3.addEventListener("click", function() {
    counter = 0;
    counterText.innerText = counter;
})