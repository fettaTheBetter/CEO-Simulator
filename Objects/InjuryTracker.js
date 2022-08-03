//this will be attached to employees, and will affect how badly they are injured across weeks and could possible result in death
//
class InjuryTracker {
    constructor(){
        this.injuryBreakpoints = ["Fine","Probable","Questionable","Injured","Almost Dead"];
        this.injuryBreakpointsValues = [10,40,50,85]
        this.injuryValue = 0;
        this.injuryStatus = this.injuryBreakpoints[0];
        //this will check the injury in  battle to see if they can keep fighting
        this.tempInjury = 0;
        this.previousStatus = this.injuryBreakpoints[0];;
    }
    changeInjury(int){
        this.injuryValue = this.injuryValue + int;
        this.previousStatus = this.injuryStatus;
        if(this.injuryValue < this.injuryBreakpointsValues[0]){
            this.injuryStatus = this.injuryBreakpoints[0];
        }
        else if(this.injuryValue <this.injuryBreakpointsValues[1] && this.injuryValue >this.injuryBreakpointsValues[0]){
            this.injuryStatus = this.injuryBreakpoints[1];
        }
        else if(this.injuryValue < this.injuryBreakpointsValues[2] && this.injuryValue >this.injuryBreakpointsValues[1]){
            this.injuryStatus = this.injuryBreakpoints[2];
        }
        else if(this.injuryValue <this.injuryBreakpointsValues[3] && this.injuryValue > this.injuryBreakpointsValues[2]){
            this.injuryStatus = this.injuryBreakpoints[3];
        }
    }
    checkForDeath(){
        if(this.injuryValue >= 100){
            return true;
        }
        else{
            return false;
        }
    }
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
            productivityBreakpoints = 3;
        }
        return productivity * (1-(productivityBreakpoint*0.10));
    }
}
