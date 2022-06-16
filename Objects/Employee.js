
class Employee {
    constructor() {
      this.productivity;
      this.expense;
      //which department they gain specialization in
      this.specialization;
      //cann also be decrease
      this.productivityIncrease;
      //may interact negatively with other employees
      this.personality;

      this.trainingTracker = new TrainingTracker();

      this.fightValue;

      //name will eventually be randomly generated
      this.name;
      //
      //
      //will create a base employee, will be used for testing
      this.productivity = 100;
      this.expense = 10;
      this.specialization = 'Sales';
      this.productivityIncrease = 5;
      this.personality = 'Bland';
      this.fightValue = 3;
      this.name = "Doug";
    }
}