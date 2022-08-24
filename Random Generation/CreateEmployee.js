//this will create a random employee

//will need to grab from a random name
//will need to create a random productivity
//will need a random expense
//random specialization
//random personality
//random trainingtracker
//random fightvalue
function createEmployee(hiringTracker){
        let maxProductivity = hiringTracker.maxProductivity;
        let minProductivity = hiringTracker.minProductivity;
        let maxExpense = hiringTracker.maxExpense;
        let minExpense = hiringTracker.minExpense;
        let maxFightValue =hiringTracker.maxFightValue;
        let minFightValue = hiringTracker.minFightValue;

        let employee = new Employee();
        let empPersonality = empPersonalities[Math.floor(Math.random()*(empPersonalities.length))];
        employee.personality = createEmpPersonality(empPersonality);
        //should get us a random name/productivity/expense in employees
        employee.name = empNames[Math.floor(Math.random()*(empNames.length))];
        employee.baseProductivity = Math.floor(Math.random()*(maxProductivity-minProductivity+1) + minProductivity);
        employee.expense = Math.floor(Math.random()*(maxExpense-minExpense+1) + minExpense);
        employee.specialization = empSpecialization[Math.floor(Math.random()*(empSpecialization.length))];
        employee.productivity = employee.baseProductivity;
        employee.changeBaseFightValue( Math.floor(Math.random()*(maxFightValue-minFightValue+1) + minFightValue));
        employee.fightValue = employee.baseFightValue;
        employee.injuryTracker.changeFightValue(employee.fightValue);
        //will generate more later
        return employee;
}

function createEmpPersonality(personality){
        switch (personality) {
                case "Bland":
                        return new Bland();
                        break;
                case "Energetic":
                        return new Energetic();
                        break;
                case "Ambitious":
                        return new Ambitious();
                        break;
                case "Meticulous":
                        return new Meticulous();
                        break;
                case "Energetic":
                        return new Energetic();
                        break;
                case "Social":
                        return new Social();
                        break;
                case "Relaxed":
                        return new Relaxed();
                        break;
                default:
                        return new Personality();                       
        }
}