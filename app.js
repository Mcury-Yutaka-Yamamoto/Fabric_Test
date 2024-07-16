// Fabric.jsを用いたキャンバスの初期化
const canvas = new fabric.Canvas('drawing-canvas');
canvas.backgroundColor = "white";

// フリードロー機能の有効化
canvas.isDrawingMode = true;
canvas.freeDrawingBrush.color = "black"; // 描画する色
canvas.freeDrawingBrush.width = 5; // 描画する線の幅

// キャンバスクリアボタンの機能
document.getElementById('clear-canvas').addEventListener('click', () => {
    canvas.clear();
    canvas.backgroundColor = "white";
});

// 色の変更機能
document.getElementById('color-pallet').addEventListener('input', (event) => {
    canvas.freeDrawingBrush.color = event.target.value;
});

// 描画の幅変更の追加
document.getElementById('widthInput').addEventListener('input', (event) => {
    canvas.freeDrawingBrush.width = parseInt(event.target.value, 10);
})

// キャンバスを画像としてダウンロードする機能
document.getElementById('download-canvas').addEventListener('click', () => {
    const dataURL = canvas.toDataURL({
        format: 'png',
        quality: 1.0
    });
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'canvas.png';
    link.click();
});

