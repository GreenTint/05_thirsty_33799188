// Create a new router
const express = require("express");
const router = express.Router();
var shopData = {shopName: "Beverage Haven", 
                productCategories:["Beer", "Wine", "Soft Drinks", "Hot Drinks"],
                shops: [
                    { name: "Central Shop", manager: "Alice Green", address: "12 High Street" },
                    { name: "Riverside Shop", manager: "Ben Jones", address: "45 River Road" },
                    { name: "Mall Shop", manager: "Clara Lee", address: "7 Market Plaza" }
                    ]};   
            


// Handle the main routes
router.get("/", (req, res) => {
    res.render("index.ejs", shopData)
}); 

router.get("/about", (req, res) => {
    res.render("about.ejs", shopData)
}); 

router.get("/search", (req, res) => {
    res.render("search.ejs" , shopData)
}); 

router.get('/search_result', function (req, res) {
    // TODO: search in the database
    res.send("You searched for " + req.query.search_text + " in " + req.query.category);
 });

router.get("/register", (req,res) => {
    res.render("register.ejs",  shopData); 
}); 
 
router.post("/registered", (req,res) => { 
    res.send(' Hello '+ req.body.first + ' '+ req.body.last +' you are now registered!');   
}); 

// Survey form route
router.get('/survey', (req, res) => {
  res.render('survey.ejs', shopData);
});

// Handle survey submission
router.post('/survey', (req, res) => {
  const surveyData = {
    first: req.body.first,
    surname: req.body.surname,
    email: req.body.email,
    age: req.body.age,
    drinkCategory: req.body.drinkCategory,
    student: req.body.student ? "Yes" : "No"
  };

res.render('surveyResult.ejs', { surveyData, shopName: shopData.shopName });
});


// Export the router object so index.js can access it
module.exports = router;
