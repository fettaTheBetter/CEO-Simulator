


class Marketing extends Department {
    constructor(){
        super();
        this.name = "Marketing";
        this.maxIncome = 100;
        this.baseMaxIncome = 100;
        this.increaseByEmp = 25;
    }
    setMaxIncome(){
        this.maxIncome = this.baseMaxIncome+this.employees.length*this.increaseByEmp;
    }
    getMaxIncome(){
        return this.maxIncome*this.calculateProductivity()*0.01;
    }
}