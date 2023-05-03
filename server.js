// Importing installed libraries that were installed via NPM
const express = require("express");
const app = express();



// const bodyparser = require("body-parser")
const bcrypt = require("bcrypt");

// Storing users info in array
const users = []
// app.use(bodyparser.json())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('view engine', 'ejs');


app.post("/login", (req, res) => {

    if(!req.body.email || !req.body.password){
        console.log(Users);
        res.render('/login', {message: "Please enter both Username and password"});
     } else {
        Users.filter(function(user){
           if(user.id === req.body.email && user.password === req.body.password){
              req.session.user = user;
              res.redirect('/protected_page');
           }
        });
        res.render('login', {message: "Invalid credentials!"});  
}
});


// Sign Up Function 
app.post("/register", async (req, res) => {
    try{
        const hashedPassword = bcrypt.hashSync(req.body.password,10)
        users.push({
            id: Date.now().toString(), 
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            password: hashedPassword
        })
        console.log(users);
        res.redirect("/login")
    } catch (e) {
        console.log(e);
        res.redirect("/register")
    }
})

// Routes
app.get('/index', (req, res) => {
    res.send('index')    
})

app.get('/login', (req, res) => {
    res.render('login')   
})

app.get('/register', (req, res) => {
    res.render('register')
})
// Routes End
//

const mysql = require("mysql");


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "deepu",
    database: "nodejs"
});

connection.connect(function(error){
    if (error) throw error
    else console.log("connected to the database successfully")
});


