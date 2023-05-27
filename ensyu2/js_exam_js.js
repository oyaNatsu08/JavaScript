const { createApp } = Vue

createApp({
  data() {
    return {
      gameInfos: [],
      newTotal: '',
      newTake: '',
      newPlayers: [],
      newSymbol: '',
      isSettings: true,
      isInfo: false,
      isResult: false,
      leftStone: '',
      leftCount: '',
      curentPlayer: '',
      curentTake: '',
      winner: '',
      loser: '',
      index: 0,
      text: '----------------------------------------------------------------',
    }
 },
 methods: {
  gameStart() {
    this.isSettings = false;
    this.isInfo = true;
    
    this.gameInfos.push(
      {
        total: this.newTotal,
        take: this.newTake,
        players: this.newPlayers.split(','),
        symbol: this.newSymbol,
      }
    )
    
    this.leftStone = this.repeat(this.newSymbol, this.newTotal);
    this.leftCount = this.newTotal;

  },
  repeat(string, count) {
      
      let result = ""; // 空の文字列で初期化
    
      for (let i = 0; i < count; i++) {
        result += string; // 文字列を連結して結果に追加
      }
      return result; // 結果を返す
  },
  repeatReverse(string, count) {
    let result = string;

    for (let i = 0; i < count; i++) {
      result = result.replace(this.newSymbol, '');
    }
    return result;
  },
  take() {
    this.leftCount -= this.curentTake;
    const players = this.newPlayers.split(',');
  
    if (this.leftCount <= 0) {
        this.isInfo = false;
        this.isResult = true;
        this.loser = players[this.index];
        this.index--;
      if (this.index === -1) {
        this.index = players.length - 1;
      }
      this.winner = players[this.index];
    }
    this.leftStone = this.repeatReverse(this.leftStone, this.curentTake);
    this.index++;
    this.index = this.index % players.length;
    // console.log(players);
    // console.log('index', this.index);

  },
  validateTotal() {
    if (this.newTotal < 10 || this.newTotal > 100) {
      this.newTotal = '';
    }
  },
  validateTake() {
    if (this.newTake < 1 || this.newTake > 10) {
        this.newTake = '';
    }
  },
  validateCurentTake() {
    if (this.curentTake < 1 || this.curentTake > this.newTake) {
      this.curentTake = '';
    }
  },
}
}).mount('#app')

// 'use strict';

// document.getElementById('submit').addEventListener('click', () => {
//   //設定画面を非表示に
//   document.getElementById('main').style.display = 'none';

//   //設定情報受け取り
//   const total = document.getElementById('stone-sum').value;
//   const take = document.getElementById('stone-take').value;
//   const player = document.getElementById('player').value.split(',');
//   const symbol = document.getElementById('symbol').value;

//   //入力情報を表示
//   const div1 = document.getElementById('div1');

//   const newP0 = document.createElement('p');
//   newP0.classList = 'text';
//   newP0.textContent = '---------------------------------';
//   div1.appendChild(newP0);

//   const newP1 = document.createElement('p');
//   newP1.classList = 'text';
//   newP1.textContent = '石取りゲームを開始します！';
//   div1.appendChild(newP1);

//   const newP2 = document.createElement('p');
//   newP2.classList = 'text';
//   newP2.textContent = `残りの石の数： ${total}`;
//   div1.appendChild(newP2);

//   const newP3 = document.createElement('p');
//   newP3.classList = 'text';
//   newP3.textContent = `1度に取れる石の数： ${take}`;
//   div1.appendChild(newP3);

//   const newP4 = document.createElement('p');
//   newP4.classList = 'text';
//   newP4.textContent = `参加プレイヤー： ${player}`;
//   div1.appendChild(newP4);

//   const newP5 = document.createElement('p');
//   newP5.classList = 'text';
//   newP5.textContent = `石の記号： ${symbol}`;
//   div1.appendChild(newP5);

//   const newP6 = document.createElement('p');
//   newP6.classList = 'text';
//   newP6.textContent = '---------------------------------';
//   div1.appendChild(newP6);

//   //石の残りの数やプレイヤーを表示
//   const div2 = document.getElementById('div2');
//   const newP7 = document.createElement('p');
//   newP7.classList = 'text';
//   newP7.textContent = '残り：' + repeatString(symbol, total);
//   div2.appendChild(newP7);

//   const newP8 = document.createElement('p');
//   newP8.classList = 'text';
//   newP8.textContent = '---------------------------------';
//   div2.appendChild(newP8);

//   gameMain(player, div2, total, take);
// });

// //石の残りの数を表示
// function repeatString(string, count) {
//   let result = ""; // 空の文字列で初期化

//   for (let i = 0; i < count; i++) {
//     result += string; // 文字列を連結して結果に追加
//   }

//   return result; // 結果を返す
// }

// //ゲームのメイン部分(ループ処理)
// function gameMain(player, div2, total, take) {
//   const newP9 = document.createElement('p');
//   newP9.classList = 'text';
//   let i = 0;
//   while (total > 0) {
//     i = i % player.length;

//     newP9.textContent = player[i] + 'の番';
//     div2.appendChild(newP9);
    
//     i++;
//   }
// }
