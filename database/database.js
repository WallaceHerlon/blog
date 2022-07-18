const Sequelize = require('sequelize')

const connection = new Sequelize('guiapress', 'root', '83310572', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection
