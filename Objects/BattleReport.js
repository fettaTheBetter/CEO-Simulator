
//each memo will have an html body attached to it, some number of options, and something else?
class BattleReport extends Memo {
    constructor(isWon,rounds){
        let config;
        super(config);
        //will tell us if this memo has prep before the memo
        this.isWon = isWon;
        this.rounds = rounds;
        this.numInjured = 0;
        this.config = this.editConfig();
        this.optionArray[0] = this.option1Func;
        this.optionArray[1] = this.option2Func;
        this.optionArray[2] = this.option3Func;
    }
    editConfig(){
        let config ={};
        config.toLine = "<p><b>To:</b> Our Glorious CEO</p>";
        config.fromLine = "<p><b>From:</b> Aid Station</p>";
        config.body = this.createBody();
        config.signature = "<p>Sincerely,</p> <p>&emsp;The Aid Station Team</p>";
        config.subject = "<p><b>Subject:</b> Battle Report</p>"
        config.option1Text =         "Celebrate";
        config.option2Text =          "Cry";
        config.option3Text =          "Let's Try And Treat The Wounded";
        config.option1Tag ="Lose $50, Throw Celebration ";
        config.option2Tag ="I Am Devastated";
        config.option3Tag ="Employees Heal A Little, 25$ For Each Wounded Employee";
        config.buttonClass = " combatButtons";
        return config;

    }
    createBody() {
        let empArray = realGame.company.getAllEmployees();
        let hasBeenReported = false;
        //currently battleReport is hardcoded as win
        let battleReport;
        battleReport = this.isWon;
        let string = "<p>";
        string = string +"Here is the battle report sir: <br>";
        string = string +"Battle Result: " + battleReport + "<br><br>";
        string = string +"Injury Report: <br>";
            for(let i=0;i<empArray.length;i++){
                if(empArray[i].injuryTracker.previousStatus != empArray[i].injuryTracker.injuryStatus){
                    hasBeenReported = true;
                    this.numInjured++;
                    string = string + empArray[i].name + " (" + empArray[i].idNum + "): " + empArray[i].injuryTracker.previousStatus + " --&gt; " + empArray[i].injuryTracker.injuryStatus + "<br>";
                }
            }
        //if no injuries have been reported
        if(!(hasBeenReported)){
            string= string + "No major injuries to report";
        }


        //this is where the round report will be
        //will be hard to make but I will try my best LOL
        string = string + "<button onclick = 'hideBattleDetails()'>Toggle Details</button>"
        string = string + "<div id='allRounds' class = 'allRounds' style = 'display: none'>";
        for(let i=0;i<this.rounds.length;i++){
            string = string + "<div class= 'round'> Round " +(i+1);
            string = string+ "<div class = 'allFights'>";
            for(let j=0;j<this.rounds[i].fights.length;j++){
                string = string+ "<div class = 'fight'> Fight " +(j+1);
                string = string+ "<div class = 'fightTeams'>";
                //for urTeam
                string = string +"<div class = 'allPlayers'>";
                string = string + "<div><b> Our Team </b></div>";
                for(let t=0;t<this.rounds[i].fights[j].myTeam.length;t++){
                    string = string + "<div class = 'players'>";
                    string = string + "<div>" +this.rounds[i].fights[j].myTeam[t].name + "</div>";
                    string = string + "<div class = 'healthText'>Health Left: "+ (this.rounds[i].fights[j].myTeam[t].fightValue -this.rounds[i].fights[j].myTeam[t].injuryTracker.checkBattleInjuries(i)).toFixed(2) + "</div>";
                    string = string + "</div>";
                }
                string = string + "</div>";
                //for enemyTeam
                string = string +"<div class = 'allPlayers'>";
                string = string + "<div><b> Enemy Team </b></div>";
                for(let t=0;t<this.rounds[i].fights[j].enemyTeam.length;t++){
                    string = string + "<div class = 'players'>";
                    string = string + "<div>" +this.rounds[i].fights[j].enemyTeam[t].name + "</div>";
                    string = string + "<div class = 'healthText'>Health Left: "+ (this.rounds[i].fights[j].enemyTeam[t].fightValue -this.rounds[i].fights[j].enemyTeam[t].injuryTracker.checkBattleInjuries(i)).toFixed(2) + "</div>";
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
    option1Func(){
        if(this.isWon == "Win"){
            realGame.company.increaseAllProductivity(2);
        }
        else{
            realGame.company.increaseAllProductivity(-2);
        }
        this.undisplayMemo();
    }
    option2Func(){
        this.undisplayMemo();
    }
    option3Func(){
        realGame.company.gainMoney(-(25*this.numInjured));
        let allEmps = realGame.company.getAllEmployees();
        for(let i=0;i<allEmps.length;i++){
            if(allEmps[i].injuryTracker.injuryStatus != "Fine"){
                let tempNum = allEmps[i].injuryTracker.changeInjury(-allEmps[i].fightValue);
                allEmps[i].htmlEmployee.children[0].src = allEmps[i].imgArray[tempNum];
            }
        }
        this.undisplayMemo();
    }
}