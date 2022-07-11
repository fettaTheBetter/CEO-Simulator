


class Sales extends Department {
    constructor(){
        super();
        this.income = 0;
        this.name = "Sales";
    }  

    getWeeklyValue(){
        //will just return a money value
        return this.income
    }
}