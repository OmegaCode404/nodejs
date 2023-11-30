const express = require('express');
const morgan = require('morgan');
const { handlebars } = require('express-handlebars');
const app = express();
const path = require('path');
const port = 3000;
const route = require('./routes');
const db = require('./config/db');

// Connect to DB
db.connect();

// route

app.use(express.static(path.join(__dirname, 'public')));

route(app);

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(methodOverride('_method'))

// HTTP logger
// app.use(morgan('combined'));

//Template engine
// app.engine(
//     'hbs',
//     handlebars({
//         extname: '.hbs',
//         helpers:{
//              sum: (a, b) => a + b,
//         }
//     }),
// );

app.set('view engine', 'hbs');

console.log('views', path.join(__dirname, 'resources', 'views'));

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
