
//each memo will have an html body attached to it, some number of options, and something else?
class Memo {
    constructor(config,option1,option2,option3,preMemo){
        this.memoHTML;
        this.config = config;
        this.optionArray = [];
        this.option1;
        this.option2;
        this.option3;
        this.optionArray.push(option1);
        this.optionArray.push(option2);
        this.optionArray.push(option3);

        //will tell us if this memo has prep before the memo
        this.hasPrep = false;
        if(preMemo != undefined){
            this.hasPrep = true;
            this.preMemo = preMemo;
        }
    }
    assignButtonFunctions(){
        this.option1 = this.optionArray[0];
        this.option2 = this.optionArray[1];
        this.option3 = this.optionArray[2];
    }
    buildMemo(){
        this.assignButtonFunctions();
        //this.config.subject = "<p><b>Subject:</b> {SubjectLine}</p>";
        let extraButtonClass = "";
        if(this.config.buttonClass == undefined){
            this.config.buttonClass = extraButtonClass;
        }
        this.memoHTML = "<div>" +
                        "<div>" + "<div class= 'memoBody'><div>" + this.config.toLine+"</div><div>" + this.config.fromLine +"</div><div>" + this.config.subject + "</div></div>" + memoLine +
                        "<div class = 'memoBody'>" + this.config.body + this.config.signature + 
                        "</div></div>"+
                        "<div class ='optionButtonsHolder"+this.config.buttonClass + "'>" +
                        "<button class = 'memoOptionButtons' title='" + this.config.option1Tag + "'>"+ this.config.option1Text + "</button>" +
                        "<button class = 'memoOptionButtons' title='" + this.config.option2Tag + "'>"+ this.config.option2Text +"</button>" +
                        "<button class = 'memoOptionButtons' title='" + this.config.option3Tag + "'>"+ this.config.option3Text +"</button>"+
                        "</div></div>";
    }
    option1(){
        console.log("Option1 is chosen");
        this.undisplayMemo();
    }
    option2(){
        console.log("Option2 is chosen");
        this.undisplayMemo();
    }
    option3(){
        console.log("Option3 is chosen");
        this.undisplayMemo();
    }
    //this will return true, if preMemo returns false that means it won't do the memo
    preMemo(){
        return true;
    }
    //this function will be used for dynamic memos, they will change the body of memo
    //and I guess the functions?
    undisplayMemo(){
        realGame.updateDisplays();
        document.getElementById('fullMemo').style.display = 'none';
        realGame.finishMemo();
    }
    special1stMemo(){
        realGame.updateDisplays();
        document.getElementById('fullMemo').style.display = 'none';
        document.getElementById('nextWeekButton').style.display = 'block';
        //just won't finish memo
    }
}