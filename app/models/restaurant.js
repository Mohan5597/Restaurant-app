const mongoose = require('mongoose')

const Schema = mongoose.Schema

const restaurantSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    location: {
        type: String
    },
    city: {
        type: Schema.Types.ObjectId,
        ref: 'City'
    },
    isVeg: {
        type: Boolean
    },
    cuisines: [{
        type: Schema.Types.ObjectId,
        ref: 'Cuisine'
    }]

})

const Restaurant = mongoose.model('Restaurant', restaurantSchema)

module.exports = Restaurant