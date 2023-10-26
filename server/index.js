const express = require('express');
const mongoose = require('mongoose');
const { Month } = require('./db/models/month');
const app = express();
const port = 4000;

const formatId = (year, month) => {
  const formattedYear = String(year);
  const formattedMonth = month.toLowerCase();
  return `${formattedYear}-${formattedMonth}`;
};

app.use(express.json());

// GET ALL //

app.get('/', (req, res) => {
  res.json('Hello World!');
});

app.get('/month', async (req, res) => {
  const allMonths = await Month.find();
  return res.status(200).json(allMonths);
});

// GET BY ID //

app.get('/month/:id', async (req, res) => {
  const { id } = req.params;
  const month = await Month.find({ id });
  return res.status(200).json(month);
});

// POST //

app.post('/month', async (req, res) => {
  const newMonth = new Month({
    ...req.body,
    id: formatId(req.body.year, req.body.month),
  });
  const insertedMonth = await newMonth.save();
  return res.status(201).json(insertedMonth);
});

// PUT //

app.put('/month/:id', async (req, res) => {
  const { id } = req.params;
  let month = await Month.find({ id });
  const updatedMonth = await Month.findOneAndUpdate(
    { id },
    {
      $set: {
        Income: { ...month.Income, ...req.body.Income },
        Expenses: { ...month.Expenses, ...req.body.Expenses },
        Investments: { ...month.Investments, ...req.body.Investments },
        Totals: { ...month.Totals, ...req.body.Totals },
        Savings: { ...month.Savings, ...req.body.Savings },
        InvestmentChecking: { ...month.InvestmentChecking, ...req.body.InvestmentChecking },
        CarPayment: { ...month.CarPayment, ...req.body.CarPayment },
      },
    },
    { new: true }
  );
  return res.status(200).json(updatedMonth);
});

// DELETE //

app.delete('/month/:id', async (req, res) => {
  const { id } = req.params;
  const deletedMonth = await Month.findOneAndDelete({ id });
  return res.status(200).json(deletedMonth);
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
