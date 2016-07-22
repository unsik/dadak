var express  = require('express'),
    app = express();
/*
    Your middlewares or setups usually around here
*/
//API Router
var router = express.Router();// calling the outside routes 
var index = require('./routes/index').router;
app.use('/',index);

//start Server
var server = app.listen(52222,function(){
 
   console.log("Listening to port %s",server.address().port);
});
