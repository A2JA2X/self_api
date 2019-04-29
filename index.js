//expressモジュールを読み込み
const express = require('express');
// MongoDB用モジュール読み込み
const mongo = require('./mongo');
//expressアプリを生成
const app = express();
//ルート
const route = '/api/v1/list';
//ポート番号
const port = 3000;

// CORSを許可する
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get(route, (req, res) => {
  mongo.collection('item').find().toArray((err, docs) => {
    res.json(docs);
  });
});

app.listen(port, () => {
  console.log('Listening on port: ' + port);
});
