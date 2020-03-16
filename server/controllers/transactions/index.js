import { generateCurrency } from './currency';
import { generateAmount, generatePaymentMethod } from './payment';
import { generateStatus } from './status';
import { getRandomInteger, getDateDifferenceInMonths } from '../../util';

const getCurrentDate = () => new Date();

const hasPastSixMonths = date => {
  const currentDate = getCurrentDate();
  const numberOfMonths = 6;

  return getDateDifferenceInMonths(currentDate, date) <= numberOfMonths;
};

const generateTransactions = (limit = 100) => {
  let counter = 1;

  let transactions = [];
  let currentDate = getCurrentDate();

  while (hasPastSixMonths(currentDate) && transactions.length < limit) {
    transactions.push({
      id: counter,
      date: new Date(currentDate),
      amount: generateAmount(),
      status: generateStatus(),
      currency: generateCurrency(),
      paymentMethod: generatePaymentMethod()
    });

    const currentNumerOfDays = currentDate.getDate();
    const randomNumberOfDays = getRandomInteger(3);
    currentDate.setDate(currentNumerOfDays - randomNumberOfDays);

    counter++;
  }

  return transactions;
};

export default generateTransactions;
