const mongoose = require('mongoose');

const drumSchema = new mongoose.Schema({
    name: String,
    best_kit: String,
    brand_name: String,
    founded: String,
    starting_year: Number
});

const fluteSchema = new mongoose.Schema({
    name:String,
    classification: String,
    color: String,
    brand_name: String,
    starting_year: Number
});

const guitarSchema = new mongoose.Schema({
    name:String,
    classification: String,
    color: String,
    Handeness: String,
    brand_name: String
});

const keyboardSchema = new mongoose.Schema({
    name:String,
    color: String,
    classification: String,
    brand_name: String,
    number_of_keys: Number
});

const violinSchema = new mongoose.Schema({
    name:String,
    color: String,
    price: Number,
    type: String,
    brand_name: String,
})

const Drum = mongoose.model('drum_set_list', drumSchema);
const Flute = mongoose.model('flute_list', fluteSchema);
const Guitar = mongoose.model('guitar_list', guitarSchema);
const Keyboard = mongoose.model('keyboard_list', keyboardSchema);
const Violin = mongoose.model('violin_list', violinSchema);

module.exports = {
    Drum, Flute, Guitar, Keyboard, Violin
}