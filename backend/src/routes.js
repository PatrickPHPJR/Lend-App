const express = require('express');
const routes = express.Router();

// controllers
const userController = require('./controllers/UserController');
const itemController = require('./controllers/ItemController');


// routes.get('/', userController.index);
routes.post('/register', userController.create);

routes.get('/items', itemController.index);
routes.post('/item', itemController.create);
routes.put('/item/:item_id', itemController.update);
routes.delete('/item/:item_id', itemController.delete);

module.exports = routes;