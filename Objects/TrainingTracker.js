class TrainingTracker{
    constructor(){
        this.weeksToComplete;
        //when it is created you should have 0 weeks completed
        this.weeksCompleted = 0;
        //how much your productivity is impacted by your training
        //will be a percentage value
        this.productivityImpact;
        this.baseProductivityImpact = 0.05;


        //
        //
        //will make a base TrainingTracker will be used for testing
        this.weeksToComplete = 16;
        this.productivityImpact = (this.weeksToComplete-this.weeksCompleted)*this.baseProductivityImpact;
        this.baseWeeksToComplete = 16;
        this.isCompleted = false;

        //need to randomize base productivity impact
        
    }
    reduceWeeksToComplete(numReduced){
        this.weeksToComplete = this.baseWeeksToComplete-numReduced;
        this.productivityImpact = (this.weeksToComplete-this.weeksCompleted)*this.baseProductivityImpact;
    }
    checkForCompletion(){
        if(this.weeksCompleted >= this.weeksToComplete){
            this.isCompleted = true;
        }
        else{
            this.isCompleted = false;
        }
        return this.isCompleted;
    }
}