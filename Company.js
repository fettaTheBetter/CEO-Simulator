
class Company {
    constructor() {
      this.departmentsArray = [new HumanResources(),new IT(), new Marketing(), new Sales()];
      this.moneyTracker = new MoneyTracker();
      this.numForMM = 5;
      this.bigDisplay;
      //will keep track of how far we are in employee ids
      this.currentEmpNum =1;
      //the employee currently selected
      this.curSelectEmp;
    }
    //will add MM the first time you get 5 people in one department
    addMM(){
        this.departmentsArray.push(new MiddleManagement());
    }
    //used as set up for the start of game
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
            this.hireEmployee(this.departmentsArray[j].name,createEmployee());
        }
        //will add an extra employees to the sales department
        this.hireEmployee('Sales',createEmployee());
        this.hireEmployee('Sales',createEmployee());
        this.hireEmployee('Sales',createEmployee());

    }
    hireEmployee(departmentName,employee){
        let department = this.getDepartment(departmentName);
        employee.idNum = this.currentEmpNum;
        this.currentEmpNum++;
        department.addEmployee(employee);
    }
    setMoney(){
        this.setExpenses();
        //will have to check sales
        //currently sales will be hardcoded, will hopefully change later
        let tempIncome = this.moneyTracker.maxIncome*this.departmentsArray[3].calculateProductivity()*0.01;
        //tempIncome = Math.round(tempIncome * 100) / 100;
        this.moneyTracker.income = tempIncome;
        this.moneyTracker.grossIncome = tempIncome - this.moneyTracker.expenses;
        this.moneyTracker.grossIncomeValue.innerText = "$"+ this.moneyTracker.grossIncome.toFixed(2);
        this.moneyTracker.expensesValue.innerText = "$" + this.moneyTracker.expenses.toFixed(2);
        this.moneyTracker.incomeValue.innerText = "$" + this.moneyTracker.income.toFixed(2);
        this.moneyTracker.currentMoneyValue.innerText = "$" + this.moneyTracker.currentMoney.toFixed(2);
    }
    setProductivity(){
        //what will be my algorithm?
        //currently just set it with a base value or employee productivity
        for(let i = 0;i<this.departmentsArray.length;i++){
            this.departmentsArray[i].productivity = this.departmentsArray[i].calculateProductivity() ;
            this.departmentsArray[i].canvas.children[1].children[1].innerText = this.departmentsArray[i].productivity + "%";
        }
    }
    setExpenses(){
        let sumOfExpenses = 0;
        for(let i = 0;i<this.departmentsArray.length;i++){
            this.departmentsArray[i].expenses = this.departmentsArray[i].calculateExpenses();
            this.departmentsArray[i].canvas.children[2].children[1].innerText = "$" + this.departmentsArray[i].expenses;
            sumOfExpenses = sumOfExpenses + this.departmentsArray[i].expenses;
        }
        this.moneyTracker.expenses = sumOfExpenses;
    }
    setMaxIncome(){
        //marketing is hardcoded into this
        let dep = this.getDepartment('Marketing');
        dep.setMaxIncome();
        this.moneyTracker.maxIncome = dep.getMaxIncome();
    }

    nextWeekEmp(){
        for(let i=0;i<this.departmentsArray.length;i++){
            for(let j=0;j<this.departmentsArray[i].employees.length;j++){
                this.departmentsArray[i].employees[j].hasSwitchDept = false;
                if(!(this.departmentsArray[i].employees[j].trainingTracker.isCompleted)){
                    this.departmentsArray[i].employees[j].reduceTraining();
                }
                //need to update productivity

            }
        }
    }



    ///
    /// UTILITY FUNCTIONS
    ///


    //this will get department by name
    getDepartment(name){
        for(let i=0;i<this.departmentsArray.length;i++){
            if(this.departmentsArray[i].name == name){
                return this.departmentsArray[i];
            }
        }
        return null;
    }
    
    

    

}