const mongoose = require("mongoose");

const BookMarkSchema = new mongoose.Schema(
    {
        job: { type: mongoose.Schema.Types.ObjectId, 
        ref:"Job"},
        userId: { type: String, required: true},
        // title: { type: String, required: true},
        // company: { type: String, required: true},
        // salary: { type: String, required: true},
        // imageUrl: { type: String, required: true},
        // location: { type: String, required: true},
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Bookmark", BookMarkSchema)
//if i don't include this line then my model wont be accessible in other files.
 
