const { request, response } = require("express")
const {Joke} = require("./../models/jokes.model")

// get all
module.exports.allJokes = (req,res) => {
    Joke.find()
    .then(jokes => res.json(jokes))
    .catch(err => res.json(err))
}

// get one
module.exports.oneJoke = (req,res) => {
    Joke.findOne({_id: req.params.id})
    .then(joke => res.json(joke))
    .catch(err => res.json(err))
}

//gets one random joke
// module.exports.randomJoke = (req,res) => {
//     Joke.count().exec((err,count) => {
//         const randomJoke = Math.floor(Math.random() * count)
//         Joke.findOne().skip(randomJoke).exec((err.count))
//     } )
// }

// create 
module.exports.createJoke = (req,res) => {
    const newJoke = req.body
    Joke.create(newJoke)
    .then(song => res.json(song))
    .catch(err => res.json(err))
}

// update
module.exports.updateJoke = (req,res) => {
    Joke.updateOne({_id: req.params.id}, // criteria
                    req.body, // updated values
                    {new: true, runValidators: true}) // options
    .then(joke => res.json(joke))
    .catch(err => res.json(err))
}

// delete
module.exports.deleteJoke = (req,res) => {
    Joke.deleteOne({_id: req.params.id})
    .then(status => res.json(status))
    .catch(err => res.json(err))
}