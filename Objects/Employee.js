
class Employee {
    constructor() {
      this.baseProductivity;
      this.productivity = 0;
      this.expense;
      //which department they gain specialization in
      this.specialization;
      this.specializationNum = 1.05;
      //cann also be decrease
      this.productivityIncrease = 1;
      //may interact negatively with other employees
      this.personality;

      this.trainingTracker = createTrainingTracker();

      this.fightValue;

      //name will eventually be randomly generated
      this.name;
      this.currentDepartment;
      this.idNum;
      //
      this.hasSwitchDept = false;
      //
      //
      //will create a base employee, will be used for testing
      this.personality = 'Bland';
      this.fightValue = 3;

      //need to make an html object for the employee
      //will have a picture, a name and onclick functions
      
      this.htmlEmployee = this.createEmployeeHTML();
      
    }
    createEmployeeHTML(){
        let tempEmp = document.createElement('div');
        let tempImg = document.createElement('img');
        let tempName = document.createElement('div');
        let tempProd = document.createElement('div');
        let tempExpense = document.createElement('div');
        let tempTraining = document.createElement('div');
        tempImg.src = 'https://office-mayhem.s3.us-east-2.amazonaws.com/tempFaceTrans.png';
        tempEmp.appendChild(tempImg);
        tempEmp.appendChild(tempProd);
        tempEmp.appendChild(tempExpense);
        tempEmp.appendChild(tempTraining);
        tempEmp.appendChild(tempName);
        tempEmp.classList.add('empPicture');
        return tempEmp;
    }
    //specialization will be a boolean that tells us whether the employee is in the depaartment they specialize in
    setProductivity(specialization){
      if(specialization){
        this.productivity = this.baseProductivity*this.specializationNum;
      }
      else{
        this.productivity = this.baseProductivity;
      }
      //need to update it with the training tracker checker
      //if they have not completed training
      if(!(this.trainingTracker.isCompleted)){
        this.productivity = this.productivity - (this.trainingTracker.productivityImpact*this.productivity);
      }
    }
    reduceTraining(){
      this.trainingTracker.weeksCompleted = this.trainingTracker.weeksCompleted +1;
      if(this.trainingTracker.weeksCompleted >= this.trainingTracker.weeksToComplete){
        this.trainingTracker.weeksCompleted = this.trainingTracker.weeksToComplete;
        this.trainingTracker.isCompleted = true;
      }
    }
}