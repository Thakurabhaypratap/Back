import mongoose, { Schema } from "mongoose";

const sub_userSchema = new mongoose.Schema({})

export const sub_User = mongoose.model('sub_User' , sub_userSchema)

