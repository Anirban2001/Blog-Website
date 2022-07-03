const express = require("express");

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen for request
app.listen(3000);

app.get('/', (req, res) => {

    // res.send('<h1>home page</h1>');
    res.sendFile('./views/index.html',{root:__dirname});
});

app.get('/about', (req, res) => {

    // res.send('<h1>about page</h1>');
    res.sendFile('./views/about.html',{root:__dirname});
});

//redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
})

// 404 page
app.use((req, res) =>{
    res.status(404).sendFile('./views/404.html',{root:__dirname});
})