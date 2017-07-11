var express = require("express");
var path = require("path");
var app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname+'/index.html');
});

app.listen(8080);

app.use('/static', express.static(path.join(__dirname, 'node_modules')));
app.use('/static', express.static(path.join(__dirname,'assets')));
