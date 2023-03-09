var express = require("express");
const session = require('express-session');
var formidable = require('formidable');
var bodyParser = require('body-parser')
var app = express();
var morgan = require('morgan');
const { Product, where } = require("./models/Product");
const { Category } = require("./models/Categories");
const { Country } = require("./models/Country");
const { UniqueConstraintError, Op } = require("sequelize");

app.set("view engine", "ejs") 

  app
  .use(express.static(__dirname + '/Public'))
  .use(morgan('dev'))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: true })) // Configurer Express pour traiter les requêtes POST envoyés par le formulaire EJS 

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
    Product.findAll()
    .then(Products =>{
        res.render("Admin", {Products})
    })
    .catch(error => res.status(400).json({message:error.message}))
})


//add-prduct route
app.get('/create', (req,res) => {
    Category.findAll()
    .then(Categories => {
        res.render("forms/AddProduct", {Categories})
    })
    .catch(error => res.status(400).json({message:error.message}))
});

//search route
app.post('/search',(req,res)=> {
        let product_name = req.body.product_name;
        Product.findAndCountAll({
            where:{
                product_name: {
                    [Op.like]:`%${product_name}%`
                }
            }
        })
        .then(({count,rows}) => {
            res.render("Search",{count, rows})
        })
        .catch(error => res.status(400).json({message: error.message}))
})

app.post('/create',async(req,res) => {
    let product_name = req.body.product_name
    let product_surname = req.body.product_surname
    let product_image = req.body.product_image
    let description = req.body.description
    let quantity = req.body.quantity
    let country = req.body.country
    let price = req.body.price
        Product.create({
           product_name:product_name,
           product_surname:product_surname,
           description:description,
           product_image:product_image,
           quantity:quantity,
           country:country,
           price:price
       })
       .catch(error => {
        if(error instanceof UniqueConstraintError){
            res.status(400).json({message: error.message, data: error})
        }
       })
       res.redirect("admin")
      
})

//edit-prduct route
app.get('/admin/:id/edit', (req,res) => {
    const id = parseInt(req.params.id)
    Product.findByPk(id)
    .then(Product => {
        res.render("forms/EditProduct", {Product})
    })
    .catch(error => res.status(400).json({message:error.message}))

})

app.post('/admin/:id/edit',(req,res) => {
  
    const id = parseInt(req.params.id)
    Product.update(req.body, {
        where: { id: id}
    })
    .then(() => res.redirect("admin"))
    .catch(error => res.status(400).json({message:error.message})) 

})

// delete product

app.get('/delete/:id', (req,res)=>{
    const id = parseInt(req.params.id)
    Product.findByPk(id).then(Product=>{
        Product.destroy({
            where: {id: Product.id}
        })
        .then(() => redirect("admin"))
        .catch(error => res.status(400).json({message:error.message}))
    })

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