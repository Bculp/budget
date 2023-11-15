'use client';

import { useEffect, useState } from 'react';
import { Button, TextInput } from '@mantine/core';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import { Expenses } from '@/components/Expenses';
import { Income } from '@/components/Income';
import { Investments } from '@/components/Investments';
import { Totals } from '@/components/Totals';
import { Savings } from '@/components/Savings';
import { InvestmentChecking } from '@/components/InvestmentChecking';
import { createMonth, updateMonth, url } from '@/components/Shared/api';
import { NumberInput } from '@/components/Shared/NumberInput';
import styles from '../../components/Shared/Layout.module.css';
import { months } from '../../components/Shared/Months';
import { CarPayment } from '@/components/CarPayment';
import { initialCarPaymentState, initialExpenseState, initialIncomeState, initialInvestmentState, initialMonthState, initialPercentagesState, initialSavingsState } from '@/components/Shared/State';

export default function NewMonthPage() {
  // ---- USE STATE ---- //

  const [loading, setLoading] = useState(true);

  const [month, updateMonthString] = useState('');
  const [year, updateYear] = useState(2023);
  const [percentages, updatePercentages] = useState(initialPercentagesState);
  const [income, updateIncome] = useState(initialIncomeState);
  const [expenses, updateExpenses] = useState(initialExpenseState);
  const [investments, updateInvestments] = useState(initialInvestmentState);
  const [savings, updateSavings] = useState(initialSavingsState);
  const [carPayment, updateCarPayment] = useState(initialCarPaymentState);
  const [actualAmtInChecking, updateActualAmtInChecking] = useState(0);

  const searchParams = useSearchParams();
  const prevMonth = searchParams.get('prevMonth');

  let currentMonth;

  let {
    Expenses: dbExpenses,
    Income: dbIncome,
    Investments: dbInvestments,
    Totals: dbTotals,
    Savings: dbSavings,
    InvestmentChecking: dbInvestmentChecking,
    year: dbYear,
    month: dbMonth,
  } = initialMonthState;

  // ---- MERGE UPDATE FUNCTIONS ---- //

  const mergeIncomeUpdate = (category: string, type: string, value: number) => {
    const newState = {
      ...income,
      [category]: {
        // @ts-ignore
        ...{ ...income[category] },
        [type]: value,
      },
    };

    updateIncome(newState);
  };

  const mergeExpenseUpdate = (
    category: string,
    subCategory: string,
    type: string,
    value: number
  ) => {
    const newState = {
      ...expenses,
      [category]: {
        // @ts-ignore
        ...{ ...expenses[category] },
        [subCategory]: {
          // @ts-ignore
          ...{ ...expenses[category][subCategory] },
          [type]: value,
        },
      },
    };

    updateExpenses(newState);
  };

  const mergeCategoryExpenseUpdate = (
    category: string,
    expenseSubCats: any
  ) => {
    const newState = {
      ...expenses,
      [category]: {
        // @ts-ignore
        ...expenseSubCats,
      },
    };

    updateExpenses(newState);
  };

  const mergeInvestmentUpdate = (category: string, type: string, value: number) => {
    const newState = {
      ...investments,
      [category]: {
        // @ts-ignore
        ...{ ...investments[category] },
        [type]: value,
      },
    };

    updateInvestments(newState);
  };

  const mergeSavingsUpdate = (type: string, value: number) => {
    const newState = {
      ...savings,
      [type]: value,
    };

    updateSavings(newState);
  };

  const mergePercentageUpdate = (category: string, value: number) => {
    const newState = {
      ...percentages,
      [category]: value,
    };

    updatePercentages(newState);
  };

  const mergeCarPaymentUpdate = (category: string, value: number) => {
    const newState = {
      ...carPayment,
      [category]: value,
    };

    updateCarPayment(newState);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        // setLoading(true);
        const response = await axios.get(`${url}/month/${prevMonth}`);
        currentMonth = response.data[0] || initialMonthState;

        dbExpenses = currentMonth.Expenses;
        dbIncome = currentMonth.Income;
        dbInvestments = currentMonth.Investments;
        dbTotals = currentMonth.Totals;
        dbSavings = currentMonth.Savings;
        dbInvestmentChecking = currentMonth.InvestmentChecking;
        dbYear = currentMonth.year;
        dbMonth = currentMonth.month;

        updateMonthString(months[months.indexOf(dbMonth) + 1]);
        updateYear(dbYear);
        updatePercentages({
          fixedExpenses: dbExpenses.fixed.total.percentage,
          variableExpenses: dbExpenses.variable.total.percentage,
          funExpenses: dbExpenses.fun.total.percentage,
          investments: dbInvestments.total.percentage,
          savings: dbSavings.percentage,
        });
        mergeIncomeUpdate('job', 'budgeted', dbIncome.job.budgeted);

        mergeCategoryExpenseUpdate('fixed', {
          ...expenses.fixed,
          rent: {
            actual: dbExpenses.fixed.rent.actual,
            budgeted: 0,
          },
          rentersInsurance: {
            actual: dbExpenses.fixed.rentersInsurance.actual,
            budgeted: 0,
          },
          internet: {
            actual: dbExpenses.fixed.internet.actual,
            budgeted: 0,
          },
          healthInsurance: {
            actual: dbExpenses.fixed.healthInsurance.actual,
            budgeted: 0,
          },
          carInsurance: {
            actual: dbExpenses.fixed.carInsurance.actual,
            budgeted: 0,
          },
          cellPhone: {
            actual: dbExpenses.fixed.cellPhone.actual,
            budgeted: 0,
          },
          gymMembership: {
            actual: dbExpenses.fixed.gymMembership.actual,
            budgeted: 0,
          },
          amazonMembership: {
            actual: dbExpenses.fixed.amazonMembership.actual,
            budgeted: 0,
          },
          spotify: {
            actual: dbExpenses.fixed.spotify.actual,
            budgeted: 0,
          },
          costco: {
            actual: dbExpenses.fixed.costco.actual,
            budgeted: 0,
          },
          domain: {
            actual: dbExpenses.fixed.domain.actual,
            budgeted: 0,
          },
          petco: {
            actual: dbExpenses.fixed.petco.actual,
            budgeted: 0,
          },
          tv: {
            actual: dbExpenses.fixed.tv.actual,
            budgeted: 0,
          },
          allTrails: {
            actual: dbExpenses.fixed.allTrails.actual,
            budgeted: 0,
          },
        });

        // Skipping these for now as they appear to be controlled via the percentages state
        // mergeExpenseUpdate('variable', 'total', 'percentage', dbExpenses.variable.total.percentage);
        // mergeExpenseUpdate('fun', 'total', 'percentage', dbExpenses.fun.total.percentage);

        updateInvestments({
          roth401k: {
            actual: dbInvestments.roth401k.actual,
            budgeted: dbInvestments.roth401k.budgeted,
          },
          rothIRA: {
            actual: 0, // TODO: need to capture and store investment percentages so I can use them here to compute actual amts
            budgeted: dbInvestments.rothIRA.budgeted,
          },
          individualInvestments: {
            actual: 0, // TODO: need to capture and store investment percentages so I can use them here to compute actual amts
            budgeted: dbInvestments.individualInvestments.budgeted,
          },
          mutualFunds: {
            actual: 0, // TODO: need to capture and store investment percentages so I can use them here to compute actual amts
            budgeted: dbInvestments.mutualFunds.budgeted,
          },
          total: {
            percentage: dbInvestments.total.percentage,
          },
        });

        mergeSavingsUpdate('budgeted', dbSavings.budgeted);

        // mergeCarPaymentUpdate('idealPayment', dbCarPayment.idealPayment)
        // mergeCarPaymentUpdate('totalOwed', dbCarPayment.totalOwed)

        setLoading(false);
      } catch (error) {
          setLoading(false);
          console.error(error);
          throw error;
      }
  };

    getData();
  }, []);

  const carAmtRemaining = carPayment.totalOwed - carPayment.amtPaidThisMonth;

  const jobDifference = income.job.budgeted - income.job.actual;
  const otherDifference = income.other.budgeted - income.other.actual;
  const totalActualIncome = income.job.actual + income.other.actual;
  const totalBudgetedIncome = income.job.budgeted + income.other.budgeted;
  const totalDifferenceIncome = totalBudgetedIncome - totalActualIncome;

  const getExpenseDifference = (type: 'fixed' | 'variable' | 'fun', title: any) => (
      expenses &&
      expenses[type] &&
      // @ts-ignore
      expenses[type][title] &&
      // @ts-ignore
      expenses[type][title].budgeted - expenses[type][title].actual
    );

  const rentDifference = getExpenseDifference('fixed', 'rent');
  const rentersInsuranceDifference = getExpenseDifference('fixed', 'rentersInsurance');
  const internetDifference = getExpenseDifference('fixed', 'internet');
  const healthInsuranceDifference = getExpenseDifference('fixed', 'healthInsurance');
  const carInsuranceDifference = getExpenseDifference('fixed', 'carInsurance');
  const cellPhoneDifference = getExpenseDifference('fixed', 'cellPhone');
  const gymMembershipDifference = getExpenseDifference('fixed', 'gymMembership');
  const amazonMembershipDifference = getExpenseDifference('fixed', 'amazonMembership');
  const spotifyDifference = getExpenseDifference('fixed', 'spotify');
  const costcoDifference = getExpenseDifference('fixed', 'costco');
  const domainDifference = getExpenseDifference('fixed', 'domain');
  const petcoDifference = getExpenseDifference('fixed', 'petco');
  const tvDifference = getExpenseDifference('fixed', 'tv');
  const allTrailsDifference = getExpenseDifference('fixed', 'allTrails');

  const totalActualFixedExpenses =
    expenses.fixed.rent.actual +
    expenses.fixed.rentersInsurance.actual +
    expenses.fixed.internet.actual +
    expenses.fixed.healthInsurance.actual +
    expenses.fixed.carInsurance.actual +
    expenses.fixed.cellPhone.actual +
    expenses.fixed.gymMembership.actual +
    expenses.fixed.amazonMembership.actual +
    expenses.fixed.spotify.actual +
    expenses.fixed.costco.actual +
    expenses.fixed.domain.actual +
    expenses.fixed.petco.actual +
    expenses.fixed.tv.actual +
    expenses.fixed.allTrails.actual;

  const totalBudgetedFixedExpenses =
  totalBudgetedIncome * (percentages.fixedExpenses / 100) +
    expenses.fixed.rent.budgeted +
    expenses.fixed.rentersInsurance.budgeted +
    expenses.fixed.internet.budgeted +
    expenses.fixed.healthInsurance.budgeted +
    expenses.fixed.carInsurance.budgeted +
    expenses.fixed.cellPhone.budgeted +
    expenses.fixed.gymMembership.budgeted +
    expenses.fixed.amazonMembership.budgeted +
    expenses.fixed.spotify.budgeted +
    expenses.fixed.costco.budgeted +
    expenses.fixed.domain.budgeted +
    expenses.fixed.petco.budgeted +
    expenses.fixed.tv.budgeted +
    expenses.fixed.allTrails.budgeted;

  const totalDifferenceFixedExpenses = totalBudgetedFixedExpenses - totalActualFixedExpenses;

  const totalActualVariableExpenses =
    expenses.variable.electric.actual +
    expenses.variable.water.actual +
    expenses.variable.carFuel.actual +
    expenses.variable.tolls.actual +
    expenses.variable.groceries.actual +
    expenses.variable.householdProducts.actual +
    expenses.variable.carMaintenance.actual +
    expenses.variable.haircut.actual +
    expenses.variable.personalCareDoctor.actual +
    expenses.variable.dogSupplies.actual;

  const totalBudgetedVariableExpenses =
  totalBudgetedIncome * (percentages.variableExpenses / 100) +
    expenses.variable.electric.budgeted +
    expenses.variable.water.budgeted +
    expenses.variable.carFuel.budgeted +
    expenses.variable.tolls.budgeted +
    expenses.variable.groceries.budgeted +
    expenses.variable.householdProducts.budgeted +
    expenses.variable.carMaintenance.budgeted +
    expenses.variable.haircut.budgeted +
    expenses.variable.personalCareDoctor.budgeted +
    expenses.variable.dogSupplies.budgeted;

  const totalDifferenceVariableExpenses =
    totalBudgetedVariableExpenses - totalActualVariableExpenses;

  const electricDifference = getExpenseDifference('variable', 'electric');
  const waterDifference = getExpenseDifference('variable', 'water');
  const carFuelDifference = getExpenseDifference('variable', 'carFuel');
  const tollsDifference = getExpenseDifference('variable', 'tolls');
  const groceriesDifference = getExpenseDifference('variable', 'groceries');
  const householdProductsDifference = getExpenseDifference('variable', 'householdProducts');
  const carMaintenanceDifference = getExpenseDifference('variable', 'carMaintenance');
  const haircutDifference = getExpenseDifference('variable', 'haircut');
  const personalCareDoctorDifference = getExpenseDifference('variable', 'personalCareDoctor');
  const dogSuppliesDifference = getExpenseDifference('variable', 'dogSupplies');

  const totalActualFunExpenses =
    expenses.fun.clothing.actual +
    expenses.fun.eatingOut.actual +
    expenses.fun.funPurchases.actual +
    expenses.fun.entertainmentActivities.actual +
    expenses.fun.vacation.actual +
    expenses.fun.gifts.actual;

  const totalBudgetedFunExpenses =
  totalBudgetedIncome * (percentages.funExpenses / 100) +
    expenses.fun.clothing.budgeted +
    expenses.fun.eatingOut.budgeted +
    expenses.fun.funPurchases.budgeted +
    expenses.fun.entertainmentActivities.budgeted +
    expenses.fun.vacation.budgeted +
    expenses.fun.gifts.budgeted;

  const totalDifferenceFunExpenses = totalBudgetedFunExpenses - totalActualFunExpenses;

  const clothingDifference = getExpenseDifference('fun', 'clothing');
  const eatingOutDifference = getExpenseDifference('fun', 'eatingOut');
  const funPurchasesDifference = getExpenseDifference('fun', 'funPurchases');
  const entertainmentActivitiesDifference = getExpenseDifference('fun', 'entertainmentActivities');
  const vacationDifference = getExpenseDifference('fun', 'vacation');
  const giftsDifference = getExpenseDifference('fun', 'gifts');

  const totalActualExpenses =
    totalActualFixedExpenses + totalActualVariableExpenses + totalActualFunExpenses;
  const totalBudgetedExpenses =
    totalBudgetedFixedExpenses + totalBudgetedVariableExpenses + totalBudgetedFunExpenses;
  const totalDifferenceExpenses = totalBudgetedExpenses - totalActualExpenses;

  const expenseProps = {
    mergeExpenseUpdate,
    expenses,
    percentages,
    mergePercentageUpdate,
    fixed: {
      rentDifference,
      rentersInsuranceDifference,
      internetDifference,
      healthInsuranceDifference,
      carInsuranceDifference,
      cellPhoneDifference,
      gymMembershipDifference,
      amazonMembershipDifference,
      spotifyDifference,
      costcoDifference,
      domainDifference,
      petcoDifference,
      tvDifference,
      allTrailsDifference,
      totalActualFixedExpenses,
      totalBudgetedFixedExpenses,
      totalDifferenceFixedExpenses,
    },
    variable: {
      electricDifference,
      waterDifference,
      carFuelDifference,
      tollsDifference,
      groceriesDifference,
      householdProductsDifference,
      carMaintenanceDifference,
      haircutDifference,
      personalCareDoctorDifference,
      dogSuppliesDifference,
      totalActualVariableExpenses,
      totalBudgetedVariableExpenses,
      totalDifferenceVariableExpenses,
    },
    fun: {
      clothingDifference,
      eatingOutDifference,
      funPurchasesDifference,
      entertainmentActivitiesDifference,
      vacationDifference,
      giftsDifference,
      totalActualFunExpenses,
      totalBudgetedFunExpenses,
      totalDifferenceFunExpenses,
    },
  };

  const getInvestmentDifference = (title: any) => (
      investments &&
      // @ts-ignore
      investments[title] &&
      // @ts-ignore
      investments[title].budgeted - investments[title].actual
    );

  const roth401kDifference = getInvestmentDifference('roth401k');
  const rothIRADifference = getInvestmentDifference('rothIRA');
  const individualInvestmentsDifference = getInvestmentDifference('individualInvestments');
  const mutualFundsDifference = getInvestmentDifference('mutualFunds');

  const totalActualInvestments =
    investments.roth401k.actual +
    investments.rothIRA.actual +
    investments.individualInvestments.actual +
    investments.mutualFunds.actual;

  const totalBudgetedInvestments =
  totalBudgetedIncome * (percentages.investments / 100) +
    investments.roth401k.budgeted +
    investments.rothIRA.budgeted +
    investments.individualInvestments.budgeted +
    investments.mutualFunds.budgeted;

  const totalDifferenceInvestments = totalBudgetedInvestments - totalActualInvestments;

  const amtAvailableToInvest = totalActualIncome - totalActualExpenses;
  const amtRemaining = amtAvailableToInvest - totalActualInvestments;

  const savingsDifference = savings.budgeted - savings.actual;

  const budgetAmtInChecking =
  dbInvestmentChecking.rothIRA + investments.rothIRA.actual +
  dbInvestmentChecking.individualInvestments + investments.individualInvestments.actual +
  dbInvestmentChecking.mutualFunds + investments.mutualFunds.actual;

  const budgetBalance = actualAmtInChecking - budgetAmtInChecking;

  const InvestmentCheckingProps = {
    savings: savings.actual > 0 ?
      savings.actual + dbInvestmentChecking.savings : dbInvestmentChecking.savings,
    rothIRA: dbInvestmentChecking.rothIRA + investments.rothIRA.actual,
    individualInvestments: dbInvestmentChecking.individualInvestments + investments.individualInvestments.actual,
    mutualFunds: dbInvestmentChecking.mutualFunds + investments.mutualFunds.actual,
    actualAmtInChecking,
    updateActualAmtInChecking,
    budgetAmtInChecking,
    budgetBalance,
  };

  const monthObjToDb = {
    month,
    year,
    Income: {
      job: {
        ...income.job,
        difference: jobDifference,
      },
      other: {
        ...income.other,
        difference: otherDifference,
      },
      total: {
        actual: totalActualIncome,
        budgeted: totalBudgetedIncome,
        difference: totalDifferenceIncome,
      },
    },
    Expenses: {
      total: {
        actual: totalActualExpenses,
        budgeted: totalBudgetedExpenses,
        difference: totalDifferenceExpenses,
      },
      fixed: {
        rent: {
          ...expenses.fixed.rent,
          difference: rentDifference,
        },
        rentersInsurance: {
          ...expenses.fixed.rentersInsurance,
          difference: rentersInsuranceDifference,
        },
        internet: {
          ...expenses.fixed.internet,
          difference: internetDifference,
        },
        healthInsurance: {
          ...expenses.fixed.healthInsurance,
          difference: healthInsuranceDifference,
        },
        carInsurance: {
          ...expenses.fixed.carInsurance,
          difference: carInsuranceDifference,
        },
        cellPhone: {
          ...expenses.fixed.cellPhone,
          difference: cellPhoneDifference,
        },
        gymMembership: {
          ...expenses.fixed.gymMembership,
          difference: gymMembershipDifference,
        },
        amazonMembership: {
          ...expenses.fixed.amazonMembership,
          difference: amazonMembershipDifference,
        },
        spotify: {
          ...expenses.fixed.spotify,
          difference: spotifyDifference,
        },
        costco: {
          ...expenses.fixed.costco,
          difference: costcoDifference,
        },
        domain: {
          ...expenses.fixed.domain,
          difference: domainDifference,
        },
        petco: {
          ...expenses.fixed.petco,
          difference: petcoDifference,
        },
        tv: {
          ...expenses.fixed.tv,
          difference: tvDifference,
        },
        allTrails: {
          ...expenses.fixed.allTrails,
          difference: allTrailsDifference,
        },
        total: {
          actual: totalActualFixedExpenses,
          budgeted: totalBudgetedFixedExpenses,
          difference: totalDifferenceFixedExpenses,
          percentage: percentages.fixedExpenses,
        },
      },
      variable: {
        electric: {
          ...expenses.variable.electric,
          difference: electricDifference,
        },
        water: {
          ...expenses.variable.water,
          difference: waterDifference,
        },
        carFuel: {
          ...expenses.variable.carFuel,
          difference: carFuelDifference,
        },
        tolls: {
          ...expenses.variable.tolls,
          difference: tollsDifference,
        },
        groceries: {
          ...expenses.variable.groceries,
          difference: groceriesDifference,
        },
        householdProducts: {
          ...expenses.variable.householdProducts,
          difference: householdProductsDifference,
        },
        carMaintenance: {
          ...expenses.variable.carMaintenance,
          difference: carMaintenanceDifference,
        },
        haircut: {
          ...expenses.variable.haircut,
          difference: haircutDifference,
        },
        personalCareDoctor: {
          ...expenses.variable.personalCareDoctor,
          difference: personalCareDoctorDifference,
        },
        dogSupplies: {
          ...expenses.variable.dogSupplies,
          difference: dogSuppliesDifference,
        },
        total: {
          actual: totalActualVariableExpenses,
          budgeted: totalBudgetedVariableExpenses,
          difference: totalDifferenceVariableExpenses,
          percentage: percentages.variableExpenses,
        },
      },
      fun: {
        clothing: {
          ...expenses.fun.clothing,
          difference: clothingDifference,
        },
        eatingOut: {
          ...expenses.fun.eatingOut,
          difference: eatingOutDifference,
        },
        funPurchases: {
          ...expenses.fun.funPurchases,
          difference: funPurchasesDifference,
        },
        entertainmentActivities: {
          ...expenses.fun.entertainmentActivities,
          difference: entertainmentActivitiesDifference,
        },
        vacation: {
          ...expenses.fun.vacation,
          difference: vacationDifference,
        },
        gifts: {
          ...expenses.fun.gifts,
          difference: giftsDifference,
        },
        total: {
          actual: totalActualFunExpenses,
          budgeted: totalBudgetedFunExpenses,
          difference: totalDifferenceFunExpenses,
          percentage: percentages.funExpenses,
        },
      },
    },
    Investments: {
      roth401k: {
        ...investments.roth401k,
        difference: roth401kDifference,
      },
      rothIRA: {
        ...investments.rothIRA,
        difference: rothIRADifference,
      },
      individualInvestments: {
        ...investments.individualInvestments,
        difference: individualInvestmentsDifference,
      },
      mutualFunds: {
        ...investments.mutualFunds,
        difference: mutualFundsDifference,
      },
      total: {
        actual: totalActualInvestments,
        budgeted: totalBudgetedInvestments,
        difference: totalDifferenceInvestments,
        percentage: percentages.investments,
      },
    },
    Totals: {
      income: totalActualIncome,
      expenses: totalActualExpenses,
      investments: totalActualInvestments,
      amtAvailableToInvest,
      savings: amtRemaining,
    },
    Savings: {
      actual: savings.actual,
      budgeted: savings.budgeted,
      difference: savingsDifference,
      percentage: percentages.savings,
    },
    InvestmentChecking: {
      rothIRA: investments.rothIRA.actual,
      individualInvestments: investments.individualInvestments.actual,
      mutualFunds: investments.mutualFunds.actual,
    },
    CarPayment: {
      ...carPayment,
      carAmtRemaining,
    },
  };

  const createNewMonth = async () => {
   await createMonth(monthObjToDb);
  };

  const saveMonth = async () => {
    await updateMonth(`${year}-${month.toLowerCase()}`, monthObjToDb);
  };

  return (
    <div>
      { loading ? <div>loading</div> :
        (
        <>
          <TextInput
            className={styles.input}
            label="Month"
            placeholder="Current Month"
            onChange={(event) => updateMonthString(event.currentTarget.value)}
            value={month}
          />
          <NumberInput
            className={styles.input}
            label="Year"
            onChange={(value: number) => updateYear(value)}
            prefix=""
            thousandSeparator=""
            value={year}
          />
          <Income
            income={income}
            mergeIncomeUpdate={mergeIncomeUpdate}
            jobDifference={jobDifference}
            otherDifference={otherDifference}
            totalActualIncome={totalActualIncome}
            totalBudgetedIncome={totalBudgetedIncome}
            totalDifferenceIncome={totalDifferenceIncome}
          />
          <Expenses {...expenseProps} />
          <Investments
            investments={investments}
            mergeInvestmentUpdate={mergeInvestmentUpdate}
            roth401kDifference={roth401kDifference}
            rothIRADifference={rothIRADifference}
            individualInvestmentsDifference={individualInvestmentsDifference}
            mutualFundsDifference={mutualFundsDifference}
            totalActualInvestments={totalActualInvestments}
            totalBudgetedInvestments={totalBudgetedInvestments}
            totalDifferenceInvestments={totalDifferenceInvestments}
            percentages={percentages}
            mergePercentageUpdate={mergePercentageUpdate}
          />
          <Totals
            income={totalActualIncome}
            expenses={totalActualExpenses}
            investments={totalActualInvestments}
            amtAvailableToInvest={amtAvailableToInvest}
            savings={amtRemaining}
          />
          <Savings
            savings={savings}
            mergeSavingsUpdate={mergeSavingsUpdate}
            savingsDifference={savingsDifference}
            percentages={percentages}
            mergePercentageUpdate={mergePercentageUpdate}
          />
          <InvestmentChecking {...InvestmentCheckingProps} />
          <CarPayment
            carPayment={carPayment}
            carAmtRemaining={carAmtRemaining}
            mergeCarPaymentUpdate={mergeCarPaymentUpdate}
          />
          <Button onClick={createNewMonth}>Create</Button>
          {/* <Button onClick={saveMonth}>Save</Button> */}
        </>
        )
      }
    </div>
  );
}
