
class Company {
    constructor() {
      this.departmentsArray = [new HumanResources(),new IT(), new Marketing(), new Sales()];
      this.moneyTracker = new MoneyTracker();
      this.numForMM = 5;
      this.bigDisplay;
    }
    //will add MM the first time you get 5 people in one department
    addMM(){
        this.departmentsArray.push(new MiddleManagement());
    }
    attachDepartments(){
        this.departmentsArray[0].canvas = document.getElementById('HumanResourcesCanvas');
        
        this.departmentsArray[1].canvas = document.getElementById('ITCanvas');
        this.departmentsArray[2].canvas = document.getElementById('MarketingCanvas');
        this.departmentsArray[3].canvas = document.getElementById('SalesCanvas');
        //also attaching moneyTracker

        //this is the display on left
        this.bigDisplay = document.getElementById('rightDisplay');
    }
    //will check if the department needs another middle Management
    checkForMM(depId){
        //figure this out
        if(this.departmentsArray[depId].MMneeded < Math.floor((this.departmentsArray[depId].employees.length))){

        }
    }
    fillDepartments(){
        for(let i=0;i<this.departmentsArray.length;i++){
            this.departmentsArray[i].canvas.children[1].children[1].innerText = this.departmentsArray[i].productivity;
            this.departmentsArray[i].canvas.children[1].children[1].innerText = this.departmentsArray[i].expenses
        }
    }
    //will hire employees, currently only used for start of game
    hireEmployees(){
        //
        //
        //this will hire a base four employees and put them in all departments
        for(let j=0;j < this.departmentsArray.length;j++){
            this.departmentsArray[j].addEmployee(createEmployee());
        }
        //will add an extra employee to the first department
        this.departmentsArray[0].addEmployee(createEmployee());
    }
    setMoney(){
        //will have to check sales
        //currently sales will be hardcoded, will hopefully change later
        this.moneyTracker.income = this.departmentsArray[3].getWeeklyValue()*this.departmentsArray[3].calculateProductivity()*0.01;
        this.moneyTracker.incomeValue.innerText = this.moneyTracker.income;
        this.moneyTracker.currentMoneyValue.innerText = this.moneyTracker.currentMoney;
    }
    setProductivity(){
        //what will be my algorithm?
        //currently just set it with a base value or employee productivity
        for(let i = 0;i<this.departmentsArray.length;i++){
            this.departmentsArray[i].productivity = this.departmentsArray[i].calculateProductivity();
            this.departmentsArray[i].canvas.children[1].children[1].innerText = this.departmentsArray[i].productivity;
        }
    }
    
    

    

}