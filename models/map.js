var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = require('./map');

var schema = new Schema({
    latLng: {type: Array, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

schema.post('remove', function(coords) {
    User.findById(coords.user, function(err, user) {
        user.coordsArray.pull(coords);
        user.save();
    });
});

module.exports = mongoose.model('Map', schema);
