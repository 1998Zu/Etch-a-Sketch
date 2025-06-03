const container = document.querySelector("#containerGrid");

const div = document.createElement("div");

const button = document.querySelector("#sizeBtn");

button.onclick = function changeSize(){
    let userInput =  parseInt(prompt("Pick the number of squares per side between 1 and 100"));
    
    let squareSize = (500 / userInput) -2 ;
    
    container.innerHTML ="";
    
    
    const numberOfCopies = userInput * userInput;

    if( userInput > 100 || userInput < 0 || isNaN(userInput)){
        alert("ERROR!! Pick a number between 1 and 100");
        return;
    }


    for (let i = 0; i < numberOfCopies; i++){

     const clonedDiv = div.cloneNode(true);
     clonedDiv.classList.add("gridSquare");
     container.appendChild(clonedDiv);

     clonedDiv.style.width = `${squareSize}px`;
     clonedDiv.style.height = `${squareSize}px`;

     clonedDiv.addEventListener("mouseover", function(){
     clonedDiv.style.backgroundColor = "black";

     });

     }

    

};