const InvestmentSchema = {
  roth401k: {
    actual: Number,
    budgeted: Number,
    difference: Number,
    percentage: Number,
  },
  rothIRA: {
    actual: Number,
    budgeted: Number,
    difference: Number,
    percentage: Number,
  },
  individualInvestments: {
    actual: Number,
    budgeted: Number,
    difference: Number,
    percentage: Number,
  },
  mutualFunds: {
    actual: Number,
    budgeted: Number,
    difference: Number,
    percentage: Number,
  },
  total: {
    actual: Number,
    budgeted: Number,
    difference: Number,
    percentage: Number,
  },
};

module.exports = { InvestmentSchema };
