const mongoose = require('mongoose');

const LibrarySchema = mongoose.Schema(
    
    {
        name: {
            type: String,
            required: [true, "Enter library name"],
        },
        books: [
            {title: String, quantity: Number}
        ],
        rating: Number,
        open: Boolean,
        longitude: {
            type: Number,
            required: true
        },
        latitude: {
            type: Number,
            required: true
        },
    },
    {
        timestamps: true
    }

)

const Library = mongoose.model("Library", LibrarySchema);

module.exports = Library;