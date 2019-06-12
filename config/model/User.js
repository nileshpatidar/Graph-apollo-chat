var mongoose =require("./../dbUrl");
var Schema = mongoose.Schema;
var User =new Schema({
    username:String,
    email:String,
    phone:Number,
    password:String,
    verify: { type: Boolean, default: false },
    otp: { type: Number }
});

module.exports=mongoose.model("users",User)