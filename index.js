const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

let app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) { 
    return res.json({ app: 'ebs-sample-app' });
});

app.get('/ping', function (req, res) { 
    return res.json({ pong: true });
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log('ok, im listeting on 3000');
});