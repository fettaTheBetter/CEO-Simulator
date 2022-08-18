//each memo will have an html body attached to it, some number of options, and something else?
class BattleReport extends Memo {
    constructor(isWon,rounds){
        let config;
        super(config,function() {this.undisplayMemo();},function() {this.undisplayMemo();},function() {this.undisplayMemo();});
        //will tell us if this memo has prep before the memo
        this.isWon = isWon;
        this.rounds = rounds;
        this.config = this.editConfig();
    }
    editConfig(){
        let config ={};
        config.toLine = "<p><b>To:</b> Our Glorious CEO</p>";
        config.fromLine = "<p><b>From:</b> Aid Station</p>";
        config.body = this.createBody();
        config.signature = "<p>Sincerely,</p> <p>&emsp;The Aid Station Team</p>";
        config.subject = "<p><b>Subject:</b> Battle Report</p>"
        config.option1Text =         "What Glorious Battle!";
        config.option2Text =          "Cry";
        config.option3Text =          "Too Many Lost";
        return config;

    }
    createBody() {
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
        string = string +"Injury Report: ";
            for(let i=0;i<empArray.length;i++){
                if(empArray[i].injuryTracker.previousStatus != empArray[i].injuryTracker.injuryStatus){
                    hasBeenReported = true;
                    string = string + empArray[i].name + " (" + empArray[i].idNum + "): " + empArray[i].injuryTracker.previousStatus + " --&gt; " + empArray[i].injuryTracker.injuryStatus + "<br>";
                }
            }
        //if no injuries have been reported
        if(!(hasBeenReported)){
            string= string + "No major injuries to report";
        }


        //this is where the round report will be
        //will be hard to make but I will try my best LOL

        string = string + "<div class = 'allRounds'>";
        for(let i=0;i<this.rounds.length;i++){
            string = string + "<div class= 'round'> Round " +(i+1);
            string = string+ "<div class = 'allFights'>";
            for(let j=0;j<this.rounds[i].fights.length;j++){
                string = string+ "<div class = 'fight'> fight" +(j+1);
                string = string+ "<div class = 'fightTeams'>";
                //for urTeam
                string = string +"<div class = 'allPlayers'>";
                for(let t=0;t<this.rounds[i].fights[j].myTeam.length;t++){
                    string = string + "<div><b> Our Team </b></div>";
                    string = string + "<div class = 'players'>";
                    string = string + "<div>" +this.rounds[i].fights[j].myTeam[t].name + "</div>";
                    string = string + "<div class = 'healthText'>Health Left: "+ (this.rounds[i].fights[j].myTeam[t].fightValue -this.rounds[i].fights[j].myTeam[t].injuryTracker.checkBattleInjuries(i)) + "</div>";
                    string = string + "</div>";
                }
                string = string + "</div>";
                //for enemyTeam
                string = string +"<div class = 'allPlayers'>";
                for(let t=0;t<this.rounds[i].fights[j].enemyTeam.length;t++){
                    string = string + "<div><b> Enemy Team </b></div>";
                    string = string + "<div class = 'players'>";
                    string = string + "<div>" +this.rounds[i].fights[j].enemyTeam[t].name + "</div>";
                    string = string + "<div class = 'healthText'>Health Left: "+ (this.rounds[i].fights[j].enemyTeam[t].fightValue -this.rounds[i].fights[j].enemyTeam[t].injuryTracker.checkBattleInjuries(i)) + "</div>";
                    string = string + "</div>";
                }
                string = string + "</div>";
                string = string + "</div></div>";

            }
            string = string + "</div></div>";
        }
        string = string + "</div>";
        //the roundHolder




        string = string + "</p>";
        return string;
    }
}