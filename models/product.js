const { ObjectId } = require("mongodb");
const db = require("../util/database")

class Product {
  constructor(title, imageUrl, price, desccription) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.desccription = desccription
  }

  save() {
    return db.getDb().collection("products").insertOne(this)
  }

  static fetchAll() {
    return db.getDb().collection("products").find().toArray()
  }

  static findById(id) {
    return db.getDb().collection("products").findOne({_id: new ObjectId(id)})
  }
}

module.exports = Product