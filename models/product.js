const getDb = require('../util/database').getdb;

const Cart = require('./cart');
class Product {
  constructor(title, imageUrl, description, price) {

    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    const db = getDb();
    return db.collection('products').insertOne(this)
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }

  // static deleteById(id) {

  // }

  static fetchAll() {
    const db = getDb();
    return db.collection('products').find().toArray()
      .then(products => {
        console.log(products);
        // return products;
      })
      .catch(err => {
        console.log(err);
      });
  }

  static findById(id) {

  }
};

module.exports = Product;