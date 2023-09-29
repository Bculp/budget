const IncomeSchema = {
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
};

module.exports = { IncomeSchema };
