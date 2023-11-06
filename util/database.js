const mongoDb = require("mongodb")

const MongoClient = mongoDb.MongoClient

let database;

const mongoConnect = async () => {
    const client = await MongoClient.connect("mongodb://localhost:27017")
    database = client.db("shop")
}

const getDb = () => {
    if (!database) {
    throw new Error("Could't connect to the database!")
    }
    return database
}

module.exports = {
    mongoConnect: mongoConnect,
    getDb: getDb
}