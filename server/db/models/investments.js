const InvestmentSchema = {
  roth401k: {
    actual: Number,
    budgeted: Number,
    difference: Number,
  },
  rothIRA: {
    actual: Number,
    budgeted: Number,
    difference: Number,
  },
  individualInvestments: {
    actual: Number,
    budgeted: Number,
    difference: Number,
  },
  mutualFunds: {
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

module.exports = { InvestmentSchema };
