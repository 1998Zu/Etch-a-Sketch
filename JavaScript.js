const container = document.querySelector("#containerGrid");

const div = document.createElement("div");

const numberOfCopies = 256;

for (let i = 0; i < numberOfCopies; i++){
    const clonedDiv = div.cloneNode(true);
    clonedDiv.classList.add("gridSquare");
    container.appendChild(clonedDiv)

    clonedDiv.addEventListener("mouseover", function(){
    clonedDiv.style.backgroundColor = "black";
    
    });
    
}

const button = document.querySelector("#sizeBtn")

button.onclick = function changeSize(){
  let userInput =  prompt("Pick the number of squares per side");
   
}




