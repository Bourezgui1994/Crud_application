const express = require('express');

const route = express.Router();

const controller = require('../controller/controller')

/*
  @description home route 
  @ Method GET '/'

*/

route.get('/',(req,res)=>{
    res.render('index')
})

/*
  @description add user route 
  @ Method GET '/add_user'

*/
route.get('/add_user', (req,res)=>{
    res.render('add_user')
})

/*
  @description update user route 
  @ Method GET '/update_user'

*/
route.get('/update_user', (req,res)=>{
    res.render('update_user')
})

/*
  @description delete user route 
  @ Method GET '/delete_user'

*/

route.get('/delete_user', (req,res)=>{
    res.render('delete_user')
})

// route api 
route.post('/api/users',controller.create);
route.get('/api/users',controller.find);
route.put('/api/users/:id',controller.update);
route.delete('/api/users/:id',controller.delete);

module.exports = route;