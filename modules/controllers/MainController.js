'use strict'

class MainController {
    async index (request, response) {
        try {
            response.render('main')
        } catch (err) {
            throw err
        }
    }
}

module.exports = new MainController()
