

class Game {
    constructor() {
      this.company;
      this.currentWeek =1;
      //there will also have to be enemies it will keep track of
      this.enemies;
      this.events = new Events();
      this.departmentDisplay = document.getElementById('departmentDisplay');
      this.employeeDisplay = document.getElementById('employeeDisplay');
      this.memoArray =[];
      this.nextWeekMemos =[];
    }


  createCompany(){
      this.company = new Company();
      this.company.canvas = document.getElementById('companyCanvas');
      this.company.attachDepartments();
      //will fil up departments with data, may need to change ordwering
      this.company.fillDepartments();
      this.company.hireEmployees();
      this.updateDisplays();
      //This will add the intro memo
      this.changeMemo(timedMemos[0]);
  }
  updateDisplays(){
      this.company.setMaxIncome();
      this.company.setMoney();
      this.company.setProductivity();
      this.company.setNumEmployee();
  }
  //What happens to the company when we got to the next week
  nextWeek(){
    //just add income for now
    let tempMoney;
    this.currentWeek = this.currentWeek +1;
    tempMoney = this.company.moneyTracker.currentMoney + this.company.moneyTracker.grossIncome;
    this.company.moneyTracker.currentMoney  = tempMoney;
    this.company.setMaxIncome();
    this.company.setMoney();
    //will interact with employees on the weekly basis
    this.company.getDepartment('IT').completeTrainingReduction(this.company);
    //will throw the next week memos into the current week memos
    while(this.nextWeekMemos.length != 0){
      this.memoArray.push(this.nextWeekMemos.pop());
    }
    if(this.company.checkForFirstMM()){
      this.company.addMM();
      //index 6 contains the special Middle management memo
      this.memoArray.push(specialMemos[1]);
    }
    this.company.nextWeekEmp();
    this.company.checkWeeklyProd();


    while(employeesToHire.length != 0){
      employeesToHire.pop();
    }
    this.memoArray.push(createMemo());
    //switch to next Memo
    this.changeMemo(this.memoArray.pop());
    
  }
  changeMemo(memo){
    if(memo.preMemo != undefined){
      memo.preMemo();
    }
      this.implementMemo(memo)
      
      //need to hide newHires 

      document.getElementById('fullMemo').style.display = 'block';
      document.getElementById('fullHire').style.display = 'none';
  }
  //will make the inner html changes to the memo
  implementMemo(memo){
    document.getElementById('fullMemo').innerHTML = memo.memoHTML;
    document.getElementById('fullMemo').children[0].children[1].children[0].onclick = function(){memo.option1()};
    document.getElementById('fullMemo').children[0].children[1].children[1].onclick = function(){memo.option2()};
    document.getElementById('fullMemo').children[0].children[1].children[2].onclick = function(){memo.option3()};
  }
  finishMemo(){
    //adding new hires after memo
    if(this.memoArray.length == 0) {
    document.getElementById('nextWeekButton').style.display = 'block';
    this.addNewHires();
    realGame.company.setProductivity();
    }
    else{
      this.changeMemo(this.memoArray.pop());
    }
  }
  addNewHires(){
    document.getElementById('fullHire').style.display = 'block';
    while(document.getElementById('allNewHires').firstChild){
      document.getElementById('allNewHires').removeChild(document.getElementById('allNewHires').firstChild);
    }
    this.company.setHiringTracker();
    //must create three new employees
    let newEmps = [];
    //then I need to show them, I can use the showEmployee in Human resources function
    let dep = this.company.getDepartment('Human Resources');
    //this will check tell us how many employees are in marketing, will be used to ascertain number of hires to put out
    let checker = this.company.getDepartment('Marketing').employees.length;
    checker = this.calculateMarketing(checker);
    for(let x=0;x<checker;x++){
      newEmps[x] = createEmployee(this.company.hiringTracker);
      employeesToHire[x] = newEmps[x];
      document.getElementById('allNewHires').appendChild(createEmpHiringObject(x+1));
      document.getElementById("employee" + (x+1)).children[0].style.display = "flex";
      dep.showEmployee(document.getElementById("employee" + (x+1)).children[0].children[1],newEmps[x]);
    }
  }
  calculateMarketing(checker){
    let num =2;
    let tracker =0;
    while(checker >= Math.pow(num,tracker)){
      tracker++;
    }
    return tracker;
  }
}