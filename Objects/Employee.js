
class Employee {
    constructor() {
      this.baseProductivity;
      this.productivity = 0;
      this.baseExpense = 0;
      this.expense;
      //which department they gain specialization in
      this.specialization;
      this.specializationNum = 1.1;
      //cann also be decrease
      this.productivityIncrease = 0.5;
      //may interact negatively with other employees
      this.personality;

      this.trainingTracker = createTrainingTracker();

      this.raiseTracker = new RaiseTracker(0.05,6);

      this.injuryTracker = new InjuryTracker();
      //these fight values will allow us to let middle management affect the fight value
      this.baseFightValue =0;
      this.fightValue =0;

      //name will eventually be randomly generated
      this.name;
      this.currentDepartment;
      this.idNum;
      this.weeksEmployed =0;
      //
      this.hasSwitchDept = false;

      //will contain the images for injury
      this.imgArray = ['https://office-mayhem.s3.us-east-2.amazonaws.com/tempFaceTrans.png','https://office-mayhem.s3.us-east-2.amazonaws.com/tempFace1stInjuryTrans.png',
                      'https://office-mayhem.s3.us-east-2.amazonaws.com/tempFace2ndInjuryTrans.png','https://office-mayhem.s3.us-east-2.amazonaws.com/tempFace3rdInjuryTrans.png','https://office-mayhem.s3.us-east-2.amazonaws.com/tempFace3rdInjuryTrans.png','https://office-mayhem.s3.us-east-2.amazonaws.com/tempFace3rdInjuryTrans.png'];
      //this.htmlEmployee.children[0].src =
      //this is how to change the empPicture
      //
      //will create a base employee, will be used for testing
      this.personality = new Personality();

      //need to make an html object for the employee
      //will have a picture, a name and onclick functions
      
      this.htmlEmployee = this.createEmployeeHTML();

      //will be an array of productivity objects, these will get a reduce length at the end of each week
      this.productivityIncreases = [];
      
    }
    changeBaseFightValue(int){
      let previousBaseFightValue = this.baseFightValue;
      this.baseFightValue = this.baseFightValue +int;
      this.fightValue = this.baseFightValue + (this.baseFightValue*((this.fightValue-previousBaseFightValue)*0.01));
      this.injuryTracker.changeFightValue(this.fightValue);
    }
    changeExpense(int){
      this.expense = this.baseExpense + int;
      return this.expense;
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
        let tempManaging = document.createElement('div');
        tempImg.src = 'https://office-mayhem.s3.us-east-2.amazonaws.com/tempFaceTrans.png';
        tempEmp.appendChild(tempImg);
        tempEmp.appendChild(tempProd);
        tempEmp.appendChild(tempExpense);
        tempEmp.appendChild(tempTraining);
        tempEmp.appendChild(tempName);
        tempEmp.appendChild(tempManaging);
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
    changeInjury(int){
      let imgIndex = this.injuryTracker.changeInjury(int);
      this.htmlEmployee.children[0].src = this.imgArray[imgIndex];
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
      let recoverDamage = -Math.floor(((this.injuryTracker.injuryValue / this.fightValue)*productivity));
      let imgChangeNum = this.injuryTracker.changeInjury(recoverDamage);
      this.htmlEmployee.children[0].src = this.imgArray[imgChangeNum];
    }
    //will take in the MM productivity as an argument
    changeFightValue(productivity){
      this.fightValue = this.baseFightValue + (this.baseFightValue*productivity*0.01);
      this.injuryTracker.changeFightValue(this.fightValue);
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