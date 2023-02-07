const { urlencoded } = require('express');
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const homeRoutes = require('./routes/home');
const userFoundRoutes = require('./routes/userFound');
const userNotFoundRouters = require('./routes/userNotFound');

const app = express();

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.urlencoded({extended: false}));
app.use('/',homeRoutes);
app.use('/userFound/*',userFoundRoutes);
app.use('/userNotFound/*',userNotFoundRouters);

const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
    console.log(`Server is running on port ${PORT}`);
});