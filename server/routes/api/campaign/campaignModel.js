var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var campaignSchema = new Schema({
	'status' : Boolean,
	'price' : Number,
	'delivery' : Number,
	'redLine' : Number,
	'minimumOrder' : Number,
	'partners' : Number,
	'user' : {
	 	type: Schema.Types.ObjectId,
	 	ref: '{ref}'
	}
});

module.exports = mongoose.model('campaign', campaignSchema);
