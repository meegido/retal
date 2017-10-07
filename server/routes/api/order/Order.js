const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const orderSchema = new Schema({
    'meters': Number,
    'userId': { type: Schema.Types.ObjectId, ref: 'User' }
})
orderSchema.set('timestamps', true);

module.exports = mongoose.model('Order', orderSchema);
