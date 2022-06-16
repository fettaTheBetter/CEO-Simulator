


class MoneyTracker {
    constructor() {
      this.currentMoney = 1000;
      this.income = 100;
      this.canvas = document.getElementById('moneyTracker');
      this.incomeValue = this.canvas.children[1].children[1];
      this.currentMoneyValue = this.canvas.children[2].children[1];

    }
}