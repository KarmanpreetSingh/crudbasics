const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

//Simple schema
const studentSchema = mongoose.Schema({
    name:{
        type: String,
        required:[true,'name is required'],
        minlength: [4,"name must be atleast 4 characters"]
    },
    course: String,
    age: {
        type: Number,
        min: [1,'age must be atleast 1'],
        max: [100,'age must be less than or equal to 100']
    },
    email: {
        type: String,
        required: true
    }, 
    password: {
        type: String,
        required: [true, 'password is required'],
        minlength:[6, 'minimum pass length is 6 digits']

    }

});

//npm i bcrypt.js

studentSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password,10)
    next();

});

//Model
module.exports = mongoose.model('Student', studentSchema)