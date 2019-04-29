//expressモジュールを読み込み
const express = require('express');
//expressアプリを生成
const app = express();
//ルート
const route = '/api/v1/list';
//ポート番号
const port = 3000;

app.get(route, (req, res) => {
  const data = {
    dishes: [
      {
        name: 'Fish and potatos',
        price: 800
      },
      {
        name: 'Fish and Tomato',
        price: 200
      },
      {
        name: 'Steak and potatos',
        price: 500
      }
    ]
  }
  res.json(data);
});

app.listen(port, () => {
  console.log('Listening on port: ' + port);
});
