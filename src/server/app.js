var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var config = require('./config.js');


var port = process.env.PORT || 8888;

var environment = process.env.NODE_ENV;
//mongoose.connect(config.MONGOOSE_CONNECTON);

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());
//app.use('/api', expressJWT({secret: process.env.SECRET || config.TOKEN_SECRET}));

console.log('About to crank up node');
console.log('PORT=' + config.PORT);
console.log('NODE_ENV=' + environment);


switch (environment) {
    case 'build':
        console.log('** BUILD **');
        app.use(express.static('./build/'));
         app.use(express.static('./build/images/'));
         app.use(express.static('./build/js/'));
         app.use('*', express.static('./build/index.html'));
        break;
    default:
        console.log('** DEV **');
        app.use(express.static('./src/client/'));
        app.use(express.static('./src/'));
        app.use(express.static('./'));
        app.use('*', express.static('./src/client/index.html'));
        break;
}


app.listen(config.PORT, function() {
    console.log('Express server listening on port ' + config.PORT);
    console.log('env = ' + app.get('env') +
                '\n__dirname = ' + __dirname +
                '\nprocess.cwd = ' + process.cwd());
});
