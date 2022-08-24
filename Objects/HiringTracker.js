
//will be used by HR to keep track of how useful our new hires will be
class HiringTracker {
    constructor() {
      //these are the base values
      this.maxProductivity =60;
      this.minProductivity =40;
      this.maxExpense = 13;
      this.minExpense = 3;
      this.minFightValue = 1;
      this.fightValueDifference = 3;
      this.maxFightValue =5;
      this.baseMaxFightValue = 15

      //these are base values we will change eventually
      this.productivityDifference = 20;
      this.highestExpense = 13;
      this.expenseDifference = 4;

    }
    //will send in productivity of HR as an argument
    changeHiringTracker(productivity){
      this.maxProductivity = productivity;
      if(productivity -this.productivityDifference <=0){
        this.minProductivity = 1;
      }
      else{
        this.minProductivity = productivity -this.productivityDifference;
      }
      this.maxExpense =  this.highestExpense - Math.floor(productivity*0.01*10);
      if( this.highestExpense - Math.floor(productivity*0.01*10)-this.expenseDifference <=0){
        this.minExpense = 0;
      }
      else{
        this.minExpense =  this.highestExpense - Math.floor(productivity*0.01*10)-this.expenseDifference;
      }
      this.maxFightValue = Math.floor(productivity*0.01*this.baseMaxFightValue);
      if(this.maxFightValue <= this.fightValueDifference  ){
        this.minFightValue = 1;
      }
      else{
        this.minFightValue = this.maxFightValue - this.fightValueDifference;
      }
    }
}