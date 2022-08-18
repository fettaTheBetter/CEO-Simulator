
class Company {
    constructor() {
      this.departmentsArray = [new HumanResources(), new Marketing(), new Sales(), new AidStation(), new Custodian(), new Onboarding(), new Recruiting()];
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
      //will keep track of how many ignored Memos they have chained through
      this.ignoredMemoTracker = 0;
      //will be the employee currently implicated in a scandal
      this.scandalEmp;
      this.fightCanvas =document.getElementById('fightCanvas');
    }
    addFight(){
        this.fightCanvas.style.display = "flex";
    }
    //will add MM the first time you get 5 people in one department
    addMM(){
        this.departmentsArray.push(new MiddleManagement());
        this.getDepartment('Middle Management').canvas.style.display = "flex";
    }
    //used as set up for the start of game
    attachDepartments(){
        this.departmentsArray[0].canvas = document.getElementById('Human ResourcesCanvas');
        
        this.departmentsArray[2].canvas = document.getElementById('MarketingCanvas');
        this.departmentsArray[1].canvas = document.getElementById('SalesCanvas');
        this.departmentsArray[3].canvas = document.getElementById('Aid StationCanvas');
        this.departmentsArray[4].canvas = document.getElementById('CustodianCanvas');
        this.departmentsArray[5].canvas = document.getElementById('OnboardingCanvas');
        this.departmentsArray[6].canvas = document.getElementById('RecruitingCanvas');
        //also attaching moneyTracker

        //this is the display on left
        this.bigDisplay = document.getElementById('rightDisplay');
    }

    fillDepartments(){
        for(let i=0;i<this.departmentsArray.length;i++){
            this.departmentsArray[i].canvas.children[1].children[1].innerText = this.departmentsArray[i].productivity;
            this.departmentsArray[i].canvas.children[1].children[1].innerText = this.departmentsArray[i].expenses;
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

    }
    hireEmployee(departmentName,employee){
        let department = this.getDepartment(departmentName);
        employee.idNum = this.currentEmpNum;
        this.currentEmpNum++;
        department.addEmployee(employee);
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




    //will give each hud the num of employees

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
                this.departmentsArray[i].employees[j].baseProductivity = this.departmentsArray[i].employees[j].baseProductivity + this.departmentsArray[i].employees[j].productivityIncrease;
                this.departmentsArray[i].employees[j].weeksEmployed = this.departmentsArray[i].employees[j].weeksEmployed +1;
                //need to update productivity increases
                this.departmentsArray[i].employees[j].checkWeeklyProd();

                //checkForRaises
                this.departmentsArray[i].employees[j].raiseTracker.reduceWeek();
                this.departmentsArray[i].employees[j].checkForRaise();

                //changeInjuryTrackers
                this.departmentsArray[i].employees[j].healByIT(this.getDepartment('Aid Station').calculateProductivity());
            }
        }
    }


    ////////////////////
    /// SET FUNCTIONS //
    ////////////////////    
    setExpenses(){
        let sumOfExpenses = 0;
        for(let i = 0;i<this.departmentsArray.length;i++){
            this.departmentsArray[i].expenses = this.departmentsArray[i].calculateExpenses();
            //this.departmentsArray[i].canvas.children[2].children[1].innerText = "$" + this.departmentsArray[i].expenses.toFixed(2);
            sumOfExpenses = sumOfExpenses + this.departmentsArray[i].expenses;
        }
        this.moneyTracker.expenses = sumOfExpenses;
    }
    setFightValue(){
        let fightValue =0;
        let numOfEmp = 0;
        //will iterate through departments and employees in departments to add up everything
        for(let i=0;i<this.departmentsArray.length;i++){
            for(let j=0;j<this.departmentsArray[i].employees.length;j++){
                fightValue = fightValue+this.departmentsArray[i].employees[j].fightValue;
                numOfEmp++;
            }
        }
        fightValue = this.fightValueCalculations(fightValue);
        this.fightCanvas.children[2].children[1].innerText = fightValue.toFixed(2);
        this.fightCanvas.children[1].children[1].innerText = numOfEmp;
    }    
    setHiringTracker(){
        let prod = this.getDepartment("Recruiting").calculateProductivity();
        this.hiringTracker.changeHiringTracker(prod);
    }    
    setMaxIncome(){
        //marketing is hardcoded into this
        let dep = this.getDepartment('Marketing');
        dep.setMaxIncome();
        this.moneyTracker.maxIncome = dep.getMaxIncome();
    }    
    setMoney(){
        this.setExpenses();
        //will have to check sales
        //currently sales will be hardcoded, will hopefully change later
        let tempIncome = this.moneyTracker.maxIncome*this.getDepartment('Sales').calculateProductivity()*0.01;
        //tempIncome = Math.round(tempIncome * 100) / 100;
        this.moneyTracker.income = tempIncome;
        this.moneyTracker.grossIncome = tempIncome - this.moneyTracker.expenses;
        this.moneyTracker.grossIncomeValue.innerText = "$"+ this.moneyTracker.grossIncome.toFixed(2);
        this.moneyTracker.expensesValue.innerText = "$" + this.moneyTracker.expenses.toFixed(2);
        this.moneyTracker.incomeValue.innerText = "$" + this.moneyTracker.income.toFixed(2);
        this.moneyTracker.currentMoneyValue.innerText = "$" + this.moneyTracker.currentMoney.toFixed(2);
    }
    //will give each hud the num of employees
    setNumEmployee(){
        for(let i = 0;i<this.departmentsArray.length;i++){
            this.departmentsArray[i].canvas.children[3].children[1].innerText = this.departmentsArray[i].employees.length;
        }
    }    
    setProductivity(){
        //what will be my algorithm?
        //currently just set it with a base value or employee productivity
        for(let i = 0;i<this.departmentsArray.length;i++){
            this.departmentsArray[i].productivity = this.departmentsArray[i].calculateProductivity() ;
            this.departmentsArray[i].canvas.children[1].children[1].innerText = this.departmentsArray[i].productivity.toFixed(2) + "%";
        }
    }

    //////////////////////
    /// CHECK FUNCTIONS //
    //////////////////////    
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
    //will check the employees in the each department to see change the MM numbers needed
    checkForNumNeeded(department){
        department.MMneeded = Math.floor(department.employees.length / this.numForMM);
    }  
    //will check if the department needs another middle Management
    checkWeeklyMM(){
        //will only do anything if middle management is in
        if(this.getDepartment("Middle Management") != null){
            for(let i=0;i<this.departmentsArray.length;i++){
                this.checkForNumNeeded(this.departmentsArray[i]);
                if(this.departmentsArray[i].MMneeded > this.getDepartment("Middle Management").numOfMMForDep(this.departmentsArray[i].name)){
                    this.departmentsArray[i].hasEnoughMM = false;
                }
                else{
                    this.departmentsArray[i].hasEnoughMM = true;
                }
            }
        }
    }  

    checkWeeklyProd(){
        for(let i=0;i<this.departmentsArray.length;i++){
            this.departmentsArray[i].checkWeeklyProd();        
        }
    }

    ////////////////////////
    /// UTILITY FUNCTIONS //
    ////////////////////////


    //will calculate the fightValues
    fightValueCalculations(fightValue){
        //will edit this later
        //will check productivity of MM if no MM default to 15% productivity

        return fightValue;
    }

    //this will get department by name
    getDepartment(name){
        for(let i=0;i<this.departmentsArray.length;i++){
            if(this.departmentsArray[i].name == name){
                return this.departmentsArray[i];
            }
        }
        return null;
    }
    getAllEmployees(){
        let empArray = [];
        for(let i=0;i<this.departmentsArray.length;i++){
            for(let j=0;j<this.departmentsArray[i].employees.length;j++){
                empArray.push(this.departmentsArray[i].employees[j]);
            }
        }

        return empArray;


    }
    //will retrieve an employee by idNum
    getEmployee(idNum){
        for(let i=0;i<this.departmentsArray.length;i++){
            for(let j=0;j<this.departmentsArray[i].employees.length;j++){
                if(this.departmentsArray[i].employees[j].idNum == idNum){
                    return this.departmentsArray[i].employees[j];
                }
            }
        }
        return null;
    }
    changeEmployeeInjuryTracker(idNum,injuryTracker){
        for(let i=0;i<this.departmentsArray.length;i++){
            for(let j=0;j<this.departmentsArray[i].employees.length;j++){
                if(this.departmentsArray[i].employees[j].idNum == idNum){
                    return this.departmentsArray[i].employees[j].injuryTracker = injuryTracker;
                }
            }
        }
    }
    //will take in an array of employees
    //then will modify the employees in your company to have the injury trackers fromt he employees being sent in as argument
    assignInjuryTrackers(EmpArray){
        for(let i=0;i<EmpArray.length;i++){
            EmpArray[i].injuryTracker.changeInjury(EmpArray[i].injuryTracker.checkBattleInjuries());
            this.changeEmployeeInjuryTracker(EmpArray[i].idNum,EmpArray[i].injuryTracker);
        }
    }
    
    

    

}