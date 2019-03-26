const http = require('http');
const path = require('path');
const express = require('express');

const routes = require('./routes/index');

const app = express();
app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

const server = http.createServer(app);
server.listen(process.env.PORT || 3000);

