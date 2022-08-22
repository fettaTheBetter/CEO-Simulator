
//is the personality along with the people
//will need a way to handle multiple personalities in one object

class Personality{
    constructor(personality){
        this.personality = personality;
        //need to find a way to manipulate stuff with personality
        
        //will use different function for different 
        this.remoteWork = false;
        this.likesPraise = false;
        this.likesDecorations = false;
        this.likesFellowEmp = false;
        this.likesTeambuilding = false;
    }
    remoteWork(isRemote){
        //if this person likes remote work
        if(isRemote){
            if(this.remoteWork){
                return 2;
            }
            else{
                return -2;
            }
        }
        else{
            if(!(this.remoteWork)){
                return 2;
            }
            else{
                return -2;
            }
        }
    }
    checkFellowEmp(){
        if(this.likesFellowEmp){
            return 2;
        }
        else{
            return -2;
        }

    }
    officeDecorations(){
        if(this.likesDecorations){
            return 2;
        }
        else{
            return -2;
        }
    }
    teamBuilding(){
        if(this.likesTeambuilding){
            return 2;
        }
        else{
            return -2;
        }

    }
    beingPraised(){
        if(this.likesPraise){
            return 2;
        }
        else{
            return -2;
        }
    }

}