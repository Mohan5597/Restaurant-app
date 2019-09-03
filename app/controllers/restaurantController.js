const Restaurant = require('../models/restaurant')

module.exports.list = (req, res) => {
    Restaurant.find().populate("city").populate("cuisines")
        .then((restaurants) => {
            res.json(restaurants)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Restaurant.findById(id).populate("city").populate("cuisines")
        .then((restaurant) => {
            res.json(restaurant)
        })
        .catch((err) => {
            res.json(err)
        })
}


module.exports.create = (req, res) => {
    const data = req.body
    const restaurant = new Restaurant(data)
    restaurant.save()
        .then((restaurant) => {
            res.json(restaurant)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body

    Restaurant.findByIdAndUpdate(id, { $set: body }, { new: true, runValidators: true })
        .then((restaurant) => {
            res.json(restaurant)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Restaurant.findByIdAndDelete(id)
        .then((restaurant) => {
            res.json(restaurant)
        })
        .catch((err) => {
            res.json(err)
        })
}