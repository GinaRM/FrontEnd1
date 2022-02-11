let numSquares = 9;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let mensaje = document.getElementById("mensaje");
let h1 = document.querySelector("h1");
let resetButton = document.getElementById("resetButton");
let mode = document.querySelectorAll(".mode");


init ();
function init(){
    // set up mode buttons event listeners
    setUpModeButtons();
    //set up squares listeners
    setUpSquares();
    reset();

};

function setUpModeButtons () {
    for (let i = 0; i < mode.length; i++){
        mode[i]. addEventListener("click", function (){
            mode[0].classList.remove("selected");
            mode[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 6: numSquares = 9;
            reset ();
        });
    };
};

function setUpSquares () {
    for (let i = 0; i < squares.length; i++){
        //agregar click listeners a los cuadrados
        squares[i].addEventListener("click", function(){
            //tomar el color del cuadrado sleccionado
            let clikcedColor = this.style.backgroundColor;
            //comparar el color del cuadrado con pickedcolor
            if (clikcedColor === pickedColor){
                mensaje.textContent = "Correct!";
                changeColors(clikcedColor);
                h1.style.backgroundColor = clikcedColor;
                resetButton.textContent = "Play again?";
            } else {
                this.style.backgroundColor = "#232323";
                mensaje.textContent = "Try again";
            }
        })
    };
};


function reset () {
    //generar todos los nuevos colores
    colors = generateRandomColors (numSquares);
    //pickear un nuevo color random del arr
    pickedColor = pickColor();
    //cambiar colorDisplay para que coincida con pickedColor
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    mensaje.textContent = "";
    //cambiar los colores de los squares
    for (let i = 0; i < squares.length; i++){
        if (colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
        
    }
    h1.style.backgroundColor = "steelblue";

}

resetButton.addEventListener("click", function(){
   reset ();
});





function changeColors (color){
    //loop through all squares
    for(let i = 0; i < squares.length; i++){
        //cambiar cada color para que sean del color elegido como ganador
        squares[i].style.backgroundColor = color;

    }
    
};

function pickColor (){
    let random =  Math.floor(Math.random() * colors.length);
    return colors[random];
};

function generateRandomColors (num){
    //hacer un array
    let arr = [];
    //repetir num veces
    for (i =0; i < num; i++){
        //obtener color random y pushearlo a arr
        arr.push(randomColor());
    }
    //retornar el array
    return arr;
};

function randomColor (){
    //escoger un rojo desde 0-255
    let r = Math.floor(Math.random() * 256)
    //escoger un verde desde 0-255
    let g = Math.floor(Math.random() * 256)
    //escoger un azul desde 0-255
    let b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")";
};