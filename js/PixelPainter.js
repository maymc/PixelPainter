let pixelPainter = (function(){

    let colors = ["indianred","palegoldenrod","darkred","turquoise","thistle","lawngreen","lightcoral","indigo","salmon", "darksalmon","paleturquoise","mediumturquoise","lightslategray","lavender","dodgerblue","lightsalmon","pink","slategray","firebrick","darkmagenta","aquamarine","cornflowerblue","mediumslateblue","lightpink","lime","deepskyblue","peachpuff","hotpink","deeppink","khaki","crimson","limegreen","orange","midnightblue","darkslategray","plum","darkturquoise","purple","chartreuse","mediumvioletred","darkorange","cadetblue","slateblue","violet","mediumblue","burlywood","red","tan","steelblue","royalblue","rosybrown","sandybrown","orchid","lightsteelblue","goldenrod","rebeccapurple","aqua","cyan","chocolate","saddlebrown","greenyellow","sienna","brown","maroon","darkseagreen","darkorchid"];

    let selectedColor = "";

    //Check that there are enough colors to fill the colorswatch palette
    console.log("num colors in palette: " + colors.length);

    const pixelPainterDiv = document.getElementById("pixelPainter");

    let colorSwatchBody = document.createElement("div");
    colorSwatchBody.id = "colorBody";
    pixelPainterDiv.appendChild(colorSwatchBody);

    //create the rows and columns of pixels
    for(var i=1; i<=11; i++){
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
    var pixelColor = document.getElementsByClassName("pixel");
    for(var i=0; i<colors.length; i++){
        pixelColor[i].style.backgroundColor = colors[i];
        pixelColor[i].addEventListener("click", pickColor);
    }

    function pickColor(){
        //Store the color temporarily in a variable. It will be used to color the canvas
        selectedColor = this.style.backgroundColor;
        console.log("selectedColor: " + selectedColor);
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

    var gridSquare = document.getElementsByClassName("square");
    for(var i=0; i<gridSquare.length; i++){
        gridSquare[i].addEventListener("click", colorSquare);
    }

    function colorSquare(){
        console.log("check selectedColor: " + selectedColor);
        this.style.backgroundColor = selectedColor;
    }



    






}());