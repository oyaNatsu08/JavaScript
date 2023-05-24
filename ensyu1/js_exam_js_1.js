document.getElementById('calc').addEventListener('click', () => {
    const score1 = Number(document.getElementById('score1').value);
    const score2 = Number(document.getElementById('score2').value);
    const score3 = Number(document.getElementById('score3').value);

    console.log(score1, score2, score3);

    function calc(score1, score2, score3) {
        const result = score1 + score2 + score3;
        return result;
    }

    function calc2(score1, score2, score3) {
        return (score1 + score2 + score3) / 3;
    }

    const sum = calc(score1, score2, score3);
    const avg = calc2(score1, score2, score3);

    document.getElementById('sum').textContent += sum;
    document.getElementById('avg').textContent += avg;

  });

document.getElementById('reset').addEventListener('click', () => {
    document.getElementById('score1').value = '0';
    document.getElementById('score2').value = '0';
    document.getElementById('score3').value = '0';
    document.getElementById('sum').textContent = '合計：';
    document.getElementById('avg').textContent = '平均：';
});