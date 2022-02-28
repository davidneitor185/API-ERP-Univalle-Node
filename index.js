const express =  require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');


app.use(cors());

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//routers
app.use(require('./routers/index'));


//settings
app.set('port',process.env.PORT || 5000) ;
app.set('json spaces', 2);


//starting server
app.listen(app.get('port'), () => console.log(`Server running on port ${app.get('port')}`));
