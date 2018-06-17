const express = require('express');
const app = express();
const compression = require('compression');
const logger = require('./Logger.js');

app.use(compression());
app.use(express.static(__dirname+ '/game'));

app.get('/',
  function(req, res) {
    res.sendFile(__dirname + '/game/game.html', { user: req.user });
});

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    logger.info("Planner app listening at http://%s:%s", host, port)
 
 })