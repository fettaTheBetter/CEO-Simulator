


class Marketing extends Department {
    constructor(){
        super();
        this.name = "Marketing";
        this.maxIncome = 100;
        this.baseMaxIncome = 100;
        this.maxIncomeMultiplier = 1000
    }
    setMaxIncome(){
        this.maxIncome = this.baseMaxIncome+(this.productivity*this.maxIncomeMultiplier*0.01);
    }
    getMaxIncome(){
        return this.maxIncome*this.calculateProductivity()*0.01;
    }
}