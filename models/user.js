const { Sequelize } = require("sequelize")

const sequelize = require("../util/database")

const User = sequelize.define("User", {
    id: {
        type: Sequelize.STRING,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING
})

module.exports = User