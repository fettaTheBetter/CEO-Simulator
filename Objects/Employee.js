
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

      this.raiseTracker = new RaiseTracker(0.05,8);

      this.injuryTracker = new InjuryTracker();

      this.fightValue =0;

      //name will eventually be randomly generated
      this.name;
      this.currentDepartment;
      this.idNum;
      this.weeksEmployed =0;
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

      //will be an array of productivity objects, these will get a reduce length at the end of each week
      this.productivityIncreases = [];
      
    }
    checkForRaise(){
        if(0== this.raiseTracker.weeksForRaise){
          this.giveRaise();
          return true;
        }
        else{
          return false;
        }
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
    giveRaise(){
          this.expense = this.expense + (this.expense*this.raiseTracker.raiseValue);
          this.raiseTracker.resetRaiseTracker();
    }
    increaseProductivity(value){
      this.productivityIncreases.push(new ProductivityTracker(value,8));
    };
    reduceTraining(){
      this.trainingTracker.weeksCompleted = this.trainingTracker.weeksCompleted +1;
      if(this.trainingTracker.weeksCompleted >= this.trainingTracker.weeksToComplete){
        this.trainingTracker.weeksCompleted = this.trainingTracker.weeksToComplete;
        this.trainingTracker.isCompleted = true;
      }
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
      for(let t=0;t<this.productivityIncreases.length;t++){
        this.productivity = this.productivityIncreases[t].productivity + this.productivity;
      }

      //now I will check if the employee is injured
      this.productivity = this.injuryTracker.changeProductivity(this.productivity);
      this.productivity = this.calculateProductivity(this.productivity);
    }
    //will compare productivity against a num and then return true(meaning productivity is greater than num) or false
    checkProductivity(num){
      this.setProductivity(this.specialization);
      if(num > this.calculateProductivity(this.productivity)){
        return false;
      }
      else{
        return true;
      }
    }
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
    //the argument sent in is the IT department productivity
    healByIT(productivity){
      //currently takes a percentage of the damage already and uses that
      this.injuryTracker.changeInjury(-Math.floor((this.injuryTracker.injuryValue*productivity)));
    }






    ////////////////////
    // Utility Method //
    ////////////////////
    //am using a piecewise function, currently has 3 equations in this order
    //(31.62/40)x, (1/8)*x^3/2, 10*sqrt(x)
    //USING NEW EQUATIONS, 4 equations
    //  -(1/20)*(x-30)^2 +45 for 0<x<20
    //  x^(1/2) + 35.5278 for 20<x<40
    //  (x-40)^(11/10) +41.8522 for 40<x<60
    //  x^(4/5) +42.382 for x<60
    calculateProductivity(productivity){
      let prod ;
      if(productivity > 60){
        prod = Math.pow(productivity,4/5) + 42.382;
      }
      else if(productivity <=60 && productivity >40){
        prod = Math.pow(productivity-40,11/10) + 41.8522;
      }
      else if(productivity <=40 && productivity >20){
        prod = Math.sqrt(productivity) + 35.5278;
      }
      else{
        
        prod =45-((1/20)*Math.pow(productivity-30,2));
      }

        return prod;
    }
}