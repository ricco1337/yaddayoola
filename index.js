
// step one
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');

// points to file(s)
const messageCtrl = require('./messageCtrl')

// makes sure express is defined and makes things run
var app = express();


// END POINTS, what to do with requests
app.get('/message', messageCtrl.queryMessage)
app.get('/paramMessage/:paramMessage', messageCtrl.paramMessage)

// start early to check if everything is working
app.listen(9000, () => {console.log("lloyd is listening")});
