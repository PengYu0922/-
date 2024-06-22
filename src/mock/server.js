import express from 'express';
import cors from 'cors';
import { data } from './index.js';

var app = express();

// 使用 cors 中间件
app.use(cors());

// 处理根路径的请求
app.get('/', function(req, res) {
  res.send('后端服务器已搭建');
});

// 处理 /music 路径的请求
app.get('/music', function(req, res) {
  // 这里使用 mock 数据
  res.json(data);
});

app.listen(8080, function() {
  console.log('Server is running on port 8080');
});
