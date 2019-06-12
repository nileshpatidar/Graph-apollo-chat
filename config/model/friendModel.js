var mongoose = require("./../dbUrl");
var Schema = mongoose.Schema;
var friendSchema = new Schema({
    friend_id: String,
    user_id: String,
    accept_status: {
        type: String,
        enum: ['Accepted', 'Pending','Unfriend', 'Blocked'],
        default: 'Pending'
    },
}
,{
    timestamps: true
});

module.exports = mongoose.model("friendrequests", friendSchema)