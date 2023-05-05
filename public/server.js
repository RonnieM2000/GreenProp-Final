const express = require('express');
const app = express();

app.use(express.static('public'));


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/homepage.html');
});

app.get('/playerstats', function (req, res) {
  res.sendFile(__dirname + '/public/playerstats.html');
});

app.get('/props', function (req, res) {
  res.sendFile(__dirname + '/public/props.html');
});

app.get('/signin', function (req, res) {
  res.sendFile(__dirname + '/public/signin.html');
});

app.get('/signup', function (req, res) {
  res.sendFile(__dirname + '/public/signup.html');
});

app.get('/game', function (req, res) {
    res.sendFile(__dirname + '/public/game.html');
  });


const port = 3000;
app.listen(port, function () {
  console.log(`Server started on port ${port}`);
});