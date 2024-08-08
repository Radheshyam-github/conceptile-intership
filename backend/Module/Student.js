const mongoose = require('mongoose');
const { type } = require('os');

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        email: {
            type: String,
            unique: true
        },
        contact: {
            type: String,
            unique: true,
            // default: null
        },
        age: {
            type: Number,
            unique: true,

        },
        institutions: {
            type:String,
            unique:true
        },
        degrees:{
            type:String,
            unique:true
        },
        years:{
            type:Number,
            unique:true
        },
        coursename:{
            type:String,
            unique:true
        },
        instructor:{
            type:String,
            unique:true
        },
        duration:{
            type:String,
            unique:true
        },
        status: {
            type: Boolean,
            default: true
        }
    }
)

const Student = mongoose.model("Student", UserSchema)
module.exports = Student; 