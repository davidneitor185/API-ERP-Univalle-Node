const express =  require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//routers
app.use(require('./routers/index'));

//settings
app.set('port',process.env.PORT || 5000) ;
app.set('json spaces', 2);


//app.use(express.urlencoded({extended: false}));

//starting server
app.listen(app.get('port'), () => console.log(`Server running on port ${app.get('port')}`));
