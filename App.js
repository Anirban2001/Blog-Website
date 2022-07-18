const express = require("express");
const morgan = require('morgan');
const mongoose = require('mongoose')
const Blog = require('./models/blog')

// express app
const app = express();

//connect to mondodb
const dbURI = 'mongodb+srv://Anirban:Anirban123@blogproject.sia4gcs.mongodb.net/node-tuts?retryWrites=true&w=majority';

mongoose.connect(dbURI,{useNewUrlParser: true, useUnifiedTopology: true}) 
.then((result) => app.listen(3000))
.catch((err) => console.log(err))

// register view engine is used to inject dynamic data into the webpage
app.set('view engine', 'ejs');
// app.listen(3000)

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
app.use(express.urlencoded({ extended: true })) // this is for accepting form data
app.use(morgan('dev'));

// mongoose and mongo sendbox routes
// app.get('/add-blog', (req, res) =>{
//     const blog = new Blog({
//         title:'new blog 1',
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

// app.get('/all-blogs',(req, res) =>{
//     Blog.find()
//     .then((result) =>{
//         res.send(result)
//     })
//     .catch((err) =>{
//         console.log(err)
//     })
// })

// app.get('/single-blog',(req, res) =>{
//     Blog.findById('62cbfe4b1e8ace91f585e350')
//     .then((result) =>{
//         res.send(result)
//     })
//     .catch((err) =>{
//         console.log(err)
//     })
// })


app.get('/', (req, res) => {
    // const blogs = [
    //     {title: 'Anirban finds eggs', snippet:'Lorem ipsum dolor sit amet consectetur'},
    //     {title: 'Bunu finds stars', snippet:'Lorem ipsum dolor sit amet consectetur'},
    //     {title: 'Maa finds diamond', snippet:'Lorem ipsum dolor sit amet consectetur'},
    // ];
    // // res.send('<h1>home page</h1>');
    // res.render('index',{title:'Home', blogs});
    res.redirect('/blogs')
});

app.get('/about', (req, res) => {

    // res.send('<h1>about page</h1>');
    res.render('about',{title:'About'});
});app.get('/blogs/create', (req, res) => {
    res.render('create',{title:'Create a new blog'})
})

// blog routes
app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt:-1 })
    .then((result) =>{
        res.render('index',{title:'All Blogs', blogs:result});
    })
    .catch((err) =>{
        console.log(err)
    })
})

app.post('/blogs', (req, res) =>{
    const blog = new Blog(req.body)
    blog.save()
    .then((result) =>{
        res.redirect('/blogs')
    })
    .catch((err) =>{
        console.log(err)
    })
})

app.get('/blogs/:id', (req, res) =>{
    const id = req.params.id;
    Blog.findById(id)
    .then((result) =>{
        res.render('details', {blog: result, title: 'Blog Details'})
    })
    .catch((err) =>{
        console.log(err)
    })
})

app.delete('/blogs/:id', (req, res)=>{
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
    .then((result) =>{
        res.json({ redirect: '/blogs'})
    })
    .catch((err) =>{
        console.log(err)
    })
})

app.get('/blogs/create', (req, res) => {
    res.render('create',{title:'Create a new blog'})
})

// 404 page
app.use((req, res) =>{
    res.status(404).render('404', {title:'404'})
});