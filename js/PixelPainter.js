let pixelPainter = (function(){


    const pixelPainterDiv = document.getElementById("pixelPainter");

    let colorSwatchBody = document.createElement("div");
    colorSwatchBody.id = "colorBody";
    pixelPainterDiv.appendChild(colorSwatchBody);

    for(var i=1; i<=11; i++){
        let rowElem = document.createElement("div");
        rowElem.className = "row";
        colorSwatchBody.appendChild(rowElem);

        for(var j=1; j<=6; j++){
            let pixel = document.createElement("div");
            pixel.className = "pixel";
            rowElem.appendChild(pixel);
        }

    }

    let colors = ["indianred", "lightcoral","salmon","pink","lightpink","hotpink","coral","tomato","orangered","gold","yellow","lightyellow","lavender","thistle","plum","greenyellow","chartreuse","lawngreen","aqua","cyan","lightcyan","cornsilk","blanchedalmond","bisque","white","snow","honeydew","gainsboro","lightgray","silver","darksalmon","lightsalmon","crimson","deeppink","mediumvioletred","palevioletred","darkorange","orange","lemonchiffon","lightgoldenrodyellow","papayawhip","violet","orchid","fuchsia","lime","limegreen","palegreen","paleturquoise","aquamarine","turquoise","navajowhite","wheat","burlywood","dimgray","lightslategray","dimslategray","skyblue","lightskyblue","dodgerblue","purple","darkorchid","indigo","seagreen","forestgreen","green","teal","darkcyan"];

    console.log(colors.length);
    






}());