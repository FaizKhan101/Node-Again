const mongoose = require("mongoose")

const Schema = mongoose.Schema

const productSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})



// const { ObjectId } = require("mongodb");
// const db = require("../util/database")

// class Product {
//   constructor(title, imageUrl, price, description, id, userId) {
//     this.title = title;
//     this.imageUrl = imageUrl;
//     this.price = price;
//     this.description = description
//     this._id = id;
//     this.userId = userId;
//   }

//   save() {
//     if (this.id) {
//       return db.getDb().collection("products").updateOne({_id: new ObjectId(this.id)}, {$set: this})
//     }else {
//       return db.getDb().collection("products").insertOne(this)
//     }
//   }

//   static fetchAll() {
//     return db.getDb().collection("products").find().toArray()
//   }

//   static findById(id) {
//     return db.getDb().collection("products").findOne({_id: new ObjectId(id)})
//   }

//   static deleteById(id) {
//     return db.getDb().collection("products").deleteOne({_id: new ObjectId(id)})
//   }
// }

// module.exports = Product