const mongoose = require('mongoose');

const EventSchema = mongoose.Schema(
    
    {
        title: {
            type: String,
            required: [true, "Enter event name"],
        },
        date: {
            type: String,
            required: [true, "Enter event date"],
        },
    },
    {
        timestamps: true
    }

)

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;