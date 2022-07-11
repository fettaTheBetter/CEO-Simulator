
//each memo will have an html body attached to it, some number of options, and something else?
class Memo {
    constructor(){
        this.optionsArray = ["option1","option2","option3"];
        //where will I store these options functions?
        //How will these memos be able to access the game?
        this.optionsFunctions = [option1(),option2(),option3()];
    }
    option1(){
        console.log("Option1 is chosen");
    }
    option2(){
        console.log("Option2 is chosen");
    }
    option3(){
        console.log("Option3 is chosen");
    }
}