
var app = require('express')();
var http = require('http').Server(app);
var redis = require('redis');

var redisClient = new redis.createClient(
  6379,
  'dougmcdonald.redis.cache.windows.net',
  {
    auth_pass: 'mSSiiSPJ9tszsEmX0lSCZD96Bv/yX3lTb6RC/Z35ISo=',
    tls: {
      servername: 'dougmcdonald.redis.cache.windows.net'
    }
  }
);

app.get('/', function(req, res) {
  redisClient.get('index', function (err, result) {
    console.log('err', err);
    console.log('result', result);
    res.send(result);
  });
});


