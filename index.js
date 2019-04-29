//expressモジュールを読み込み
const express = require('express');
//expressアプリを生成
const app = express();
//ルート
const route = '/api/v1/list';
//ポート番号
const port = 3000;

app.listen(port, () => {
  console.log('Listening on port: ' + port);
});
