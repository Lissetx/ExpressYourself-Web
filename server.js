const express = require('express');
const fs = require('fs');
const { reset } = require('nodemon');
const pug = require('pug');
const config = require("./public/config.json");


const server = express(); 
const port = 3000;


server.use(express.json());

server.use('/', express.static('public'));

/**
 * After the view engine is set, you don’t have to specify the engine or
 *  load the template engine module in your app; Express loads the module internally, as shown below
 * https://expressjs.com/en/guide/using-template-engines.html
 */
server.set('view engine', 'pug');  
const urlencodedParser = express.urlencoded({
  extended: true
});
server.get('/order', (req, res, next) =>{
  res.render('order',{config}); 
});
server.get('/', (req, res, next) =>{
  res.render('home',{config}); 
});
server.get('/features', (req, res, next) =>{
  res.render('features',{config}); 
});


server.post('/order', urlencodedParser, (req, res, next) => {
  
  const { name, address, phone, email } = req.body;
  
  if (!name || !address || !phone || !email) {
    res.json({
      message: "Please fill all the fields"
    });
  } else {
    fs.appendFile('orders.txt', `${name}, ${address}, ${phone}, ${email}\n`, (err) => {
      if (err) {
        res.json(err);
      } else {
      res.json({
          message: "Order placed successfully"
        });
      } 
    });
  }
});

server.listen(port, (err) =>{
  if (err) throw err;
  console.log(`Server is listening on port ${port}....`);
});

