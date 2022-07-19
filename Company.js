
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
      this.hiringTracker = new HiringTracker();
      //keeps track of how many times you ignore the board
      this.ignoreTracker =0;
      //will be the employee currently implicated in a scandal
      this.scandalEmp;
    }
    //will add MM the first time you get 5 people in one department
    addMM(){
        this.departmentsArray.push(new MiddleManagement());
        this.departmentsArray[this.departmentsArray.length-1].canvas.style.display = "flex";
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
    //will check if we need to do the action for the first middle manager
    checkForFirstMM(){
        //if we have a middle management already
        if(this.getDepartment('Middle Management')){
            return false;
        }
        //if we do not have middle management yet
        else {
            //check if we need it 
            for(let i=0;i<this.departmentsArray.length;i++){
                if(this.departmentsArray[i].employees.length >= 5){
                    return true;
                }
            }  
        }
        return false;
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
    fireEmployee(employee){
        let dep = this.getDepartment(employee.currentDepartment);
        dep.fireEmployee(employee);
    }
    gainMoney(amount){
        this.moneyTracker.currentMoney = this.moneyTracker.currentMoney+amount;
    }
    getNumOfEmployees(){
        let num =0;
        for(let i=0;i<this.departmentsArray.length;i++){
            for(let j=0;j<this.departmentsArray[i].employees.length;j++){
                num++;
            }
        }
        return num;
    }
    //will hire employees, currently only used for start of game
    hireEmployees(){
        //
        //
        //this will hire a base four employees and put them in all departments
        for(let j=0;j < this.departmentsArray.length;j++){
            this.hireEmployee(this.departmentsArray[j].name,createEmployee(this.hiringTracker));
        }
        //will add an extra employees to the sales department
        this.hireEmployee('Sales',createEmployee(this.hiringTracker));
        this.hireEmployee('Sales',createEmployee(this.hiringTracker));
        this.hireEmployee('Sales',createEmployee(this.hiringTracker));

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
    //will return a bool of whether this departments productivity is greater than a number
    checkProductivity(depName,num){
        let dep = this.getDepartment(depName);
        let num2 = dep.calculateProductivity();
        if(num2 >= num){
            return true;
        }
        return false;
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
    //used in conjunction with HR to see how nice we can hire people
    setHiringTracker(){
        let prod = this.getDepartment("Human Resources").calculateProductivity();
        this.hiringTracker.changeHiringTracker(prod);
    }
    setMaxIncome(){
        //marketing is hardcoded into this
        let dep = this.getDepartment('Marketing');
        dep.setMaxIncome();
        this.moneyTracker.maxIncome = dep.getMaxIncome();
    }
    //will give each hud the num of employees
    setNumEmployee(){
        for(let i = 0;i<this.departmentsArray.length;i++){
            this.departmentsArray[i].canvas.children[3].children[1].innerText = this.departmentsArray[i].employees.length;
        }
    }
    increaseDepartmentProductivity(depName,value){
        let dep = this.getDepartment(depName);
        dep.increaseProductivity(value);
        dep.extraProductivity = dep.extraProductivity + value;
    }
    increaseAllProductivity(value){
        for(let i=0;i<this.departmentsArray.length;i++){
            this.increaseDepartmentProductivity(this.departmentsArray[i].name,value);
        }
    }
    nextWeekEmp(){
        for(let i=0;i<this.departmentsArray.length;i++){
            for(let j=0;j<this.departmentsArray[i].employees.length;j++){
                this.departmentsArray[i].employees[j].hasSwitchDept = false;
                if(!(this.departmentsArray[i].employees[j].trainingTracker.isCompleted)){
                    this.departmentsArray[i].employees[j].reduceTraining();
                }
                this.departmentsArray[i].employees[j].expense =this.departmentsArray[i].employees[j].expense +0.5;
                this.departmentsArray[i].employees[j].baseProductivity = this.departmentsArray[i].employees[j].baseProductivity + this.departmentsArray[i].employees[j].productivityIncrease;
                //need to update productivity

            }
        }
    }
    checkWeeklyProd(){
        for(let i=0;i<this.departmentsArray.length;i++){
            this.departmentsArray[i].checkWeeklyProd();        
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