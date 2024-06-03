const canvas = new fabric.Canvas("canvas");
canvas.backgroundColor="white";

document.getElementById("draw").addEventListener("click", function () {
    canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
    canvas.freeDrawingBrush.width=5;
    canvas.freeDrawingBrush.color="black";
    canvas.isDrawingMode = true;
});

document.getElementById("erase").addEventListener("click", function () {
   canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
   canvas.freeDrawingBrush.width=10;
   canvas.freeDrawingBrush.color="white";
   canvas.isDrawingMode = true;
});

document.getElementById("downloadPng").addEventListener("click", function(){
    const base64 = canvas.toDataURL({
        format: "png",
    });
    const link = document.createElement("a");
    link.href = base64;
    link.download = "イラスト.png";
    link.click();
});