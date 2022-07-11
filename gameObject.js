

class Game {
    constructor() {
      this.company;
      this.currentWeek;
      //there will also have to be enemies it will keep track of
      this.enemies;
      this.events = new Events();
      this.departmentDisplay = document.getElementById('departmentDisplay');
      this.employeeDisplay = document.getElementById('employeeDisplay');
    }


  createCompany(){
      this.company = new Company();
      this.company.canvas = document.getElementById('companyCanvas');
      this.company.attachDepartments();
      //will fil up departments with data, may need to change ordwering
      this.company.fillDepartments();
      this.company.hireEmployees();
      this.updateDisplays();
  }
  updateDisplays(){
      this.company.setMaxIncome();
      this.company.setMoney();
      this.company.setProductivity();
  }
  //What happens to the company when we got to the next week
  nextWeek(){
    //just add income for now
    let tempMoney
    tempMoney = this.company.moneyTracker.currentMoney + this.company.moneyTracker.grossIncome;
    this.company.moneyTracker.currentMoney  = tempMoney;
    this.company.setMaxIncome();
    this.company.setMoney();
    //will interact with employees on the weekly basis
    this.company.getDepartment('IT').completeTrainingReduction(this.company);
    this.company.nextWeekEmp();

    //should make new hires visible
    //add new hires?
    this.addNewHires();

    //switch to next Memo
    this.changeMemo();
    
  }
  changeMemo(){

  }
  addNewHires(){
    //must create three new employees
    let newEmps = [createEmployee(),createEmployee(),createEmployee()];
    //then I need to show them, I can use the showEmployee in Human resources function
    let dep = this.company.getDepartment('Human Resources');
    for(let x=0;x<newEmps.length;x++){
      employeesToHire[x] = newEmps[x];
    }
    document.getElementById("employee1").children[0].style.display = "flex";
    document.getElementById("employee2").children[0].style.display = "flex";
    document.getElementById("employee3").children[0].style.display = "flex";
    dep.showEmployee(document.getElementById("employee1").children[0].children[1],newEmps[0]);
    dep.showEmployee(document.getElementById("employee2").children[0].children[1],newEmps[1]);
    dep.showEmployee(document.getElementById("employee3").children[0].children[1],newEmps[2]);
  }
}