const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const campaignSchema = new Schema({
	'status': {
		type: String,
		enum: ['abierta', 'cerrada', 'borrador']
	},
	'meterPrice': {type: Number, required: true },
	'totalMeters': {type: Number, required: true },
	'revenue': { type: Number, default: 0 },
	'minimumOrder' : { type: Number, default: 0 },
	'startAt': Date,
	'endsAt': Date,
	'userId' : { type: Schema.Types.ObjectId, ref: 'User', required: true },
	'fabricId': { type: Schema.Types.ObjectId, ref: 'Fabric', required: true },
	'orderId': [ { type: Schema.Types.ObjectId, ref: 'Order', required: true } ]
});

campaignSchema.set('timestamps', true);

module.exports = mongoose.model('campaign', campaignSchema);
