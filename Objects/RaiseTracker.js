//will keep track of how often employees get raises
class RaiseTracker {
    constructor(raiseValue,length){
        this.raiseValue = raiseValue;
        this.baseWeeksForRaise = length
        this.weeksForRaise = this.baseWeeksForRaise;
    }
    reduceWeek(){
        this.weeksForRaise--;
    }
    resetRaiseTracker(){
        this.weeksForRaise = this.baseWeeksForRaise;
    }

}