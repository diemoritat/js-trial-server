import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import chalk from 'chalk';
import generateTransactions from './controllers/transactions';
import { pagination } from './util';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const transactions = generateTransactions();

app.get('/api/transactions', (req, res) => {
  const pageSize = 100;
  const currentPage = parseInt(req.query.page) || 1;

  const data = pagination(transactions, pageSize, currentPage);
  res.json({
    length: data.length,
    transactions: data
  });
});

app.get('/api/transactions/:id', (req, res) => {
  const { id } = req.params;
  const transaction = transactions.filter(t => t.id === parseInt(id))[0];
  console.log('transaction: ', transaction);
  res.json(transaction);
});

app.listen(port, () => {
  console.log();
  console.log(`  App running at:`);
  console.log(
    `  - Local:   ${chalk.cyan(`http://localhost:${chalk.bold(port)}/`)}`
  );
  console.log();
});
