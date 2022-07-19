
//each memo will have an html body attached to it, some number of options, and something else?
class Memo {
    constructor(html,option1,option2,option3,preMemo){
        this.memoHTML = html;
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
    preMemo(){
        console.log("Some pre-memo action");
        return false;
    }
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