const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

global.Task = require('./api/models/taskModel');
const routes = require('./api/routes/taskRoutes');

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.connect(
 'mongodb+srv://rachit:1410Ira@musicindustry.sslsy.mongodb.net/test',
  { useNewUrlParser: true });

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

routes(app);
app.listen(port);

app.use((req, res) => {
  res.status(404).send({ url: `${mongoose.db} not found` });
});

console.log(`Server started on port ${port}`);