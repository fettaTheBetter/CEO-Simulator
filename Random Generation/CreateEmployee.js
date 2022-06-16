//this will create a random employee

//will need to grab from a random name
//will need to create a random productivity
//will need a random expense
//random specialization
//random personality
//random trainingtracker
//random fightvalue
function createEmployee(){
        let maxProductivity = 85;
        let minProductivity = 50;
        let maxExpense = 10;
        let minExpense = 6;

        let employee = new Employee();
        //should get us a random name in employees
        employee.name = empNames[Math.floor(Math.random()*(empNames.length-1))];
        employee.productivity = Math.floor(Math.random()*(maxProductivity-minProductivity+1) + minProductivity);
        employee.expense = Math.floor(Math.random()*(maxExpense-minExpense+1) + minExpense);
        //will generate more later
        return employee;
}