//this will create a random employee

//will need to grab from a random name
//will need to create a random productivity
//will need a random expense
//random specialization
//random personality
//random trainingtracker
//random fightvalue
function createTrainingTracker(){
    let maxProductivityImpact = 5;
    let minProductivityImpact = 2;

        let tracker = new TrainingTracker();
        //should get us a random name/productivity/expense in employees
        tracker.baseProductivityImpact = Math.floor(Math.random()*(maxProductivityImpact-minProductivityImpact+1) + minProductivityImpact)/100;
        //will generate more later
        return tracker;
}