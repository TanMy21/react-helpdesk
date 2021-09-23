const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const passportLocalMongoose = require("passport-local-mongoose")

const Session = new Schema({
    refreshToken:{
        type: String,
        default:""
    }
});

const User = new Schema({
    firstName: {
        type: String,
        default: "",
        required: true
    },
    LastName: {
        type: String,
        default: "",
        required: true
    },
    email: {
        type: String,
        default: "",
        required: true
    },
    password: {
        type: String,
        default: "",
        required: true
    },
    authStrategy: {
        type: String,
        default: "local",
        required: true
    },
    refreshToken: {
        type: [Session]
    }
    },{
        timestamps: true
    });


//Remove refreshToken from the response
User.set("toJSON", {
    transform: function (doc, ret, options) {
      delete ret.refreshToken
      return ret
    },
  });
  
  User.plugin(passportLocalMongoose);
  
  module.exports = mongoose.model("User", User);
