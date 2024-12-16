import Library from '../models/library.model.js';

export async function getLibraries(req, res) {
    try {
        const libraries = await Library.find({});
        res.status(200).json(libraries);
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

export async function getLibrary(req, res) {
    try {
        const {id} = req.params;
        const library = await Library.findById(id);
        res.status(200).json(library);
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

export async function createLibrary(req, res) {
    try {
        const library = await Library.create(req.body);
        res.status(200).json(library);
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

export async function updateLibrary(req, res) {
    try {

        const {id} = req.params;
        const library = await Library.findByIdAndUpdate(id, req.body);

        if (!library) {
            return res.status(404).json({message: "where library"})
        }

        const updatedLibrary = await Library.findById(id);
        res.status(200).json(updatedLibrary);

    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

export async function deleteLibrary(req, res) {
    try {

        const {id} = req.params;
        const library = await Library.findByIdAndDelete(id);

        if (!library) {
            return res.status(404).json({message: "where library"})
        }

        res.status(200).json({message: "Deleted"});

    } catch (e) {
        res.status(500).json({message: e.message});
    }
}