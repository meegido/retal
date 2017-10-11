const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const campaignSchema = new Schema({
	'status': {
		type: String,
		enum: ['abierta', 'cerrada', 'borrador']
	},
	'meterPrice': {type: Number },
	'totalMeters': {type: Number },
	'revenue': { type: Number, default: 0 },
	'minimumOrder' : { type: Number, default: 0 },
	'startAt': Date,
	'endsAt': Date,
	'maker': { type: Schema.Types.ObjectId, ref: 'User' },
	'fabric': { type: Schema.Types.ObjectId, ref: 'Fabric' },
	'order': [{ type: Schema.Types.ObjectId, ref: 'Order' }]
});

campaignSchema.set('timestamps', true);

module.exports = mongoose.model('campaign', campaignSchema);
