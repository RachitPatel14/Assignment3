const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

const drum = require('./routes/api/drum.js');
const flute = require('./routes/api/flute.js');
const keyboard = require('./routes/api/keyboard.js');
const violin = require('./routes/api/violin.js');
const guitar = require('./routes/api/guitar.js');

app.use('/api/posts/drum_list', drum);
app.use('/api/posts/flute_list', flute);
app.use('/api/posts/guitar_list', guitar);
app.use('/api/posts/keyboard_list', keyboard);
app.use('/api/posts/violin_list', violin);

// Handle production
if (process.env.NODE_ENV === 'production') {
  // Static folder
  app.use(express.static(__dirname + '/public/'));

  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));