
//will be used by HR to keep track of how useful our new hires will be
class HiringTracker {
    constructor() {
      //these are the base values
      this.maxProductivity =50;
      this.minProductivity =30;
      this.maxExpense =13;
      this.minExpense =10;


      //these are base values we will change eventually
      this.productivityDifference = 20;
      this.highestExpense = 15;
      this.expenseDifference = 3;

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
    }
}