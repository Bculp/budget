const mongoose = require('mongoose');

const IncomeSchema = new mongoose.Schema({
  job: {
    actual: Number,
    budgeted: Number,
    difference: Number,
  },
  other: {
    actual: Number,
    budgeted: Number,
    difference: Number,
  },
  total: {
    actual: Number,
    budgeted: Number,
    difference: Number,
  },
});

const Income = mongoose.model('Income', IncomeSchema);

module.exports = { Income };
