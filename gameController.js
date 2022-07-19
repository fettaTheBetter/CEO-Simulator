

//this will have onstart button
//will it control the game?
let realGame;
let employeesToHire = [null,null,null];
function StartGame(){
    //will create a newGame object?
    //make global game object
    realGame = new Game();
    realGame.canvas = document.getElementById('fullGame');
    realGame.createCompany();
    clickDepartment("Human Resources");
    document.getElementById('firstRoom').style.display = "none";
}

function NextWeek(){
    //what do I want for next week
    //grab event
    realGame.nextWeek();
    document.getElementById('nextWeekButton').style.display = 'none';
    clickDepartment("Human Resources");
    updateDisplays();
}

//the function that happens when you click 
function clickDepartment(name){
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
    document.getElementById('employeeInfo').style.display = "none";
}
function clickEmployee(empNum,depName){
    //find the department object
    let department = realGame.company.getDepartment(depName);
    let employee = department.getEmployee(empNum);
    //need to change empInfo HTML
    let empDisplay = document.getElementById('employeeInfo');
    empDisplay.style.display = "flex";
    //this is the div containing the attributes empDisplay.children[1]
    realGame.company.getDepartment('Human Resources').showEmployee(empDisplay.children[1].children[1], employee);
    realGame.company.curSelectEmp = employee;

}
function switchDepartmentsMenu(){
    document.getElementById('switchDepartmentsMenu').style.display = "block";
    document.getElementById('closeModalButton').onclick = function() {
                                                            document.getElementById('switchDepartmentsMenu').style.display = "none";
                                                            };
                                                            window.onclick = function(event) {
                                                                if (event.target == document.getElementById('switchDepartmentsMenu')) {
                                                                    document.getElementById('switchDepartmentsMenu').style.display = "none";
                                                                }
                                                              };


}
//will switch an employee into departmentTo
//departmentToName is only the name of the department, NOT THE OBJECT
function switchEmployee(departmentToName){
    let departmentTo = realGame.company.getDepartment(departmentToName);
    //this is the employee selected
    let employee = realGame.company.curSelectEmp;
    let departmentFrom = realGame.company.getDepartment(employee.currentDepartment);
    //checking if the employee has already been moved this week
    if(!(employee.hasSwitchDept)){
    departmentFrom.moveEmployee(employee,departmentTo);
        updateDisplays();
        //need to remove visibility of right displays
        document.getElementById('switchDepartmentsMenu').style.display = "none";
        clickDepartment(departmentFrom.name);
    }
    else{
        console.log("This employee has already moved departments this week");
    }
    updateDisplays();
}
function fireEmployee(){
    let employee = realGame.company.curSelectEmp;
    realGame.company.fireEmployee(employee);
    updateDisplays();
    clickDepartment(employee.currentDepartment);
}


function hireEmployee(empIndex){
    document.getElementById('allNewHires').children[empIndex].children[0].style.display = "none";
    updateDisplays();
    realGame.company.hireEmployee("Sales",employeesToHire[empIndex]);
}
function updateDisplays(){
    realGame.updateDisplays();
}
function removeEmployeeInfo(){
    while(document.getElementById('empAttributes').children[1].children.length > 0){
        document.getElementById('empAttributes').children[1].removeChild(document.getElementById('empAttributes').children[1].lastChild);
    }
}
//will return html for 1 employee for hiring,
//the num is for making the document id

function createEmpHiringObject(num){
        let htmlEmployee =
                                "<div  class = 'employeeInfo'>" +
                                    "<div class = 'imageHolder flexColumn'>" +
                                        "<img src ='https://office-mayhem.s3.us-east-2.amazonaws.com/tempFaceTrans.png'>" +
                                        "<div><b></b></div>" +
                                    "</div>" + 
                                    "<div>" +
                                        "<div class = 'empAttributes'>" +
                
                                            "<div>" +
                                                "<div style = 'font-size: 200%; align-content: center;'>Attributes</div>" +
                                            "</div>" +
                                            "<div>" +   
                                            "</div>" +
                                        "</div>" +
                                    "</div>" +
                                    "<button class='hireButton '>HIRE</button>" +  
                                "</div>" 
                            ;
        let temp = document.createElement('div');
        temp.id = "employee" + num;
        temp.appendChild(document.createElement('div'));
        temp.innerHTML = htmlEmployee;
        temp.children[0].children[2].onclick = function() {hireEmployee(num-1);};
        return temp;
}


///////////////////
//utility functions
///////////////////

//will return an array with the object swapped with the end and removed
function removeFromArray(obj,array){
        for(let i=0;i<array.length;i++){
            if(obj == array[i]){
                let a = obj;
                array[i] = array[array.length-1];
                array[array.length-1] = a;
                array.pop();
                return array;
            }
        }
}