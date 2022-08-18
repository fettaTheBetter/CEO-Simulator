


class HumanResources extends Department {
    constructor(){
        super();
        this.name = "Human Resources";
        this.breakpoints = [0,0,25,45,55,65,70,85];
    }
    //will return how far into the breakpoints we are, for showing what is necessary in employees
    checkBreakpoints(){
        let breakpointsNum =-1;
        let i=0
        while(this.productivity>=this.breakpoints[i]){
            breakpointsNum = i;
            i++
        }
        return breakpointsNum;
    }
    showEmployee(canvas,employee){
        //need to clear the employee info
        removeEmployeeInfo();
        canvas.parentElement.parentElement.children[0].children[1].innerText = employee.name;// + " (" + employee.idNum + ")";
        let tempbreakpoints = this.checkBreakpoints();
        //will add one to tempBreakpoints, I forgot why I have to do this but I do it to show the weeks to Complete
        if(tempbreakpoints != -1){
            tempbreakpoints++;
            tempbreakpoints++;
            tempbreakpoints++;
        }
        for(let i=0;i<tempbreakpoints;i++){
            let tempHTML = document.createElement('div');
            tempHTML.classList = "flexRow";
            let finishedHTML = this.fillEmployeeInfo(tempHTML,i,employee);
            canvas.appendChild(finishedHTML);
                  
        }
        if(tempbreakpoints <= 8){
            //want to add something so they can see what's next
            let tempHTML = document.createElement('div');
            tempHTML.classList = "flexRow";
            let finishedHTML = this.fillEmployeeInfo(tempHTML,tempbreakpoints,employee);
            finishedHTML.children[1].innerText = "????";
            canvas.appendChild(finishedHTML);

             let errorHTML = document.createElement('p');
             errorHTML.innerHTML = "HR requires more resources";
             errorHTML.style = "color: DarkRed;"
             canvas.appendChild(errorHTML);
        }
    }
    fillEmployeeInfo(canvas,num,employee){
        //this is the name of the info we are showing e.g. productivity, expenses...
        let infoName;
        //this is the actualy stat e.g. 95%, 10...
        let infoStat;
        //these are both the html element of them
        infoName = document.createElement('div');
        infoStat = document.createElement('div');
        switch (num){
            case 0:
                infoName.innerHTML = "<b>Productivity: &nbsp;</b>";
                infoStat.innerText = employee.productivity.toFixed(0) +"%";
                break;
            case 1:
                infoName.innerHTML = "<b>Expense: &nbsp;</b>";
                infoStat.innerText = "$" +employee.expense.toFixed(2);;
                break;
            case 2:
                let tempWeeksComplete =0;
                if(employee.trainingTracker.weeksToComplete-employee.trainingTracker.weeksCompleted >0){
                    tempWeeksComplete = employee.trainingTracker.weeksToComplete-employee.trainingTracker.weeksCompleted;
                }
                infoName.innerHTML = "<b>Training: &nbsp;</b>";
                infoStat.innerText = tempWeeksComplete + " weeks left.";
                break;
            case 3:
                infoName.innerHTML = "<b>Injury Status: &nbsp;</b>";
                infoStat.innerText = employee.injuryTracker.injuryStatus;
                break;
            case 4:
                infoName.innerHTML = "<b>Specialization: &nbsp;</b>";
                infoStat.innerText = employee.specialization;
                break;
            case 5:
                infoName.innerHTML = "<b>FightValue: &nbsp;</b>";
                infoStat.innerText = employee.fightValue;
                break;
            case 6:
                infoName.innerHTML = "<b>Productivity Increase:  &nbsp;</b>";
                infoStat.innerText = employee.productivityIncrease;
                break;
            case 7:
                infoName.innerHTML = "<b>Productivity Increase:  &nbsp;</b>";
                infoStat.innerText = employee.productivityIncrease;
                infoName.innerHTML = "<b>Training Aptitude: &nbsp;</b>";
                infoStat.innerText = employee.trainingTracker.baseProductivityImpact;
                break;
            case 8: 
            infoName.innerHTML = "<b>Personality: &nbsp;</b>";
                infoStat.innerText = employee.personality;
                break;

        }
        canvas.appendChild(infoName);
        canvas.appendChild(infoStat);
        return canvas;
    }
}