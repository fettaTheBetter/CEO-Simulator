class TrainingTracker{
    constructor(){
        this.weeksToComplete;
        //when it is created you should have 0 weeks completed
        this.weeksCompleted = 0;
        //how much your productivity is impacted by your training
        //will be a percentage value
        this.productivityImpact;


        //
        //
        //will make a base TrainingTracker will be used for testing
        this.weeksToComplete = 4;
        this.productivityImpact = 0.5;
    }
}