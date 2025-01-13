import Event from '../models/event.model.js';

export async function getEvents(req, res) {
    try {
        const events = await Event.find({});
        res.status(200).json(events);
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

export async function getEvent(req, res) {
    try {
        const {id} = req.params;
        const event = await Event.findById(id);
        res.status(200).json(event);
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

export async function createEvent(req, res) {
    try {
        const event = await Event.create(req.body);
        res.status(200).json(event);
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

export async function updateEvent(req, res) {
    try {

        const {id} = req.params;
        const event = await Event.findByIdAndUpdate(id, req.body);

        if (!event) {
            return res.status(404).json({message: "where event"})
        }

        const updatedEvent = await Event.findById(id);
        res.status(200).json(updatedEvent);

    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

export async function deleteEvent(req, res) {
    try {

        const {id} = req.params;
        const event = await Event.findByIdAndDelete(id);

        if (!event) {
            return res.status(404).json({message: "where event"})
        }

        res.status(200).json({message: "Deleted"});

    } catch (e) {
        res.status(500).json({message: e.message});
    }
}