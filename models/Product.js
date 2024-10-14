const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  original_price: Number,
  discount_percentage: Number,
  image_url: String,
  timestamp: Number,
  currency: String,
  store: { type: mongoose.Schema.Types.ObjectId, ref: 'Store' },
  in_stock: Boolean,
  variants: [
    {
      id: Number,
      name: String,
      options: [String],
    }
  ]
});

module.exports = mongoose.model('Product', productSchema);
