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
    }
    addEmployee(employee){
      this.employees.push(employee);
    }
    calculateProductivity(){
      let sum = 0;
      //this will take the average productivity of the employees?
      for(let j=0;j<this.employees.length;j++){
        sum = sum + this.employees[j].productivity;
      }
      return Math.floor(sum / this.employees.length);
    }
    //the canvas we will use to display this department
    display(canvas){
      console.log("Here is the canvas: " + canvas);
      //need to remove all previous children
      while(canvas.firstChild){
        canvas.removeChild(canvas.firstChild);
      }
      //to display need to iterate through employees and insert them into the canvas
      let tempDiv;
      for(let i=0;i<this.employees.length;i++){
        tempDiv = document.createElement("employee" + i);
        tempDiv.innerText = this.employees[i].name;
        canvas.appendChild(tempDiv);
      }
    }
  }