

//this will have onstart button
//will it control the game?
let realGame;
function StartGame(){
    //will create a newGame object?
    //make global game object
    realGame = new Game();
    realGame.canvas = document.getElementById('fullGame');
    realGame.createCompany();
    clickDepartment("Human Resources");
}

function nextWeek(){
    //what do I want for next week
    //grab event
    //realGame.events.eventsArray[0].executeEvent();
    realGame.nextWeek();
}

//the function that happens when you click 
function clickDepartment(name){
    console.log("Here is the department displays children: " + realGame.departmentDisplay.children[1].innerText);
    let department;
    //find the department object
    for(let i=0;i<realGame.company.departmentsArray.length;i++){
        if(realGame.company.departmentsArray[i].name == name){
            department = realGame.company.departmentsArray[i];
        }
    }
    realGame.departmentDisplay.children[0].innerText = department.name;
    //will display the name and employees on the canvas being sent in
    department.display(realGame.departmentDisplay.children[1]);
}