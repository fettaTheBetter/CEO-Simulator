
//each memo will have an html body attached to it, some number of options, and something else?
class ProductivityTracker {
    constructor(productivityValue,length){
        this.productivity = productivityValue;
        this.weeksLeft = 8;
    }
    reduceLength(num){
        this.weeksLeft = this.weeksLeft-num;
    }

}