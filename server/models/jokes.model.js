const mongoose = require('mongoose');
 
const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup is required"],
        minlength: [10,"Setup has to be at least 10 characters"]
    },

    punchline: {
        type: String,
        required: [true, "Punchline is required"],
        minlength: [3, "Punchline has to be at least 3 characters"]
    },
}, {timestamps:true});
 
// creating the Joke schema and calling it Joke 
module.exports.Joke = mongoose.model('Joke', JokeSchema);
