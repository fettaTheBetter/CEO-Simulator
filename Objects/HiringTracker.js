
//will be used by HR to keep track of how useful our new hires will be
class HiringTracker {
    constructor() {
      //these are the base values
      this.maxProductivity =50;
      this.minProductivity =30;
      this.maxExpense =900;
      this.minExpense =300;
      this.minFightValue = 1;
      this.fightValueDifference = 3;
      this.maxFightValue =3;


      //these are base values we will change eventually
      this.productivityDifference = 20;
      this.highestExpense = 900;
      this.expenseDifference = 200;

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
      this.maxFightValue = Math.floor(productivity*0.01*15);
      if(this.maxFightValue <= this.fightValueDifference  ){
        this.minFightValue = 1;
      }
      else{
        this.minFightValue = this.maxFightValue - this.fightValueDifference;
      }
    }
}