const express = require('express');
const morgan = require('morgan');
const cors = require('cors');


const app = express();
require("./db");

// settings
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes
//app.use(require('./routes'));
app.use('/api/v1/info', require('./routes/estudiantes'));

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
