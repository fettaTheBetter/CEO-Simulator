


class Sales extends Department {
    constructor(){
        super();
        this.income = 45;
        this.name = "Sales";
    }  

    getWeeklyValue(){
        //will just return a money value
        return this.income
    }
}