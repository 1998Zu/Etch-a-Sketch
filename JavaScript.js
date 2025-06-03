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
        let count = parseInt(clonedDiv.dataset.hoverCount) || 0; count++;
        clonedDiv.dataset.hoverCount = count;

        let opacity = count * 0.1;
        if (opacity > 1) opacity = 1;

        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);   
        
        clonedDiv.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;


     });

     }

    

};