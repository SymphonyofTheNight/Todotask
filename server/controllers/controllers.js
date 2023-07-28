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

    // const { id } = req.params;

    // if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ message: 'Invalid Credential' });


    // cant send post because no ID 
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
        res.status(404).json(error)
    }
}