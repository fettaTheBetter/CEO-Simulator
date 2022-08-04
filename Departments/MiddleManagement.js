


class MiddleManagement extends Department {
    constructor(){
        super();
        this.name = "Middle Management";
        this.canvas = document.getElementById('Middle ManagementCanvas');
    }
    //will be using specialization
    numOfMMForDep(depName){
        //will iterate through the department and count all the specializations
        let num =0;
        for(let i=0;i<this.employees.length;i++){
            if(this.employees[i].specialization == depName){
                num++;
            }
        }
        return num;
    }
    //this will overload the function, it will be special for middlemanagement
}