// ID btnを取得する
const btn = document.getElementById('btn');
// textを取得する
const text = document.getElementById('text');

// クリックした時にイベント処理実行する
btn.addEventListener('click', () => {
    // h2を新しく作成
    const childList = document.createElement('h2');
    // テキスト追加
    text.textContent = 'ボタンをクリックしました';
    // 末尾に追加
    text.appendChild(childList);
});
