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






}());