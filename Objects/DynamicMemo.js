//each memo will have an html body attached to it, some number of options, and something else?
//Dynamic Options: Employee Suggestion
//Employee Raise
//Employee Injury

class DynamicMemo extends Memo {
    constructor(){
        let config ={};
        super(config);
        //will eventually have different excuses for injury
        this.injuryExcusesArray = ["They were trampled at a tennis riot.","Had an alien pop out of their chest.","Sang too loudly in a subway.","At more than one Lays&trade; potato chip.","Ignored the signs at the zoo."];
        //will tell us if this memo has prep before the memo
        this.config = this.prepreMemo();
    }
    prepreMemo(){
        let config ={};
        //will create the dynamicMemoEmp object
        realGame.dynamicMemoEmp = pickRandomEmployee();
        // it's 4 because thats the number of special dynamic employees
        let randNum = Math.floor(Math.random()*4);
        //randNum =0;
        //will create the department value that it will choose from
        realGame.dynamicMemoEmpDep = empSpecialization[Math.floor(Math.random()*(empSpecialization.length))];
        let emp = realGame.dynamicMemoEmp;
        if(randNum ==0){
            config = this.createEmpSuggestion(emp);
            this.optionArray[0] = this.empSuggestionFunc1;
            this.optionArray[1] = this.empSuggestionFunc2;
            this.optionArray[2] = this.empSuggestionFunc3;
        }
        else if(randNum ==1){
            config = this.createEmpRaise(emp);
            this.optionArray[0] = this.empRaiseFunc1;
            this.optionArray[1] = this.empRaiseFunc2;
            this.optionArray[2] = this.empRaiseFunc3;
        }
        else if(randNum ==2){
            config = this.createEmpInjury(emp);
            this.optionArray[0] = this.empInjuryFunc1;
            this.optionArray[1] = this.empInjuryFunc2;
            this.optionArray[2] = this.empInjuryFunc3;
        }
        else if(randNum == 3){
            config = this.createEmpFighting(emp);
            this.optionArray[0] = this.empFightingFunc1;
            this.optionArray[1] = this.empFightingFunc2;
            this.optionArray[2] = this.empFightingFunc3;
        }
        //now I need to create the body from this employee
        return config;
    }
    createEmpSuggestion(emp){
        let config ={};
        //now I need to create the body from this employee
        config.toLine = "<p><b>To:</b> The CEO</p>";
        config.fromLine = "<p><b>From:</b> " + emp.name +  " from " +emp.currentDepartment + " Department</p>";
        config.subject = "<p><b>Subject:</b> Staff Suggestions</p>";
        //currently will pick a random department to throw it in
        config.body = "&emsp;Hey I have a few new ideas for what we could do to improve the " +realGame.dynamicMemoEmpDep +" department. Let me know if you'd like me to Implement them.";
        config.signature = "<p>Regards,</p> <p>&emsp;" + emp.name +  " from " +emp.currentDepartment +"</p>";
        config.option1Text = "Let's Try Them";
        config.option2Text = "Sorry, Not Enough Experience";
        config.option3Text = "Ignore It";
        //need to change optionTags
        config.option1Tag = "Let&#39;s See What Happens";
        config.option2Tag = "Eventually They Will Get Experience";
        config.option3Tag = "They Know Nothing";
        return config;
    }
    createEmpRaise(emp){
        let config ={};
        //now I need to create the body from this employee
        config.toLine = "<p><b>To:</b> The CEO</p>";
        config.fromLine = "<p><b>From:</b> " + emp.name +  " from " +emp.currentDepartment + "</p>";
        config.subject = "<p><b>Subject:</b> Raise Wanted</p>";
        //currently will pick a random department to throw it in
        config.body = "&emsp;Hey, I feel as though my performance has been exemplary these past few weeks. I'm searching for a " + (emp.raiseTracker.raiseValue*100) + "% raise.";
        config.signature = "<p>Regards,</p> <p>&emsp;" + emp.name +  " from " +emp.currentDepartment +"</p>";
        config.option1Text = "You deserve a bigger one";
        config.option2Text = "I can give you your raise";
        config.option3Text = "Sorry, Not Enough Experience";
        config.option1Tag = "Give A " + 2*(emp.raiseTracker.raiseValue*100) + "% raise";
        config.option2Tag = "Give The " + (emp.raiseTracker.raiseValue*100)+"% raise";
        config.option3Tag = "They don&#39;t deserve it yet";
        return config;
    }
    createEmpInjury(emp){
        let config ={};
        let randNum = Math.floor(Math.random()*this.injuryExcusesArray.length);
        //now I need to create the body from this employee
        config.toLine = "<p><b>To:</b> The CEO</p>";
        config.fromLine = "<p><b>From:</b> Aid Station </p>";
        config.subject = "<p><b>Subject:</b> Staff Injury</p>";
        //currently will pick a random department to throw it in
        config.body = "&emsp; Sorry, but " +emp.name +  " from " +emp.currentDepartment +" has been injured. " + this.injuryExcusesArray[randNum] +" You're welcome to check to see how bad the injury is.";
        config.signature = "<p>Regards,</p> <p>&emsp; Aid Station </p>";
        config.option1Text = "Ok, I'll check on them";
        config.option2Text = "Sorry, I'm squeemish";
        config.option3Text = "Who Cares??";
        config.option1Tag = "Show Humanity";
        config.option2Tag = "Understandable";
        config.option3Tag = "Not Your Problem";
        return config;
    }
    createEmpFighting(emp){
        let config ={};
        //now I need to create the body from this employee
        config.toLine = "<p><b>To:</b> The CEO</p>";
        config.fromLine = "<p><b>From:</b> " + emp.name +  " from " +emp.currentDepartment + " Department</p>";
        config.subject = "<p><b>Subject:</b> Staff Suggestions</p>";
        //currently will pick a random department to throw it in
        config.body = "&emsp;Hey I've been training at the local gym and I think I've picked up a few tips on fighting. I'm offering you guys a training course for your employees. I think I can improve you guys.";
        config.signature = "<p>Regards,</p> <p>&emsp;" + emp.name +  " from " +emp.currentDepartment +"</p>";
        config.option1Text = "Train Away";
        config.option2Text = "No Thanks";
        config.option3Text = "Ignore It";
        //need to change optionTags
        config.option1Tag = "Lose 200$, Chance To Increase Fight Value";
        config.option2Tag = "I'm Not Sure I Trust That...";
        config.option3Tag = "They Know Nothing";
        return config;
    }
    empSuggestionFunc1(){
        let num = 45;
        if(realGame.dynamicMemoEmp.checkProductivity(num)){
            realGame.company.getDepartment(realGame.dynamicMemoEmpDep).increaseProductivity(4);
        }
        else{
            realGame.company.getDepartment(realGame.dynamicMemoEmpDep).increaseProductivity(-4);
        }
        //will check if the employee likes to be praised
        realGame.dynamicMemoEmp.increaseProductivity(realGame.dynamicMemoEmp.personality.beingPraised());
        this.finishDynamic();
        this.undisplayMemo();

    }
    empSuggestionFunc2(){
        this.finishDynamic();
        this.undisplayMemo();
    }
    empSuggestionFunc3(){
        realGame.dynamicMemoEmp.increaseProductivity(-2);
        this.finishDynamic();
        this.undisplayMemo();
    }
    empRaiseFunc1(){
        realGame.dynamicMemoEmp.increaseProductivity(10);
        realGame.dynamicMemoEmp.productivityIncrease++;
        realGame.dynamicMemoEmp.giveRaise();
        realGame.dynamicMemoEmp.giveRaise();
        this.finishDynamic();
        this.undisplayMemo();
    }
    empRaiseFunc2(){
        realGame.dynamicMemoEmp.increaseProductivity(4);
        realGame.dynamicMemoEmp.giveRaise();
        this.finishDynamic();
        this.undisplayMemo();
    }
    empRaiseFunc3(){
        realGame.dynamicMemoEmp.increaseProductivity(-2);
        this.finishDynamic();
        this.undisplayMemo();
    }
    empInjuryFunc1(){
        realGame.dynamicMemoEmp.increaseProductivity(2);
        realGame.dynamicMemoEmp.injuryTracker.changeInjury(realGame.dynamicMemoEmp.fightValue);
        this.finishDynamic();
        this.undisplayMemo();
    }
    empInjuryFunc2(){
        realGame.dynamicMemoEmp.injuryTracker.changeInjury(realGame.dynamicMemoEmp.fightValue);
        this.finishDynamic();
        this.undisplayMemo();
    }
    empInjuryFunc3(){
        realGame.dynamicMemoEmp.injuryTracker.changeInjury(realGame.dynamicMemoEmp.fightValue);
        realGame.dynamicMemoEmp.increaseProductivity(-2);
        this.finishDynamic();
        this.undisplayMemo();
    }
    empFightingFunc1(){
        realGame.company.gainMoney(-200);
        if(realGame.dynamicMemoEmp.productivity >=50){
            realGame.company.increaseFightValue(0.5);
        }
        this.finishDynamic();
        this.undisplayMemo();
    }
    empFightingFunc2(){
        this.finishDynamic();
        this.undisplayMemo();
    }
    empFightingFunc3(){
        //making it negative because they are not being praised
        realGame.dynamicMemoEmp.increaseProductivity(-(realGame.dynamicMemoEmp.personality.beingPraised()));
        this.finishDynamic();
        this.undisplayMemo();
    }

    finishDynamic(){
        realGame.dynamicMemoEmp = undefined;
        realGame.dynamicMemoEmpDep = undefined;
    }
}