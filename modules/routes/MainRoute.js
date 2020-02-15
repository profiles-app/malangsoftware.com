'use strict'

const express = require('express')
const Router = express.Router()

const MainController = require('../controllers/MainController')

Router.get('/', MainController.index)

module.exports = Router
