


class HumanResources extends Department {
    constructor(){
        super();
        this.name = "Human Resources";
        this.breakpoints = [1,1,2,4,7,9,10,15];
    }
    //will return how far into the breakpoints we are, for showing what is necessary in employees
    checkBreakpoints(){
        let breakpointsNum =-1;
        let i=0
        while(this.employees.length>=this.breakpoints[i]){
            breakpointsNum = i;
            i++
        }
        return breakpointsNum;
    }
    showEmployee(canvas,employee){
        canvas.parentElement.children[0].children[1].innerText = employee.name;// + " (" + employee.idNum + ")";
        let tempbreakpoints = this.checkBreakpoints();
        //will add one to tempBreakpoints, I forgot why I have to do this but I do it to show the weeks to Complete
        if(tempbreakpoints != -1){
            tempbreakpoints++;
        }
        for(let i=0;i<canvas.children.length-1;i++){
            if(i<=tempbreakpoints){
                canvas.children[1+i].style.display = "flex";
                this.fillEmployeeInfo(canvas,i,employee);
            }
            else{
                canvas.children[1+i].style.display = "none";
            }
        }
    }
    fillEmployeeInfo(canvas,num,employee){
        switch (num){
            case 0:
                canvas.children[1+num].children[1].innerText = employee.productivity.toFixed(0) +"%";
                break;
            case 1:
                canvas.children[1+num].children[1].innerText = employee.expense;
                break;
            case 2:
                canvas.children[1+num].children[1].innerText = employee.trainingTracker.weeksToComplete-employee.trainingTracker.weeksCompleted;
                break;
            case 3:
                canvas.children[1+num].children[1].innerText = employee.specialization;
                break;
            case 4:
                canvas.children[1+num].children[1].innerText = employee.fightValue;
                break;
            case 5:
                canvas.children[1+num].children[1].innerText = employee.trainingTracker.productivityImpact;
                break;
            case 6:
                canvas.children[1+num].children[1].innerText = employee.productivityIncrease;
                break;
            case 7: 
                canvas.children[1+num].children[1].innerText = employee.personality;
                break;

        }
    }
}