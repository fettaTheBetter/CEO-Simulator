


class IT extends Department {
    constructor(){
        super();
        this.name = "IT";
        this.increaseByEmp = 1;
        //will be the base healing value
        this.healingValue;
    }
    completeTrainingReduction(company){
        //will go through all the departments in the company
        //then will hit each employees training tracker and reduce weeksToComplete
        for(let i=0;i<company.departmentsArray.length;i++){
            for(let j=0;j<company.departmentsArray[i].employees.length;j++){
                //now change trainingTracker
                company.departmentsArray[i].employees[j].trainingTracker.reduceWeeksToComplete(this.increaseByEmp*this.employees.length);
            }
        }
    }
}