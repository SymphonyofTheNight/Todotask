import mongoose from 'mongoose'

// model
import ModelSchema from '../ModelSchema/ModelSchema.js'

export const getDatabase = async (req, res) => {
    try {
        const Database = await ModelSchema.find({})
        res.status(200).json(Database)
    } catch (err) {
        res.status(404).json(err)
    }
}

export const postTask = async (req, res) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: 'Invalid Credential' });

    try {

        const addTask = await ModelSchema.findByIdAndUpdate(id, {
            $push: {
                list: {
                    task: req.body.list[0].task
                }
            }
        }, {
            new: true, upsert: true
        })

        res.json(addTask)

    } catch (error) {
        res.status(404).json(err)
    }
}