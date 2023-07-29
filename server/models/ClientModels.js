import mongoose from 'mongoose';

const isFieldRequired = () => {
    return typeof this.myField === 'string' ? false : true
}

const ClientSchema = mongoose.Schema({
    list: [
        {
            task: {
                type: String,
                require: true
            },
            identifier: {
                type: String,
                require: true
            }
        }
    ]
})

const ClientModels = mongoose.model('ClientModels', ClientSchema);

export default ClientModels;

//// fix .... post item_id cannot register on post request.. fix tommorow!