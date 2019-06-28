const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const ejs = require('ejs');

// const cors = require('cors');
// app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.engine('html', ejs.__express);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.post('/save', function (req, res) {
  let data = {
    body: req.body
  };
  res.render('save', data);
});

/* 範例
app.post('/', function (req, res) {
  console.dir(req.body);
  res.send('OK');
});

app.get('/me', function (req, res) {
  res.send('<h1>我的FB</h1>' + 'https://www.facebook.com/witkaiy');
});

app.get('/who/:name?', function (req, res) {
  var name = req.params.name;
  res.send(name + ' 在這邊歐');
});

app.get('/who/:name?/:title?', function (req, res) {
  var name = req.params.name;
  var title = req.params.title;
  res.send('<p>名稱: ' + name + '<br>值稱: ' + title + '</p>');
});

app.get('*', function (req, res) {
  res.send('沒有東西噢');
});
*/

var port = 88;
var server = app.listen(port, function () {
  console.log('Server Listening on port ' + port);
});   