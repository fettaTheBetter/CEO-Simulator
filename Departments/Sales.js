


class Sales extends Department {
    constructor(){
        super();
        this.name = "Sales";
        this.maxIncome = 100;
        this.currentIncome = 0;
        this.baseMaxIncome = 100;
        this.maxIncomeMultiplier = 1000
    }  

    setMaxIncome(int){
        this.maxIncome = int;
    }
    getMaxIncome(){
        return this.maxIncome;
    }
}