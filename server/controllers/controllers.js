import mongoose from 'mongoose'
import ClientModels from '../models/ClientModels.js'

export const getDatabase = async (req, res) => {
    try {
        const _db = await ClientModels.find({});
        res.status(200).json(_db)
    } catch (err) {
        res.status(404).json(err)
    }
}

export const postTask = async (req, res) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: 'Invalid Credential' });

    console.log(id)
    console.log(req.body.list[0].task)

    try {
        await ClientModels.findByIdAndUpdate(id, {
            $push: {
                list: {
                    identifier: req.body.list[0].identifier, // hidden value to be sent for reference
                    task: req.body.list[0].task
                }
            }
        }, {
            new: true, upsert: true
        })
    } catch (error) {
        res.status(404).json(error)
    }
}

export const updateTask = async (req, res) => {

    const { id } = req.params;

    console.log(req.body.list[0].task)

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: 'Invalid Credentials' });

    try {
        await ClientModels.findByIdAndUpdate(id, {
            $set: {
                "list.$[i].identifier": req.body.list[0].identifier,
                "list.$[i].task": req.body.list[0].task
            }
        }, {
            arrayFilters: [
                {
                    "i.identifier": req.body.list[0].identifier
                }
            ],
            returnDocument: 'after',
            safe: true
        })
    } catch (error) {
        res.status(404).json(error)
    }

}

export const deleteTask = async (req, res) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: 'Invalid Credentials' });

    try {
        await ClientModels.findByIdAndUpdate(id, {
            $pull: {
                list: {
                    identifier: req.body.list[0].identifier
                }
            }
        }, {
            new: true
        })
    } catch (error) {
        res.status(404).json(error)
    }
}

export const deleteAllTask = async (req, res) => {

    const { id } = req.params;

    console.log(id)

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: 'Invalid Credentials' });

    try {
        await ClientModels.findByIdAndUpdate(id, {
            $set: {
                list: []
            }
        }, {
            new: true
        })
    } catch (error) {
        res.status(404).json(error)
    }
}
