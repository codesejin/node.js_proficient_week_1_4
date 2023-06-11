const express = require('express');
const app = express();
const port = 3000;

const goodsRouter = require("./routes/goods");
const cartsRouter = require("./routes/carts.js");

const connect = require("./schemas");
connect();


app.use(express.json());
// urlencoded : 브라우저에 접속했을때 폼데이터를 받을 수  있도록 만듬
app.use(express.urlencoded({ extended: false }));
// 전역 미들웨어에 이 assets을 추가하면 api를 사용하기 전에 있는 해당 미들웨어에서 assets폴더를 먼저 찾아보고
// 만약에 원하는 파일이 없다면 그 다음 api를 찾는 미들웨어로 간다
app.use(express.static("assets"));
app.use("/api", [goodsRouter, cartsRouter]);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(port, '포트로 서버가 열렸어요!');
});