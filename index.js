var express = require('express')
var app = express()
var server = require('http').Server(app);
var io = require('socket.io')(server);


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.use(express.static(__dirname + '/dist'));

io.on('connect', function (socket) {
  console.log('Client is connected, pushing data...');
  setInterval(function(){
    socket.emit('post', { post: { name: 'dan', avatar: 'http://lorempixel.com/400/200/', age:'29' }});
  }, 3000);
});

server.listen(3000)
