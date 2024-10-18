import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3 ,
        maxlength: 50,
        trim: true,
        unique: true,
        lowercase: true,
        min: [3 , 'must be at least 3 chreactor'],
        password
    },
    email: {type: String, unique: true},
    // password: {
    //     type: String,
    //     required: true,
    //     minlength: 8,
    //     maxlength: 100, 
    //     trim: true,
    //     validate: {
    //         validator: (value) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value),
    //         message: 'Password must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters'
    //     }
    // },
    password:{
        type: String,
        required:[true , "password is required"]
    },
    role: {type: String, enum: ["admin", "user"], default: "user"},
    isActive: {type: Boolean, default: true},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
})

export const User = mongoose.model("User" ,  userSchema)


