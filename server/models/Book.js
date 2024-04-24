import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    name: {
        type: String},
    author: {
        type: String,required: true},
    imageUrl : {type: String,required: true},
})

const BookModel = mongoose.model('book',BookSchema)
export  {BookModel as Book}