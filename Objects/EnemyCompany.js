//eventually it will take in an argument, will probably have to do with its strength
//currently it only has employees/productivity/and hiring tracker
class EnemyCompany {
    constructor(numOfEmp,productivity){
        this.hiringTracker = new HiringTracker();
        this.employees = [];
        this.productivity =productivity;

        //lets hardcode everything right now
        //curently will only hire 4 employees
        this.hiringTracker.changeHiringTracker(this.productivity);
        for(let i=0;i<numOfEmp;i++){
            this.hireEmployee(createEmployee(this.hiringTracker));
        }
    }
    hireEmployee(emp){
        this.employees.push(emp);
    }
    getAllEmployees(){
        let empArray = [];
        for(let i=0;i<this.employees.length;i++){
            empArray.push(this.employees[i]);
        }

        return empArray;


    }
}