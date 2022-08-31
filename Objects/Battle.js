//this will take in the yourCompany and enemyCompany as an argument
//I believe the enemy company will be it's own object because less is needed from them
class Battle {
    constructor(urCompany,enemyCompany){
        this.yourCompany = urCompany
        this.enemyCompany = enemyCompany;
        //will save a reference to the original company
        this.fightArray = [];
        //will contain the fightArrays
        this.roundArray = [];
        this.removedEmployees = [];
    }
    startBattle(){
        //need to reset battleTrackers for your team
        let empArray = this.yourCompany.getAllEmployees();
        for(let i=0;i<empArray.length;i++){
            empArray[i].injuryTracker.battleInjury = [];
        }
        let isWon = this.simulateBattle(empArray,this.enemyCompany.employees);
        return {isWon: isWon, rounds: this.roundArray}; 
    }
    //simulates the battle with the two companies we have
    simulateBattle(yourTempEmp,badTempEmp){
        //assign employees to fight each other
         let urTempEmp = yourTempEmp;
         let enemyTempEmp = badTempEmp;
         this.fightArray = [];
         let fightResult = "none";
         this.roundArray.push(new Round(this.roundArray.length+1));
         //if ur ur company has more employees
         if(urTempEmp.length >= enemyTempEmp.length){
            for(let t=0; t<urTempEmp.length;t++){
                //the extra ones are being inserted into the fights
                if(t >= enemyTempEmp.length){
                    this.fightArray[(t % enemyTempEmp.length)].myTeam.push(urTempEmp[t]);
                }
                else{
                //they have to be sent in as arrays because that's the argument fight needs
                this.fightArray.push(new Fight([urTempEmp[t]],[enemyTempEmp[t]],this.roundArray.length));
                }

            }
         }
         //if the enemies team is bigger
         else{
            for(let t=0; t<enemyTempEmp.length;t++){
                //the extra ones are being inserted into the fights
                if(t >= urTempEmp.length){
                    this.fightArray[t % urTempEmp.length].enemyTeam.push(enemyTempEmp[t]);
                }
                else{
                //they have to be sent in as arrays because that's the argument fight needs
                this.fightArray.push(new Fight([urTempEmp[t]],[enemyTempEmp[t]],this.roundArray.length));
                }

            }
         }
         //clear the arrays
         urTempEmp = [];
         enemyTempEmp = [];
         //need to simulate the fights
         for(let n=0;n<this.fightArray.length;n++){
            this.fightArray[n].fight();
            let temp = this.fightArray[n].returnTeams();
            
            //will assign players back to your team
            for(let j=0;j<temp.myTeam.length;j++){
                urTempEmp.push(temp.myTeam[j]);
            }
            //will assign players back to the enemies
            for(let j=0;j<temp.enemyTeam.length;j++){
                enemyTempEmp.push(temp.enemyTeam[j]);
            }
            this.roundArray[this.roundArray.length-1].fights.push(this.fightArray[n]);
         }
         //need to clean out employees who are out of the battle
         urTempEmp = this.checkInjuries(urTempEmp,true);
         enemyTempEmp = this.checkInjuries(enemyTempEmp,false);
         if(urTempEmp.length <=0 && enemyTempEmp.length <=0){
            fightResult = this.finishBattle("Draw");
         }
         else if(enemyTempEmp.length <=0){
            while(urTempEmp.length >0){
                this.removedEmployees.push(urTempEmp.pop());
            }
            fightResult = this.finishBattle("Win");
         }
         else if(urTempEmp.length <=0){
            fightResult = this.finishBattle("Loss");
         }
         //if there are still people who can fight, continue battle
         else{
            fightResult = this.simulateBattle(urTempEmp,enemyTempEmp);
         }
         return fightResult;
    }
    checkInjuries(employees,isOurTeam){
        for(let i=0;i<employees.length;i++){
            if(employees[i].injuryTracker.checkBattleInjuries() >= employees[i].fightValue){
                employees = this.removeFromArray(employees[i],employees);
                //need this because we are changing the length of employees
                if(isOurTeam){
                    this.removedEmployees.push(employees.pop());
                }
                else{
                    employees.pop()
                }
                i--;
            }
        }
        return employees;
    }
    //will take in true if victory, false if not
    finishBattle(isVictory){
        this.assignInjuryTrackers();
        return isVictory;
    }




    //utility method for assigning injury trackers back to the players
    //battle employees are the employees changed in battle
    //companyEmp are employees gotten from the company
    assignInjuryTrackers(){
        //Should I assume that all employees will be in the same order? I will do so for now
        //not using this assumption anymore, will have to search through everything
        this.yourCompany.assignInjuryTrackers(this.removedEmployees);
    }
    //will return an object that will divy out the reward?
    giveReward(){

    }
    //will return the employee that is popped
    removeFromArray(obj,array){
        for(let i=0;i<array.length;i++){
            if(obj == array[i]){
                let a = obj;
                array[i] = array[array.length-1];
                array[array.length-1] = a;
                return array;
            }
        }
    }
}