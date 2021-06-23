const express = require ('express');
const routes = require('./routes');
const cookieParser = require('cookie-parser');

//Express app
const app = express();
const PORT = process.env.PORT || 3000;


// Middleware
app.use(express.urlencoded({ extended: true })); // HTML form
app.use(express.json({ extended: true })); // Parse json
app.use(cookieParser()); // Parse cookies

// Static
app.use(express.static('../frontend'));

// Routing
app.use(routes);

app.listen(PORT, () => console.info('App kører på port: ' + PORT ))