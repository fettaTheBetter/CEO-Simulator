


class HumanResources extends Department {
    constructor(){
        super();
        this.name = "Human Resources";
        this.breakpoints = [0,0,25,45,65,70,85];
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
        let idNum = "N/A";
        if(employee.idNum == undefined){
            canvas.parentElement.parentElement.children[0].children[1].innerText = employee.name + " (" + idNum + ")"; 
            canvas.parentElement.parentElement.children[0].children[2].innerText = "Current Department: " + idNum;
        }
        else{
            canvas.parentElement.parentElement.children[0].children[1].innerText = employee.name + " (" + employee.idNum + ")";
            canvas.parentElement.parentElement.children[0].children[2].innerText = "Current Department: " + employee.currentDepartment;
        }
        let tempbreakpoints = this.checkBreakpoints();
        //need to set the picture
        canvas.parentElement.parentElement.children[0].children[0].src = employee.imgArray[employee.injuryTracker.changeInjury(0)];
        //will add one to tempBreakpoints, I forgot why I have to do this but I do it to show the weeks to Complete
        if(tempbreakpoints != -1){
            tempbreakpoints++;
            tempbreakpoints++;
            tempbreakpoints++;
            
        }
        for(let i=0;i<tempbreakpoints;i++){
            let tempHTML = document.createElement('div');
            tempHTML.classList = "flexColumn";
            let finishedHTML = this.fillEmployeeInfo(tempHTML,i,employee);
            canvas.appendChild(finishedHTML);
                  
        }
        if(tempbreakpoints <= 8){
            //want to add something so they can see what's next
            let tempHTML = document.createElement('div');
            tempHTML.classList = "flexColumn";
            let finishedHTML = this.fillEmployeeInfo(tempHTML,tempbreakpoints,employee);
            finishedHTML.children[0].children[1].innerText = "????";
            canvas.appendChild(finishedHTML);

             let errorHTML = document.createElement('div');
             errorHTML.innerHTML = "HR requires better productivity";
             errorHTML.style = "color: DarkRed;"
             canvas.appendChild(errorHTML);
        }
    }
    fillEmployeeInfo(canvas,num,employee){
        //this is the name of the info we are showing e.g. productivity, expenses...
        let infoName;
        //this is the actualy stat e.g. 95%, 10...
        let infoStat;
        let help;
        //these are both the html element of them
        infoName = document.createElement('div');
        infoStat = document.createElement('div');
        let objectHolder = document.createElement('div');
        objectHolder.classList.add('flexRow');
        help = document.createElement('div');
        help.classList.add('baseHelp');
        switch (num){
            case 0:
                infoName.innerHTML = "<b>Productivity: &nbsp;</b>";
                infoStat.innerText = employee.productivity.toFixed(0) +"%";
                canvas.classList.add('productivityDisplay');
                help.classList.add('productivityHelp');
                help.innerText = "Shows how efficient your employee is";
                break;
            case 1:
                infoName.innerHTML = "<b>Expense: &nbsp;</b>";
                infoStat.innerText = "$" +employee.expense.toFixed(2);
                canvas.classList.add('expenseDisplay');
                help.classList.add('expenseHelp');
                help.innerText = "The money it takes to employe them weekly";
                break;
            case 2:
                let tempWeeksComplete =0;
                if(employee.trainingTracker.weeksToComplete-employee.trainingTracker.weeksCompleted >0){
                    tempWeeksComplete = employee.trainingTracker.weeksToComplete-employee.trainingTracker.weeksCompleted;
                }
                infoName.innerHTML = "<b>Training: &nbsp;</b>";
                infoStat.innerText = tempWeeksComplete + " weeks left.";
                canvas.classList.add('trainingDisplay');
                help.classList.add('trainingHelp');
                help.innerText = "The training time left. Productivity will improve as training goes on.";
                break;
            case 3:
                infoName.innerHTML = "<b>Injury Status: &nbsp;</b>";
                infoStat.innerText = employee.injuryTracker.injuryStatus;
                canvas.classList.add('injuryDisplay');
                help.classList.add('injuryHelp');
                help.innerText = " How injured they are. Injuries will reduce productivity";
                break;
            case 4:
                infoName.innerHTML = "<b>Specialization: &nbsp;</b>";
                infoStat.innerText = employee.specialization;
                canvas.classList.add('specializationDisplay');
                help.classList.add('specializationHelp');
                help.innerText = "The department the employee is specialized in. Can increase productivity";
                break;
            case 5:
                infoName.innerHTML = "<b>FightValue: &nbsp;</b>";
                infoStat.innerText = employee.fightValue.toFixed(2);
                canvas.classList.add('fightDisplay');
                help.classList.add('fightHelp');
                help.innerText = "How well your employee fights. The higher the better.";
                break;
            case 6:
                infoName.innerHTML = "<b>Productivity Increase:  &nbsp;</b>";
                infoStat.innerText = employee.productivityIncrease + "%";
                canvas.classList.add('productivityDisplay');
                help.classList.add('productivityHelp');
                help.innerText = "The weekly increase in productivity";
                break;
            case 7:
                infoName.innerHTML = "<b>Training Aptitude: &nbsp;</b>";
                infoStat.innerText = employee.trainingTracker.baseProductivityImpact;
                canvas.classList.add('trainingADisplay');
                help.classList.add('trainingAHelp');
                help.innerText = "How productive they are during training";
                break;
            case 8: 
            infoName.innerHTML = "<b>Personality: &nbsp;</b>";
                infoStat.innerText = employee.personality.personality;
                canvas.classList.add('personalityDisplay');
                help.classList.add('personalityHelp');
                help.innerText = "Their personality LOL";
                break;

        }
        objectHolder.appendChild(infoName);
        objectHolder.appendChild(infoStat);
        canvas.appendChild(objectHolder);
        canvas.appendChild(help);
        return canvas;
    }
}