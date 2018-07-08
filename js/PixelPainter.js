let pixelPainter = (function(){

    let colors = ["indianred","palegoldenrod","darkred","turquoise","thistle","lawngreen","lightcoral","indigo","salmon", "darksalmon","paleturquoise","mediumturquoise","lightslategray","lavender","dodgerblue","lightsalmon","pink","slategray","firebrick","darkmagenta","aquamarine","cornflowerblue","mediumslateblue","lightpink","lime","deepskyblue","peachpuff","hotpink","deeppink","khaki","crimson","limegreen","orange","midnightblue","darkslategray","plum","darkturquoise","purple","chartreuse","mediumvioletred","darkorange","cadetblue","slateblue","violet","mediumblue","burlywood","red","tan","steelblue","royalblue","rosybrown","sandybrown","orchid","lightsteelblue","goldenrod","rebeccapurple","aqua","cyan","chocolate","saddlebrown","greenyellow","sienna","brown","maroon","darkseagreen","darkorchid"];

    //Check that there are enough colors to fill the colorswatch palette
    console.log(colors.length);

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

    //apply a color to each pixel
    var pixelColor = document.getElementsByClassName("pixel");
    for(var i=0; i<colors.length; i++){
        pixelColor[i].style.backgroundColor = colors[i];
        pixelColor[i].addEventListener("click", pickColor);
    }

    function pickColor(){
        //Check that the eventlistener click works
        console.log(this.style.backgroundColor);
    }



    






}());