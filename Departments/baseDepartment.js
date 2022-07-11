class Department {
    constructor() {
      //these are the base values
      this.productivity = 50;
      this.expenses = 150;
      //breakpoints to reach the next extra level? I'll explain this better!
      this.breakpoints;
      //middlemanagers needed
      this.MMneeded = 0;
      //contains all employees in department
      this.employees = [];
      this.name;
      this.expenses = 0;

      //will be used to scale departments by people
      this.increaseByEmp;
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
      if(this.employees.length == 0){
        returnedNum =0;
      }
      return returnedNum;
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
        tempDiv.children[1].innerText = this.employees[i].name + " (" +this.employees[i].idNum + ")";
        //will need to add on onclick function
        canvas.appendChild(tempDiv);
      }
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
    calculateExpenses(){
      let sum = 0;
      //this will take the average productivity of the employees?
      for(let j=0;j<this.employees.length;j++){
        sum = sum + this.employees[j].expense;
      }
      return sum;
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
    //will move an employee to a different department
    moveEmployee(employee,otherDep){
      employee.hasSwitchDept = true;
      otherDep.addEmployee(employee);
      this.removeEmployee(employee);
    }
  }