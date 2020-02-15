'use strict'

require('dotenv').config()
const {join} = require('path')
const express = require('express')
const app = express()

const Routes = [
    require('./modules/routes/MainRoute')
]

app.use(Routes)

class Server {
    constructor () {
        this.host = process.env.HOST || '127.0.0.1'
        this.port = process.env.PORT || 5000
        this.isDev = process.env.NODE_ENV === 'development'
    }

    setupViews () {
        app.use(express.static('public'))
        app.set('views', join(__dirname, 'modules/views'))
        app.set('view engine', 'pug')
    }

    async start () {
        try {
            this.setupViews()
            app.listen(this.port, this.host, () => {console.log(`app listen ${this.host}:${this.port}`)})
        } catch (err) {
            throw err
        }
    }
}

new Server().start().catch(console.error)
