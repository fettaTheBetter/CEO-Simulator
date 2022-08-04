
//each memo will have an html body attached to it, some number of options, and something else?
class Memo {
    constructor(config,option1,option2,option3,preMemo){
        this.memoHTML;
        this.config = config;
        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
        //will tell us if this memo has prep before the memo
        this.hasPrep = false;
        if(preMemo != undefined){
            this.hasPrep = true;
            this.preMemo = preMemo;
        }
    }
    buildMemo(){

        //this.config.subject = "<p><b>Subject:</b> {SubjectLine}</p>";
        this.memoHTML = "<div>" +
                        "<div>" + "<div class= 'memoBody'>" + this.config.toLine + this.config.fromLine + this.config.subject + "</div>" + memoLine +
                        "<div class = 'memoBody'>" + this.config.body + this.config.signature + 
                        "</div></div>"+
                        "<div class ='optionButtonsHolder'>" +
                        "<button class = 'memoOptionButtons'>"+ this.config.option1Text + "</button>" +
                        "<button class = 'memoOptionButtons'>"+ this.config.option2Text +"</button>" +
                        "<button class = 'memoOptionButtons'>"+ this.config.option3Text +"</button></div>"+
                        "</div>";
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