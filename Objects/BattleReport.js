//each memo will have an html body attached to it, some number of options, and something else?
class BattleReport extends Memo {
    constructor(isWon,game){
        let config;
        super(config,function() {this.undisplayMemo();},function() {this.undisplayMemo();},function() {this.undisplayMemo();});
        //will tell us if this memo has prep before the memo
        this.config = this.editConfig(game);
        this.isWon = isWon;
    }
    editConfig(game){
        let config ={};
        config.toLine = "<p><b>To:</b> Our Glorious CEO</p>";
        config.fromLine = "<p><b>From:</b> Nursing Station</p>";
        config.body = this.createBody(game);
        config.signature = "<p>Sincerely,</p> <p>&emsp;The Hospital Team</p>";
        config.subject = "<p><b>Subject:</b> Battle Report</p>"
        config.option1Text =         "What Glorious Battle!";
        config.option2Text =          "Cry";
        config.option3Text =          "Too Many Lost";
        return config;

    }
    createBody(game) {
        let empArray = realGame.company.getAllEmployees();
        let hasBeenReported = false;
        //currently battleReport is hardcoded as win
        let battleReport;
        if(this.isWon){
            battleReport = "WIN";
        }
        else{
            battleReport = "LOSS";
        }
        let string = "<p>";
        string = string +"Here is the battle report sir: <br>";
        string = string +"Battle Result: " + battleReport + "<br><br>";
        if(game.company.getDepartment('Human Resources').employees.length > 8){
            for(let i=0;i<empArray.length;i++){
                if(empArray[i].injuryTracker.previousStatus != empArray[i].injuryTracker.injuryStatus){
                    hasBeenReported = true;
                    string = string + empArray[i].name + " (" + empArray[i].idNum + "): " + empArray[i].injuryTracker.previousStatus + " --&gt; " + empArray[i].injuryTracker.injuryStatus + "<br>";
                }
            }
        }
        //if no injuries have been reported
        if(!(hasBeenReported)){
            string= string + "No injuries to report";
        }




        string = string + "</p>";
        console.log(string);
        return string;
    }
}