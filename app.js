const express = require("express");
const app = express();
const morgan = require('morgan')
const users = require('./database/Sequelize-Users')
const products = require('./database/Sequelize-Product')
const {product} =require('./database/Sequelize-Product')
const category = require('./database/Sequelize-Categories');
const Product = require("./models/Product");

app.set("view engine", "ejs");

  app
  .use(express.static(__dirname + '/Public'))
  .use(morgan('dev'))
  
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
    product.findAll()
    .then(_ => console.log('les produuits ont ete trouves'))
      res.render("Admin", {product})
})



//add-prduct route
app.get('/add-product', (req,res) => {
    res.render("AddProduct")
});

//edit-prduct route
app.get('/edit-product', (req,res) => {
    res.render("EditProduct")
})

//customers route
app.get('/users', (req,res) => {
    res.render("Customers")
})



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