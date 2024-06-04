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

// 追加機能として、描画モードの切り替えと色の変更を実装
document.getElementById('drawing-canvas').addEventListener('dblclick', () => {
    canvas.isDrawingMode = !canvas.isDrawingMode;
    alert(`描画モードが${canvas.isDrawingMode ? '有効' : '無効'}になりました`);
});

const colorInput = document.createElement('input');
colorInput.type = 'color';
colorInput.value = '#000000';
colorInput.addEventListener('input', (event) => {
    canvas.freeDrawingBrush.color = event.target.value;
});
document.body.insertBefore(colorInput, document.getElementById('canvas-container'));

// 描画の幅変更の追加
const widthInput = document.createElement('input');
widthInput.type = 'range';
widthInput.min = '1';
widthInput.max = '100';
widthInput.value = '5';
widthInput.addEventListener('input', (event) => {
    canvas.freeDrawingBrush.width = parseInt(event.target.value, 10);
});
document.body.insertBefore(widthInput, document.getElementById('canvas-container'));

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
