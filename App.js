const express = require("express");
const morgan = require('morgan');
const mongoose = require('mongoose')
const Blog = require('./models/blog')

// express app
const app = express();

//connect to mondodb
// const dbURI = 'mongodb+srv://Anirban_2001:Babansonu2001@blogproject.sia4gcs.mongodb.net/?retryWrites=true&w=majority';
// mongoose.connect(dbURI) //{useNewUrlParser: true, useUnifiedTopology: true}
// .then((result) => app.listen(3000))
// .catch((err) => console.log(err))

// register view engine is used to inject dynamic data into the webpage
app.set('view engine', 'ejs');
app.listen(3000)

// app.use((req, res, next) =>{
//     console.log('new request made:');
//     console.log('host: ',req.hostname);
//     console.log('path: ',req.path);
//     console.log('method: ',req.method);
//     next();
// });

// app.use((req, res, next) =>{
//     console.log('in the next middleware');
//     next();
// });

//middleware and static files
app.use(express.static('public'));

app.use(morgan('dev'));

// mongoose and mongo sendbox routes
// app.get('/add-blog', (req, res) =>{
//     const blog = new Blog({
//         title:'new blog 2',
//         snippet: 'about my new blog',
//         body: 'more about my new blog'
//     });

//     blog.save()
//     .then((result) =>{
//         res.send(result)
//     })
//     .catch((err) =>{
//         console.log(err)
//     })
// })


app.get('/', (req, res) => {
    const blogs = [
        {title: 'Anirban finds eggs', snippet:'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Bunu finds stars', snippet:'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Maa finds diamond', snippet:'Lorem ipsum dolor sit amet consectetur'},
    ];
    // res.send('<h1>home page</h1>');
    res.render('index',{title:'Home', blogs});
});

app.get('/about', (req, res) => {

    // res.send('<h1>about page</h1>');
    res.render('about',{title:'About'});
});

app.get('/blogs/create', (req, res) => {
    res.render('create',{title:'Create a new blog'})
})

// 404 page
app.use((req, res) =>{
    res.status(404).render('404', {title:'404'})
});