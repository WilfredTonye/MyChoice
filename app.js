var express = require("express");
var app = express();

app.set("view engine", "ejs");
const knex = require('knex')({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      port : 5432,
      user : 'postgres',
      password : '123456789',
      database : 'mychoice'
    },
  });

  app.use(express.static(__dirname + '/Public'))
  //routes
//home route
app.get('/', (req,res) => {    
    res.render("index")
})

//connexions routes

//login route
app.get('/login', (req,res) => {    
    res.render("Login")
})

//signup route
app.get('/signup', (req,res) => {    
    res.render("Signup")
})

//admin route
app.get('/admin', (req,res) => {
    knex
    .select()
    .from("Product")
    .then((results) =>{
    res.render("Admin", {Product: results})
})
});

//add-prduct route
app.get('/add-product', (req,res) => {
    knex
    .select()
    .from("Product")
    .then((results) =>{
    res.render("AddProduct", {Product: results})
})
});

//customers route
app.get('/users', (req,res) => {
    knex
    .select()
    .from("users")
    .then((results) =>{
    res.render("Customers", {Users: results})
})
});

//menu route
app.get('/menu', (req,res) => {
    res.render("Menu")
})

//reservation route
app.get('/reservation', (req,res) => {
    res.render("Reservation")
})

app.listen(2000, () => {
  console.log('listening on port 2000.......')
});