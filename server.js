var express = require("express");
var path = require("path");
var app = express();
// colocar las rutas de los recursos en primer lugar
app.use('/static', express.static(path.join(__dirname, 'node_modules')));
app.use('/static', express.static(path.join(__dirname,'assets')));
// seguido de las peticiones de los mismos, en este caso, llamando al archivo index
// puedo conseguir el resto de los recursos que necesito
app.get('/', (req, res) => {
  res.sendFile(__dirname+'/index.html');
});

app.listen(8080);
