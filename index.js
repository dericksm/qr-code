const express = require('express')
const app = require('express')();
const http = require('http').Server(app)
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.redirect('index.html');
});

http.listen(3000, function () {
  console.log('listening on *:3000');
});
