// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file
// when someone visits http://localhost:3000/comments.

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  if (req.url === '/comments')
