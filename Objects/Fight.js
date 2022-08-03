

class Fight {
    constructor(myTeam,enemyTeam){
        this.myTeam = myTeam;
        this.enemyTeam = enemyTeam;
    }
    fight(){
        //will tell us which team to use as the bigger one
        if(this.myTeam > this.enemyTeam){
            this.simulateFight(true);
        }
        else{this.simulateFight(false);}
        //currently will return the teams after changes
        //not to sure I need it to return anything
    }
    //will return an object that contains both teams
    returnTeams(){
        return {myTeam: this.myTeam, enemyTeam: this.enemyTeam};
    }
    //the bool decides whether to use team1 or not
    simulateFight(bool){
        let sumOfbigTeam = 0;
        let sumOfsmallTeam = 0;
        let team1;
        let team2;
        if(bool){
            team1 =this.myTeam;
            team2 = this.enemyTeam;
        }
        else{
            team1 =this.enemyTeam;
            team2 = this.myTeam;
        }
        sumOfsmallTeam = team2[0].fightValue;
        let tempValue = Math.floor(sumOfsmallTeam / team1.length);
        for(let i=0;i<team1.length;i++){
            sumOfbigTeam = sumOfbigTeam + team1[i].fightValue;
            team1[i].injuryTracker.tempInjury = team1[i].injuryTracker.tempInjury + tempValue;
        }
        team2[0].injuryTracker.tempInjury = team2[0].injuryTracker.tempInjury + sumOfbigTeam;
    }
}