var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var campaignSchema = new Schema({
	'status': {
		type: String,
		enum: ['Borrador', 'Abierta', 'Cerrada']
	},
	'totalPrice': {type: Number, required: true },
	'totalMeters': Number,
	'minimumOrder' : Number,
	'countOrders': { type: Number, default: 0 },
	'countMeters': { type: Number, default: 0 },
	'manufactured': Boolean,
	'startAt': Date,
	'endsAt': Date,
	'userId' : {
	 	type: Schema.Types.ObjectId,
	 	ref: '{ref}',
		required: true
	}
});

campaignSchema.set('timestamps', true);

module.exports = mongoose.model('campaign', campaignSchema);
