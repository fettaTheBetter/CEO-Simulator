//this will be attached to employees, and will affect how badly they are injured across weeks and could possible result in death
//
class InjuryTracker {
    constructor(){
        this.injuryBreakpoints = ["Fine","Probable","Questionable","Injured","Almost Dead"];
        this.injuryBreakpointsValues = [10,40,50,85]
        this.injuryValue = 0;
        this.injuryStatus = this.injuryBreakpoints[0];
        //this will check the injury in  battle to see if they can keep fighting
        this.battleInjury = [];
        this.previousStatus = this.injuryBreakpoints[0];
        this.currentFightValue = 0;
    }
    //will change the fight value of the employee
    changeFightValue(int){
        this.currentFightValue = int;
        //now I need to change breakpoints
        for(let i=0;i<this.injuryBreakpointsValues.length;i++){
            this.injuryBreakpointsValues[i] = this.currentFightValue*i;
        }
        //we do this changeInjury function to see if the breakpoints have moved
        //then it will set the proper injury status
        this.changeInjury(0);
    }
    //will return an int
    //this will be how we check how injured they are in battle
    checkBattleInjuries(num){
        let sum = 0;
        let max =0;
        //allows us to have an optional num if we want to grab it in middle of battle
        if(num == undefined){
            max = this.battleInjury.length;
        }
        else{
            max = num+1;
        }
        for(let i=0;i<max;i++){
            sum = sum + this.battleInjury[i];
        }
        return sum;
    }
    changeInjury(int){
        let injuryIndex = 0;
        this.injuryValue = this.injuryValue + int;
        this.previousStatus = this.injuryStatus;
        if(this.injuryValue < this.injuryBreakpointsValues[0]){
            this.injuryStatus = this.injuryBreakpoints[0];
            injuryIndex = 0;
        }
        else if(this.injuryValue <this.injuryBreakpointsValues[1] && this.injuryValue >this.injuryBreakpointsValues[0]){
            this.injuryStatus = this.injuryBreakpoints[1];
            injuryIndex = 1;
        }
        else if(this.injuryValue < this.injuryBreakpointsValues[2] && this.injuryValue >this.injuryBreakpointsValues[1]){
            this.injuryStatus = this.injuryBreakpoints[2];
            injuryIndex = 2;
        }
        else if(this.injuryValue <this.injuryBreakpointsValues[3] && this.injuryValue > this.injuryBreakpointsValues[2]){
            this.injuryStatus = this.injuryBreakpoints[3];
            injuryIndex = 3;
        }
        return injuryIndex;
    }
    checkForDeath(){
        if(this.injuryValue >= 100){
            return true;
        }
        else{
            return false;
        }
    }
    //this is how you heal the player, productivity is taken from IT department
    changeProductivity(productivity){
        let productivityBreakpoint = 0;
        if(this.injuryValue < this.injuryBreakpointsValues[0]){
            productivityBreakpoint = 0;
        }
        else if(this.injuryValue <this.injuryBreakpointsValues[1] && this.injuryValue >this.injuryBreakpointsValues[0]){
            productivityBreakpoint = 1;
        }
        else if(this.injuryValue < this.injuryBreakpointsValues[2] && this.injuryValue >this.injuryBreakpointsValues[1]){
            productivityBreakpoint = 2;
        }
        else if(this.injuryValue <this.injuryBreakpointsValues[3] && this.injuryValue > this.injuryBreakpointsValues[2]){
            productivityBreakpoint = 3;
        }
        return productivity * (1-(productivityBreakpoint*0.10));
    }
}
