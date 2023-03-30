const express = require('express');
const app = express();
const frequentData = require('./frequent.json'); // frequent.jsonファイルを読み込む

app.get('/api/frequent', (req, res) => {
  res.json(frequentData.data); // frequentDataオブジェクトのdataプロパティを返す
});

const port = 3000; // ポート番号を指定
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});