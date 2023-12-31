const express = require('express');
const path = require('path');
const app = express();
const http = require('http');
const server = http.createServer(app);
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port);

console.log('App is listening on port ' + port);