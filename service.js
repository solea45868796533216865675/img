const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// 托管根目录静态图片资源
app.use(express.static(__dirname));

// 首页路由返回完整商品网页（包含你提供的全部JS代码）
app.get('/', (req, res) => {
  const htmlPath = path.join(__dirname, 'Untitled-1(2).html');
  fs.readFile(htmlPath, 'utf8', (err, htmlStr) => {
    if (err) {
      res.send('页面文件缺失,请检查Untitled-1(2).html');
      return;
    }
    res.send(htmlStr);
  })
})

app.listen(port,()=>{
    console.log('服务启动：http://localhost:3000')
})
