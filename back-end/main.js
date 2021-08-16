const mongoose = require('mongoose');
const { Drum, Flute, Guitar, Keyboard, Violin } = require('./model.js');

mongoose.connect('mongodb://localhost:27017/music_industry',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

