//each memo will have an html body attached to it, some number of options, and something else?
class ScoutingReport extends Memo {
    constructor(enemyCompany,productivity){
        let config;
        super(config,function() {this.undisplayMemo();},function() {this.undisplayMemo();},function() {this.undisplayMemo();});
        //will tell us if this memo has prep before the memo
        this.enemyCompany = enemyCompany;
        this.productivity = productivity;
        //it will start as the base number
        this.numEffectedByProd = 30;
        this.config = this.editConfig();
        
    }
    editConfig(){
        let config ={};
        config.toLine = "<p><b>To:</b> Our Glorious CEO</p>";
        config.fromLine = "<p><b>From:</b> Custodians</p>";
        config.body = this.createBody();
        config.signature = "<p>Sincerely,</p> <p>&emsp;The Custodian Team</p>";
        config.subject = "<p><b>Subject:</b> Scouting Report</p>"
        config.option1Text =         "Looks Spooky";
        config.option2Text =          "Cry";
        config.option3Text =          "We Can Handle It";
        config.option1Tag = "It&#39;s A Toss Up";
        config.option2Tag ="Cry Tears Of Pain";
        config.option3Tag ="Rally The Troops";
        return config;

    }
    createBody(){
        //need to show the relative fight strength?
        let string = "";
        string = string + "<div>Here is the estimated strength of our opponent next week. Sorry that we don't know it exactly but if we are able to get our productivity higher, you can get a better estimate. ";
        let tempNum =0;
        let tempEmp = this.enemyCompany.getAllEmployees();
        for(let i=0;i<tempEmp.length;i++){
            tempNum = tempNum + tempEmp[i].fightValue
        }
        this.calculateScoutingRange();
        string = string + "<br> Estimated Fight Value: ";
        if(tempNum-this.numEffectedByProd <0){
            string = string +  0 + " - " + (tempNum + this.numEffectedByProd);
        }
        else{
            string = string +  (tempNum-this.numEffectedByProd) + " - " + (tempNum + this.numEffectedByProd);
        }
        string = string + "</div>";
        return string;
    }
    calculateScoutingRange(){
        //need to 
        this.numEffectedByProd = Math.floor(this.productivity*0.01*this.numEffectedByProd);
    }
}