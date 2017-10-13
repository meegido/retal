const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const orderSchema = new Schema({
    'meters': Number,
    'maker': { type: Schema.Types.ObjectId, ref: 'User' },
    'buyerUsername': String,
    'buyerEmail': String,
    'campaignId': String
  })
orderSchema.set('timestamps', true);

module.exports = mongoose.model('Order', orderSchema);
