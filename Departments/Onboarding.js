


class Onboarding extends Department {
    constructor(){
        super();
        this.name = "Onboarding";
        this.baseReduction = 8;
        //will be the base healing value
    }
    completeTrainingReduction(company){
        //will go through all the departments in the company
        //then will hit each employees training tracker and reduce weeksToComplete
        for(let i=0;i<company.departmentsArray.length;i++){
            for(let j=0;j<company.departmentsArray[i].employees.length;j++){
                //now change trainingTracker
                company.departmentsArray[i].employees[j].trainingTracker.reduceWeeksToComplete(Math.floor(this.productivity*0.01*this.baseReduction));
            }
        }
    }
}