const Cuisine = require('../models/cuisine')

module.exports.list = (req, res) => {
    Cuisine.find()
        .then((cuisines) => {
            res.json(cuisines)
        })
        .catch((err) => {
            res.json(err)
        })
}
module.exports.show = (req, res) => {
    const id = req.params.id
    Cuisine.findById(id)
        .then((cuisine) => {
            res.json(cuisine)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.create = (req, res) => {
    const data = req.body
    const cuisine = new Cuisine(data)
    cuisine.save()
        .then((cuisine) => {
            res.json(cuisine)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body

    Cuisine.findByIdAndUpdate(id, { $set: body }, { new: true, runValidators: true })
        .then((cuisine) => {
            res.json(cuisine)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Cuisine.findByIdAndDelete(id)
        .then((cuisine) => {
            res.json(cuisine)
        })
        .catch((err) => {
            res.json(err)
        })
}