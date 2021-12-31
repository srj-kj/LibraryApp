const express = require("express");
const app = new express();

const nav=[
    {
        link:"/books",

        name:"books"
    },
    {
        link:"/authors",
        
        name: "authors"
    },
    {
        link:"/admin",

        name:"Add Book"
    },
    
    {
        link:"/login",
        
        name: "Login"
    },
    {
        link:"/signup",
        
        name: "Signup"
    }
];
const booksRouter=require("./src/routes/booksRouter")(nav);
const authorRouter=require("./src/routes/authorRouter")(nav);
const adminRouter=require("./src/routes/adminRouter")(nav);
const loginRouter=require("./src/routes/loginRouter")(nav);
const signupRouter=require("./src/routes/signupRouter")(nav);

// app.use(express.static('./public'));
//app.use(express.static('./src/views'));
// const path = require('path');
//app.set('views',path.join(__dirname,'views'));
// app.set("view engine","ejs");

// app.set("views",__dirname+"/src/views");
//app.set('views', path.join(__dirname, 'views'));

//app.set('views', __dirname+ '/views');
// app.use('/books',booksRouter);
// app.use('/authors',authorRouter);
// app.use('/admin',adminRouter);
// app.use('/login',loginRouter);
// app.use('/signup',signupRouter);

app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use('/admin',adminRouter);
app.use('/signup',signupRouter);
app.use('/login',loginRouter);


    app.get('/', function(req,res){
        res.render( "index",
        { nav,
    title:"Library"});
    });

    
    

    app.listen(process.env.PORT || 5700);