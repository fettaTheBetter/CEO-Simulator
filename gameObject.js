

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
      this.enemyRoundsFought = 0;
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
      this.changeMemo(timedMemos[2]);
  }
  updateDisplays(){
      this.company.setMaxIncome();
      this.company.setMoney();
      this.company.checkWeeklyMM();
      this.company.setProductivity();
      this.company.setNumEmployee();
      this.company.setFightValue();
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
    if(this.currentWeek % 5 == 4){
      this.memoArray.push(timedMemos[3]);
    }
    ///these are where the checkers for the timed week events go
    if(this.currentWeek == 4){
      this.memoArray.push(timedMemos[1]);
    }


    //will throw the next week memos into the current week memos
    while(this.nextWeekMemos.length != 0){
      this.memoArray.push(this.nextWeekMemos.pop());
    }
    if(this.company.checkForFirstMM()){
      //index 6 contains the special Middle management memo
      this.memoArray.push(specialMemos[1]);
      document.getElementById('switchDepartmentsMenu').children[2].appendChild(document.createElement('button'));
      document.getElementById('switchDepartmentsMenu').children[2].children[4].onclick = function(){switchEmployee('Middle Management');};
      document.getElementById('switchDepartmentsMenu').children[2].children[4].innerText = "Middle Management";
    }
    this.checkForIgnoredMemos();
    this.company.checkWeeklyMM();
    this.company.nextWeekEmp();
    this.company.checkWeeklyProd();


    while(employeesToHire.length != 0){
      employeesToHire.pop();
    }
    this.memoArray.push(createMemo());
    if(this.currentWeek > 6 ){
      this.memoArray.push(new DynamicMemo());
    }
    
    if(this.currentWeek % 5 == 0){
      let battle = new Battle(realGame.company,new EnemyCompany(this.currentWeek,enemyDifficulty[this.enemyRoundsFought]));
      let isWon = battle.startBattle();
      this.enemyRoundsFought++;
      this.memoArray.push(new BattleReport(isWon,realGame));
    }
    //switch to next Memo
    this.changeMemo(this.memoArray.pop());
    
  }
  checkForIgnoredMemos(){
    if(this.company.ignoreTracker > 10 && this.company.ignoredMemoTracker < 1){
      this.memoArray.push(specialMemos[0]);
      this.company.ignoredMemoTracker++;
    }
    //2nd part of ignore 
    else if(this.company.ignoreTracker > 20 && this.company.ignoredMemoTracker < 2){
      this.memoArray.push(specialMemos[2]);
      this.company.ignoredMemoTracker++;
    }
    //3rd and final ignore request
    else if(this.company.ignoreTracker > 30 && this.company.ignoredMemoTracker < 3){
      this.memoArray.push(specialMemos[3]);
      this.company.ignoredMemoTracker++;
    }
  }
  changeMemo(memo){
    //has been implemented
    let hasBeenImp = false;
    let temp = document.getElementById('fullMemo');
    //need to clear the html
    while(temp.children.length != 0){
      temp.removeChild(temp.lastChild);
    }
    document.getElementById('fullMemo').appendChild(document.createElement('div'));
      if(memo.preMemo()){
      this.implementMemo(memo);
        hasBeenImp =  true;
      }

      //sometimes a memo will not be able to be implemented, use this then
      if(!(hasBeenImp)){
        this.finishMemo();
      }
      //need to hide newHires 
  }
  //will make the inner html changes to the memo
  implementMemo(memo){
    document.getElementById('fullMemo').style.display = 'flex';
    document.getElementById('fullHire').style.display = 'none';
    memo.buildMemo();
    document.getElementById('fullMemo').children[0].innerHTML = memo.memoHTML;
    document.getElementById('fullMemo').children[0].children[0].children[1].children[0].onclick = function(){memo.option1()};
    document.getElementById('fullMemo').children[0].children[0].children[1].children[1].onclick = function(){memo.option2()};
    document.getElementById('fullMemo').children[0].children[0].children[1].children[2].onclick = function(){memo.option3()};
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
      document.getElementById("employee" + (x+1)).children[1].style.display = "flex";
      dep.showEmployee(document.getElementById("employee" + (x+1)).children[1].children[1].children[0],newEmps[x]);
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