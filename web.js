var express = require('express');

var app = express.createServer(express.logger());

var text = fs.readFileSync('index.html','utf-8');
var buffer = new Buffer('text','utf-8');
var reply = buffer.toString('utf-8', 0, 27);

app.get('/', function(request, response) {
  response.send(reply);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
