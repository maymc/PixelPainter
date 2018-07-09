let pixelPainter = (function(){

    let colors = ["indianred","palegoldenrod","darkred","turquoise","thistle","lawngreen","lightcoral","indigo","salmon", "darksalmon","paleturquoise","mediumturquoise","lightslategray","lavender","dodgerblue","lightsalmon","pink","slategray","firebrick","darkmagenta","aquamarine","cornflowerblue","mediumslateblue","lightpink","lime","deepskyblue","peachpuff","hotpink","deeppink","khaki","crimson","limegreen","orange","midnightblue","darkslategray","plum","darkturquoise","purple","chartreuse","mediumvioletred","darkorange","cadetblue","slateblue","violet","mediumblue","burlywood","red","tan","steelblue","royalblue","rosybrown","sandybrown","orchid","lightsteelblue","goldenrod","rebeccapurple","aqua","cyan","chocolate","saddlebrown","greenyellow","sienna","brown","maroon","darkseagreen","darkorchid","&#9748","&#9752","&#9889","&#9961","&#9973","&#9975","&#9917","&#9918","&#9924","&#9925","&#9968","&#9969"];

    let selectedColor = "";
    let selectedSymbol = "";
    let eraseCount = 0;

    //Check that there are enough colors to fill the colorswatch palette
    console.log("num colors in palette: " + colors.length);

    const pixelPainterDiv = document.getElementById("pixelPainter");

    let colorSwatchBody = document.createElement("div");
    colorSwatchBody.id = "colorSwatchBody";
    pixelPainterDiv.appendChild(colorSwatchBody);

    //create the rows and columns of pixels
    for(var i=1; i<=13; i++){
        let rowElem = document.createElement("div");
        rowElem.className = "row";
        colorSwatchBody.appendChild(rowElem);

        for(var j=1; j<=6; j++){
            let pixelElem = document.createElement("div");
            pixelElem.className = "pixel";
            rowElem.appendChild(pixelElem);
        }
    }

    //apply a color to each pixel and add an event listener to each pixel
    let pixelColor = document.getElementsByClassName("pixel");
    for(var i=0; i<colors.length; i++){
        if(colors[i].match(/&#/g)){
            pixelColor[i].innerHTML = colors[i];
            pixelColor[i].addEventListener("click", pickSymbol);
        }
        else{
            pixelColor[i].style.backgroundColor = colors[i];
            pixelColor[i].addEventListener("click", pickColor);

        }
    }

    function pickColor(){
        //Store the color temporarily in a variable. It will be used to color the canvas
        selectedColor = this.style.backgroundColor;
        selectedSymbol = "";
        eraseCount = 0;
        console.log("selectedColor: " + selectedColor);
    }

    function pickSymbol(){
        //Store the color temporarily in a variable. It will be used to color the canvas
        selectedSymbol = this.innerHTML;
        selectedColor = "";
        eraseCount = 0;
        console.log("selectedSymbol: " + selectedSymbol);
    }

    //Create the canvas grid
    let canvasBody = document.createElement("div");
    canvasBody.id = "canvasBody";
    pixelPainterDiv.appendChild(canvasBody);

    for(var i=1; i<=10; i++){
        let canvasRowElem = document.createElement("div");
        canvasRowElem.className = "canvasRow";
        canvasBody.appendChild(canvasRowElem);

        for(var j=1; j<=10; j++){
            let squareElem = document.createElement("div");
            squareElem.className = "square";
            canvasRowElem.appendChild(squareElem);
        }
    }

    let gridSquare = document.getElementsByClassName("square");
    for(var i=0; i<gridSquare.length; i++){
        gridSquare[i].addEventListener("click", colorSquare);
    }

    function colorSquare(){
        if(selectedSymbol !== ""){
            this.innerHTML = selectedSymbol;
        }
        else if(selectedSymbol === "" && eraseCount === 1){
            this.innerHTML = selectedSymbol;
            this.style.backgroundColor = selectedColor;
        }
        else{
            console.log("check selectedColor: " + selectedColor);
            this.style.backgroundColor = selectedColor;
        }
    }

    //Erase button
    let eraseBtn = document.createElement("button");
    eraseBtn.type = "button";
    eraseBtn.id = "erase";
    eraseBtn.innerHTML = "erase";
    colorSwatchBody.appendChild(eraseBtn);
    
    let eraseBtnElem = document.getElementById("erase");
    eraseBtnElem.addEventListener("click", eraseColor);

    function eraseColor(){
        console.log("erase was clicked");
        //Set the selected color to white to "erase" the square's color
        selectedColor = "white";
        selectedSymbol = "";
        eraseCount = 1;
        console.log("erase selectedColor: " + selectedColor);
    }

    //Clear button
    let clearBtn = document.createElement("button");
    clearBtn.type = "button";
    clearBtn.id = "clear";
    clearBtn.innerHTML = "clear";
    colorSwatchBody.appendChild(clearBtn);

    let clearBtnElem = document.getElementById("clear");
    clearBtnElem.addEventListener("click", clearCanvas);

    function clearCanvas(){
        console.log("clear was clicked");
        for(var i=0; i<gridSquare.length; i++){
            gridSquare[i].style.backgroundColor = "";
            gridSquare[i].innerHTML = "";
        }
    }




    






}());