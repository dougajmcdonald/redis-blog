
var app = require('express')();
var http = require('http').Server(app);
var Redis = require('ioredis');

var redis = new Redis({
  port: 6380,
  host: 'dougmcdonald.redis.cache.windows.net',
  family: 4,
  password: 'mSSiiSPJ9tszsEmX0lSCZD96Bv/yX3lTb6RC/Z35ISo='
});

app.get('/', function(req, res) {
  redis.get('index', function (err, result) {
    console.log('err', err);
    console.log('result', result);
    res.send(result);
  });
});


