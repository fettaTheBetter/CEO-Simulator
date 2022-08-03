//each memo will have an html body attached to it, some number of options, and something else?
class DynamicMemo extends Memo {
    constructor(){
        let config = prepreMemo();
        super(config,option1Dynamic,option2Dynamic,option3Dynamic,preMemo);
        //will tell us if this memo has prep before the memo
        this.config = config;
    }
}