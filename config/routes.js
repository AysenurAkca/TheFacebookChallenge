const express = require('express')
const route = express.Router()
const feedController = require('../controller/feedController') 

route.get('/feed', feedController.mainPage)
route.post('/feed', feedController.addNewPost)
route.get('/feed/:id', feedController.detailPage)
route.post('/feed/delete/:id', feedController.deleteFeed)
route.get('/feed/edit/:id', feedController.editFeedPage)
route.post('/feed/edit/:id', feedController.editFeed)

module.exports = route;