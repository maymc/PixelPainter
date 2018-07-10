let pixelPainter = (function(){

    /*********************/
    /* Private Variables */
    /*********************/
    
    //Colors, stamps, shapes, symbols that will fill the palette
    let colorsSymbols = ["indianred","palegoldenrod","darkred","turquoise","thistle","lawngreen","lightcoral","indigo","salmon", "darksalmon","paleturquoise","mediumturquoise","lightslategray","lavender","dodgerblue","lightsalmon","pink","slategray","firebrick","darkmagenta","aquamarine","cornflowerblue","mediumslateblue","lightpink","lime","deepskyblue","peachpuff","hotpink","deeppink","khaki","crimson","limegreen","orange","midnightblue","darkslategray","plum","darkturquoise","purple","chartreuse","mediumvioletred","darkorange","cadetblue","slateblue","violet","mediumblue","burlywood","red","tan","steelblue","royalblue","rosybrown","sandybrown","orchid","lightsteelblue","goldenrod","rebeccapurple","aqua","cyan","chocolate","saddlebrown","greenyellow","sienna","brown","maroon","darkseagreen","darkorchid","&#9748","&#9752","&#9889","&#9961","&#9973","&#9975","&#9917","&#9918","&#9924","&#9925","&#9968","&#9969","&#9835","&#9734","&#9825","&#9711","&#9651","&#9634","&#9728","&#9729","&#9786","&#9790","&#9812","&#9813"];

    //Initialize the selected color and symbol to an empty string
    let selectedColor = "";     
    let selectedSymbol = "";
    let eraseCount = 0;     //Flag for whether the erase button was clicked

    //DEBUG - Check that there are enough colors/symbols to fill palette
    console.log("num colors/symbols in palette: " + colorsSymbols.length);

    //Get the pixelPainter element - this is the entire body of the pixelPainter
    const pixelPainterDiv = document.getElementById("pixelPainter");

    /*********************/
    /*   The Palette     */
    /*********************/
    //Create the palette's body
    let colorSwatchBody = document.createElement("div");
    colorSwatchBody.id = "colorSwatchBody";
    pixelPainterDiv.appendChild(colorSwatchBody);

    //Create the rows and columns of pixels for the palette
    //This creates the rows
    for(var i=1; i<=15; i++){
        let rowElem = document.createElement("div");
        rowElem.className = "row";
        colorSwatchBody.appendChild(rowElem);

        //This creates the individual squares per row
        for(var j=1; j<=6; j++){
            let pixelElem = document.createElement("div");
            pixelElem.className = "pixel";
            rowElem.appendChild(pixelElem);
        }
    }

    //Apply a color/symbol to each pixel and add an event listener to each pixel to make it clickable
    let pixelColorSymbol = document.getElementsByClassName("pixel");
    
    for(var i=0; i<colorsSymbols.length; i++){
        //If the array element is a symbol, fill the pixel with a symbol. Callback for the event listener is for a symbol
        if(colorsSymbols[i].match(/&#/g)){
            pixelColorSymbol[i].innerHTML = colorsSymbols[i];
            pixelColorSymbol[i].addEventListener("click", pickSymbol);
        }
        //If the array element is a color, style the pixel with the color. Callback for the event listener is for a color
        else{
            pixelColorSymbol[i].style.backgroundColor = colorsSymbols[i];
            pixelColorSymbol[i].addEventListener("click", pickColor);
        }
    }

    /************************/
    /*   Palette Functions  */
    /************************/
    function pickColor(){
        //Store the color temporarily. It will be used to color the canvas
        selectedColor = this.style.backgroundColor;

        //Set the selectedSymbol to an empty string. Only one color/symbol can be selected at once
        selectedSymbol = "";

        //Reset the erase count, user is no longer erasing
        eraseCount = 0;
        console.log("eraseCount at pickedColor: " + eraseCount);

        console.log("selectedColor from palette: " + selectedColor);
    }

    function pickSymbol(){
        //Store the symbol temporarily. It will be used to color the canvas
        selectedSymbol = this.innerHTML;

        //Set the selectedColor to an empty string. Only one color/symbol can be selected at once
        selectedColor = "";

        //Reset the erase count, user is no longer erasing
        eraseCount = 0;
        console.log("eraseCount at pickedSymbol: " + eraseCount);

        console.log("selectedSymbol from palette: " + selectedSymbol);
    }

    /*********************/
    /*     The Canvas    */
    /*********************/
    //Create the canvas grid body
    let canvasBody = document.createElement("div");
    canvasBody.id = "canvasBody";
    pixelPainterDiv.appendChild(canvasBody);

    //Create the rows and columns of pixels for the palette
    //This creates the rows
    for(var i=1; i<=10; i++){
        let canvasRowElem = document.createElement("div");
        canvasRowElem.className = "canvasRow";
        canvasBody.appendChild(canvasRowElem);

        //This creates the individual squares per row
        for(var j=1; j<=10; j++){
            let squareElem = document.createElement("div");
            squareElem.className = "square";
            canvasRowElem.appendChild(squareElem);
        }
    }

    /************************/
    /*   Canvas Functions   */
    /************************/
    //Add an event listener to each pixel to make it clickable
    let gridSquare = document.getElementsByClassName("square");

    for(var i=0; i<gridSquare.length; i++){
        gridSquare[i].addEventListener("click", fillSquare);
    }

    //Function to fill the squares on the canvas after they are clicked
    function fillSquare(){
        //If a symbol is selected, fill the square with a symbol
        if(selectedSymbol !== ""){
            console.log("Filling w/selectedSymbol: " + selectedSymbol);
            this.innerHTML = selectedSymbol;
        }
        //If the selectedSymbol is empty and the erase button was clicked, fill the square with no symbol and no color. This is a workaround to allow the user to erase both the symbol and color when erasing a square
        else if(selectedSymbol === "" && eraseCount === 1){
            this.innerHTML = selectedSymbol;
            this.style.backgroundColor = selectedColor;
        }
        //If a color was selected, fill the square with the color
        else{
            console.log("Filling w/selectedColor: " + selectedColor);
            this.style.backgroundColor = selectedColor;
        }
    }

    /*****************/
    /*   Buttons     */
    /*****************/
    //Create the erase button
    let eraseBtn = document.createElement("button");
    eraseBtn.type = "button";
    eraseBtn.id = "erase";
    eraseBtn.innerHTML = "erase";
    colorSwatchBody.appendChild(eraseBtn);
    
    //Add an event listener to the erase button
    let eraseBtnElem = document.getElementById("erase");
    eraseBtnElem.addEventListener("click", eraseColorSymbol);

    //Function to erase the color/symbol from the square clicked on
    function eraseColorSymbol(){
        console.log("DEBUG - erase was clicked");

        //Set the selected color to white to "erase" the square's color. Set the selected symbol to an empty string to "remove"/erase the symbol
        selectedColor = "white";
        selectedSymbol = "";

        //Update the erase flag
        eraseCount = 1;
        console.log("eraseCount at erase: " + eraseCount);
    }

    //Create the clear button
    let clearBtn = document.createElement("button");
    clearBtn.type = "button";
    clearBtn.id = "clear";
    clearBtn.innerHTML = "clear";
    colorSwatchBody.appendChild(clearBtn);

    //Add an event listener to the clear button
    let clearBtnElem = document.getElementById("clear");
    clearBtnElem.addEventListener("click", clearCanvas);

    //Function to clear the entire canvas of colors and symbols
    function clearCanvas(){
        console.log("DEBUG - clear was clicked");

        for(var i=0; i<gridSquare.length; i++){
            //Reset the squares' styling and inner data to empty strings
            gridSquare[i].style.backgroundColor = "";
            gridSquare[i].innerHTML = "";
        }
    }


}());