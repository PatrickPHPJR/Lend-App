const express = require('express');
const routes = express.Router();

// controllers
const userController = require('./controllers/UserController');
const itemController = require('./controllers/ItemController');
const sessionController = require('./controllers/SessionController');

routes.get('/', userController.index);
routes.post('/register', userController.create);
routes.post('/login', sessionController.create);
routes.get('/session', sessionController.index);

routes.get('/items', itemController.index);
routes.get('/item/:item_id', itemController.getItem);
routes.post('/item', itemController.create);
routes.put('/item/:item_id', itemController.update);
routes.delete('/item/:item_id', itemController.delete);

module.exports = routes;