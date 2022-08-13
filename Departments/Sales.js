


class Sales extends Department {
    constructor(){
        super();
        this.name = "Sales";
        this.maxIncome = 100;
        this.baseMaxIncome = 100;
        this.increaseByEmp = 50;
    }  

    setMaxIncome(){
        this.maxIncome = this.baseMaxIncome+(this.employees.length*this.increaseByEmp);
    }
    getMaxIncome(){
        return this.maxIncome;
    }
}