class Department {
    constructor() {
      //these are the base values
      this.productivity = 50;
      this.expenses;
      //breakpoints to reach the next extra level? I'll explain this better!
      this.breakpoints;
      //middlemanagers needed
      this.hasEnoughMM = true;
      //contains all employees in department
      this.employees = [];
      this.name;
      this.expenses = 0;
      this.extraProductivity =0;
      //will be used to scale departments by people
      this.increaseByEmp;
      //will be an array of productivity objects, these will get a reduce length at the end of each week
      this.productivityIncreases = [];
    }
    addEmployee(employee){
      let tempDepartment = this.name;
      employee.htmlEmployee.onclick = function() {clickEmployee(employee.idNum,tempDepartment)};
      employee.currentDepartment = this.name;
      //will need to check the productivity
      employee.setProductivity((this.name == employee.specialization));
      this.employees.push(employee);
      //need to check if they have more MM than needed

    }
    calculateExpenses(){
      let sum = 0;
      //this will take the average productivity of the employees?
      for(let j=0;j<this.employees.length;j++){
        sum = sum + this.employees[j].expense;
      }
      return sum;
    }
    calculateProductivity(){
      let sum = 0;
      //this will take the average productivity of the employees?
      for(let j=0;j<this.employees.length;j++){
        //will tell us if the employee is in their specialization or not
        if(this.employees[j].specialization == this.name){
          this.employees[j].setProductivity(true);
        }
        else{
          this.employees[j].setProductivity(false);
        }
        sum = sum + this.employees[j].productivity;
      }
      let returnedNum = Math.floor(sum / this.employees.length);
      for(let t=0;t<this.productivityIncreases.length;t++){
        returnedNum = this.productivityIncreases[t].productivity + returnedNum;
      }
      if(this.employees.length == 0){
        returnedNum =0;
      }
      //if you don't have enough middle managers
      if(!(this.hasEnoughMM)){
        returnedNum = returnedNum*0.5;
      }
      //will input the equation for productivity here
      returnedNum = this.calculateProductivityFormula(returnedNum);
      return returnedNum;
    }
    //will check the weekly productivity objects
    checkWeeklyProd(){
      for(let n=0;n<this.productivityIncreases.length;n++){
        this.productivityIncreases[n].reduceLength(1);
        if(this.productivityIncreases[n].weeksLeft <=0){
          this.productivityIncreases = removeFromArray(this.productivityIncreases[n],this.productivityIncreases);
          //this ensures we check the object that was swapped
          n--;
        }
      }
    }
    //the canvas we will use to display this department
    display(canvas){
      //need to remove all previous children
      while(canvas.firstChild){
        canvas.removeChild(canvas.firstChild);
      }
      //to display need to iterate through employees and insert them into the canvas
      let tempDiv;
      for(let i=0;i<this.employees.length;i++){
        tempDiv = this.employees[i].htmlEmployee;
        
        tempDiv.children[1].innerHTML = "<b>Productivity: </b>" + this.employees[i].productivity.toFixed(0) + '%';
        tempDiv.children[2].innerHTML = "<b>Expense: </b>" + this.employees[i].expense;
        tempDiv.children[3].innerHTML = "<b>Training: </b>" + (this.employees[i].trainingTracker.weeksToComplete-this.employees[i].trainingTracker.weeksCompleted) + " weeks left.";
        tempDiv.children[4].innerText = this.employees[i].name + " (" +this.employees[i].idNum + ")";
        //will need to add on onclick function
        canvas.appendChild(tempDiv);
      }
    }
    fireEmployee(employee){
      this.removeEmployee(employee);
    }
    //will find an employee and return it by it's idNum
    getEmployee(idNum){
      for(let i=0; i<this.employees.length;i++){
        if(this.employees[i].idNum == idNum){
          return this.employees[i];
        }
      }
      return null;
    }
    increaseProductivity(value){
      this.productivityIncreases.push(new ProductivityTracker(value,8));
    };
    //will move an employee to a different department
    moveEmployee(employee,otherDep){
      employee.hasSwitchDept = true;
      otherDep.addEmployee(employee);
      this.removeEmployee(employee);
    }
    //will remove an employee from a department
    removeEmployee(employee){
      //find in the employee array and remove
      for(let i=0;i<this.employees.length;i++){
        if(employee.idNum == this.employees[i].idNum){
          //swap with the end and pop
          let a = this.employees[i]
          this.employees[i] = this.employees[this.employees.length-1];
          this.employees[this.employees.length-1] = a;
          this.employees.pop();
          //will need to end removal after this
          return null;
        }
      }
    }
    sortByExpense(){
      //need to sort the employees by expense
      //not sure what sort I want
      let tempArray = this.employees;
        for(let i=0;i<this.employees.length;i++){
          tempArray = this.utilSortExpense(tempArray,i);
        }
      this.employees = tempArray;
    }
    sortByProd(){
      let tempArray = this.employees;
      for(let i=0;i<this.employees.length;i++){
        tempArray = this.utilSortProd(tempArray,i);
      }
      this.employees = tempArray;
    }
    


    




    ///////////////////
    //Utility Methods//
    ///////////////////
    utilSortExpense(array,num){
      let maxExpense =0;
      let maxIndex =0;
      for(let j=num;j<array.length;j++){
        if(maxExpense < array[j].expense){
          maxIndex = j;
          maxExpense = array[j].expense;
        }
      }
      array = swap(maxIndex,num,array);
      return array;

    }
    utilSortProd(array,num){
      let maxProd =0;
      let maxIndex =0;
      for(let j=num;j<array.length;j++){
        if(maxProd < array[j].productivity){
          maxIndex = j;
          maxProd = array[j].productivity;
        }
      }
      array = swap(maxIndex,num,array);
      return array;
    }



    calculateProductivityFormula(productivity){
      //have commented out this for now, don't want to use the same formula twice currently
      /*let prod ;
      if(productivity > 80){
        prod = 10*Math.sqrt(productivity);
      }
      else if(productivity <=80 && productivity >40){
        prod = (1/8)*Math.pow(productivity,3/2);
      }
      else{
        prod = (1/8)*Math.pow(productivity,3/2)/40;
      }
        return prod*100;*/
        return productivity;
    }


  }