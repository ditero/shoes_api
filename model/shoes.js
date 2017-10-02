const mongoose = require('mongoose');
module.exports = function(mongoURL) {
  // body...
  mongoose.Promise = global.Promise
  mongoose.connect(mongoURL)

  const shoeSchema = mongoose.Schema({
    id: Number,
    brand: String,
    size: Number,
    color: String,
    price: Number,
    in_stock: Number,
    image: {
      type: String,
      default:'/images/tusoni.jpg'
    }
  })

  shoeSchema.index({
    id: 1
  }, {
    unique: true
  })
  const Catalogue = mongoose.model('Catalogue', shoeSchema)
  return {
    Catalogue
  }
};
