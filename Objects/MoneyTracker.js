


class MoneyTracker {
    constructor() {
      this.currentMoney = 1000;
      this.income = 0;
      this.maxIncome = 0;
      this.grossIncome = 0;
      this.expenses = 0;
      this.canvas = document.getElementById('moneyTracker');
      this.incomeValue = this.canvas.children[1].children[1];
      this.expensesValue = this.canvas.children[2].children[1];
      this.grossIncomeValue = this.canvas.children[3].children[1];
      this.currentMoneyValue = this.canvas.children[4].children[1];


    }
}