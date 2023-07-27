import mongoose from 'mongoose'

const Schema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true,
    },
    list: [
        {
            _id: {
                type: mongoose.Schema.Types.ObjectId,
                index: true,
                required: true,
                auto: true,
            },
            task: {
                type: String,
                require: true
            }
        }
    ]
});

const ModelSchema = mongoose.model('ModelSchema', Schema);

export default ModelSchema;









