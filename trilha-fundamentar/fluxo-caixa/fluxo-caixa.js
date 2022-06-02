const income = [5000, 500]
const expenses = [1500, 1000, 300, 600]

const resultIncome = income.reduce((n, current) => n + current)
const resultExpenses = expenses.reduce((n, current) => n + current)

function familyCash() {
  let balance = resultIncome - resultExpenses
  if (balance < 0) {
    return console.log(`A familía está com um saldo negativo de ${balance}.`)
  } else {
    return console.log(`A familía está com um saldo positivo de ${balance}.`)
  }
}

familyCash()
