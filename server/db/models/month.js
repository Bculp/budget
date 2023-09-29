const mongoose = require('mongoose');
const Income = require('./income');
const Expenses = require('./expenses');

const MonthSchema = new mongoose.Schema({
  id: String,
  month: String,
  year: Number,
  Income: Income.IncomeSchema,
  Expenses: Expenses.ExpenseSchema,
});

const Month = mongoose.model('Month', MonthSchema);

module.exports = { Month };
