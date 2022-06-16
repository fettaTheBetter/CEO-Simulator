

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
      //will fil up departments with data
      this.company.fillDepartments();
      this.company.hireEmployees();
      this.company.setMoney();
      this.company.setProductivity();
  }
  nextWeek(){
    
  }
}