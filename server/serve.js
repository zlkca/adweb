const http = require('http');
const express = require('express')
const app = express()
const cfg = require('./config')

const SERVER_NAME = 'adweb'
const SERVER_PORT = 5001

// body-parser does not handle multipart bodies
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false, limit: '1mb' }));

// parse application/json
app.use(bodyParser.json({ limit: '1mb' }));

//----------------------------------------------------------------------------------------
// The cookie parser used before the session, this order is required for sessions to work.
// By default maxAge is null, meaning the cookie becomes a browser-session cookie, that is 
// when the user closes the browser the cookie (and session) will be removed.
// path --- cookie path
// expire --- absolute expiration date (Date object)
// maxAge --- relative max age of the cookie from when the client receives it (mill seconds)
// secure --- true or false
// domain --- domain for the cookie
// httpOnly --- true or false
//-----------------------------------------------------------------------------------------
app.use(cookieParser('mysecret', {maxAge: 1200*1000}));

//console.log(__dirname + '/../dist');

app.use(express.static(__dirname + '/../dist'));


//------------------------------------------------------------------------------------------
//   Feedback module
//------------------------------------------------------------------------------------------
var Feedback = require('./services/feedbacks');
var fb = Feedback();
app.post('/feedbacks', fb.insert);


//app.listen(SERVER_PORT, () => console.log('Server setup'))
app.set('port', process.env.PORT || SERVER_PORT)

var server = http.createServer(app)
server.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'))
})