function calculateProbability() {
    // 入力値を取得
    const eventNum = parseFloat(document.getElementById('input-event').value);
    const totalNum = parseFloat(document.getElementById('input-total').value);

    // 入力チェック
    if (isNaN(eventNum) || isNaN(totalNum) || totalNum === 0) {
        alert('有効な数値を入力してください');
        return;
    }

    // 確率を計算
    const probability = (eventNum / totalNum) * 100;

    // 結果を表示
    document.getElementById('result').innerText = probability.toFixed(2) + '%';
}
