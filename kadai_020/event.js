// ID btnを取得する
const btn = document.getElementById('btn');
// textを取得する
const text = document.getElementById('text');

// クリックした時にイベント処理実行する
btn.addEventListener('click', () => {
    // テキスト追加
    text.textContent = 'ボタンをクリックしました';
});
