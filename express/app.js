const express = require("express");

const app = express();

// 返却データ
const responseObjectData1 = {
  title: 'Objectのタイトル1です',
  subTitle: 'Objectのサブタイトル1です',
  bodyText: 'Objectの本文1です'
};
const responseObjectData2 = {
  title: 'Objectのタイトル2です',
  subTitle: 'Objectのサブタイトル2です',
  bodyText: 'Objectの本文2です'
};

app.get("/", (req, res) => {
  res.status(200).send("Express!!");
});

app.get("/api/objectdata1", function(req, res, next) {
  // CORS対応
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, access_token'
  );

  // データの返却
  res.json(responseObjectData1);
});

app.get("/api/objectdata2", function(req, res, next) {
  // CORS対応
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, access_token'
  );

  // データの返却
  res.json(responseObjectData2);
});

// ポート3000番でlistenする
app.listen(3000);
