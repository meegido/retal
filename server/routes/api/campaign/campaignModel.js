var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var campaignSchema = new Schema({
	'status': {
		type: String,
		enum: ['draft', 'open', 'close']
	},
	'totalPrice': {type: Number, required: true },
	'totalMeters': Number,
	'minimumOrder' : Number,
	'countOrders': Number,
	'metersSoldPerOrder': Number,
	'manufactured': Boolean,
	'startAt': Date,
	'endAt': Date,
	'userId' : {
	 	type: Schema.Types.ObjectId,
	 	ref: '{ref}',
		required: true
	}
});

campaignSchema.set('timestamps', true);

module.exports = mongoose.model('campaign', campaignSchema);
