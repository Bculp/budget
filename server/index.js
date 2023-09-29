const express = require('express');
const mongoose = require('mongoose');
const { Dog } = require('./db/models/totals');
const { Month } = require('./db/models/month');
const app = express();
const port = 4000;

const formatId = (year, month) => {
  const formattedYear = String(year);
  const formattedMonth = month.toLowerCase();
  return `${formattedYear}-${formattedMonth}`;
};

app.use(express.json());

app.get('/', (req, res) => {
  res.json('Hello World!');
});

app.get('/dogs', async (req, res) => {
  const allDogs = await Dog.find();
  return res.status(200).json(allDogs);
});

app.get('/month', async (req, res) => {
  const allMonths = await Month.find();
  return res.status(200).json(allMonths);
});

app.get('/dogs/:id', async (req, res) => {
  const { id } = req.params;
  const dog = await Dog.findById(id);
  return res.status(200).json(dog);
});

app.get('/month/:id', async (req, res) => {
  const { id } = req.params;
  const month = await Month.find({ id });
  return res.status(200).json(month);
});

app.post('/dogs', async (req, res) => {
  const newDog = new Dog({ ...req.body });
  const insertedDog = await newDog.save();
  return res.status(201).json(insertedDog);
});

app.post('/month', async (req, res) => {
  const newMonth = new Month({
    ...req.body,
    id: formatId(req.body.year, req.body.month),
  });
  const insertedMonth = await newMonth.save();
  return res.status(201).json(insertedMonth);
});

app.put('/dogs/:id', async (req, res) => {
  const { id } = req.params;
  await Dog.updateOne({ id }, req.body);
  const updatedDog = await Dog.findById(id);
  return res.status(200).json(updatedDog);
});

app.delete('/dogs/:id', async (req, res) => {
  const { id } = req.params;
  const deletedDog = await Dog.findByIdAndDelete(id);
  return res.status(200).json(deletedDog);
});

// Set `strictQuery: false` to globally opt into filtering by properties that aren't in the schema
// Included because it removes preparatory warnings for Mongoose 7.
// See: https://mongoosejs.com/docs/migrating_to_6.html#strictquery-is-removed-and-replaced-by-strict
const start = async () => {
  // Define the database URL to connect to.
  const mongoDB = 'mongodb://127.0.0.1/budget';

  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(mongoDB);
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
