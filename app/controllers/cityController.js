const City = require('../models/city')

module.exports.list = (req, res) => {
    City.find()
        .then((cities) => {
            res.json(cities)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    City.findById(id)
        .then((city) => {
            res.json(city)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.create = (req, res) => {
    const data = req.body
    const city = new City(data)
    city.save()
        .then((city) => {
            res.json(city)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body

    City.findByIdAndUpdate(id, { $set: body }, { new: true, runValidators: true })
        .then((city) => {
            res.json(city)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    City.findByIdAndDelete(id)
        .then((city) => {
            res.json(city)
        })
        .catch((err) => {
            res.json(err)
        })
}