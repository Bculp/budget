const mongoose = require('mongoose');
const Income = require('./income');
const Expenses = require('./expenses');
const Investments = require('./investments');
const Totals = require('./totals');
const Savings = require('./savings');
const InvestmentChecking = require('./investmentChecking');

const MonthSchema = new mongoose.Schema({
  id: String,
  month: String,
  year: Number,
  Income: Income.IncomeSchema,
  Expenses: Expenses.ExpenseSchema,
  Investments: Investments.InvestmentSchema,
  Totals: Totals.TotalSchema,
  Savings: Savings.SavingsSchema,
  InvestmentChecking: InvestmentChecking.InvestmentCheckingSchema,
});

const Month = mongoose.model('Month', MonthSchema);

module.exports = { Month };
