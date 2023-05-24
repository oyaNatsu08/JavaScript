'use strict';

document.getElementById('submit').addEventListener('click', () => {
    //設定画面を非表示に
    document.getElementById('settings').style.display = 'none';

    //設定情報受け取り
    const total = document.getElementById('stone-sum').value;
    const take = document.getElementById('stone-take').value;
    const player = document.getElementById('player').value.split(',');
    const symbol = document.getElementById('symbol').value;

    
});