

//this will have onstart button
//will it control the game?
let realGame;
let employeesToHire = [null,null,null];
let currentDepShown ="";
//this will help us assing the right helpMenu
let depHelpSearch = ["Human Resources","Marketing","Sales","Middle Management","Onboarding","Aid Station","Custodian","Recruiting"];
function StartGame(){
    //will create a newGame object?
    //make global game object
    realGame = new Game();
    realGame.canvas = document.getElementById('fullGame');
    realGame.createCompany();
    clickDepartment("Sales");
    //will set the startMenu
    document.getElementById('firstRoom').style.display = "none";
}

function NextWeek(){
    //what do I want for next week
    //grab event
    realGame.nextWeek();
    document.getElementById('nextWeekButton').style.display = 'none';
    clickDepartment("Sales");
    updateDisplays();
}

//the function that happens when you click 
function clickDepartment(name){
    resetErrorLog();
    resetSwitchEmpMenu();
    let department =realGame.company.getDepartment(name);
    //find the department object
    realGame.departmentDisplay.children[0].children[1].innerText = department.name;
    let tempIndex = 0;
    //will search for the index of the helpInfoArray
    for(let i=0;i<depHelpSearch.length;i++){
        if(name == depHelpSearch[i]){
            tempIndex = i;
        }
    }
    realGame.departmentDisplay.children[0].children[2].children[1].innerHTML = helpInfoArrays[tempIndex];
    //should set some things first, I believe I just have to set productivity
    realGame.company.setProductivity();
    //will display the name and employees on the canvas being sent in
    department.display(realGame.departmentDisplay.children[3]);
    document.getElementById('employeeInfo').style.display = "none";
    if(currentDepShown != ""){
        document.getElementById(currentDepShown + "Canvas").style.backgroundColor = "white";
    }
    document.getElementById(name+"Canvas").style.backgroundColor = "#6e5f5f";
    currentDepShown = name;
}
function clickEmployee(empNum,depName){
    resetErrorLog();
    resetSwitchEmpMenu();
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

function hiringMenu(index){
        document.getElementById('switchHiringMenu'+index).style.display = "block";
        document.getElementById('closeModalButton'+index).onclick = function() {
                                                                document.getElementById('switchHiringMenu'+index).style.display = "none";
                                                                };
                                                                window.onclick = function(event) {
                                                                    if (event.target == document.getElementById('switchHiringMenu'+index)) {
                                                                        document.getElementById('switchHiringMenu'+index).style.display = "none";
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
        document.getElementById('errorLog').innerText = "This employee has already moved departments this week";
    }
    updateDisplays();
}
function fireEmployee(){
    let employee = realGame.company.curSelectEmp;
    realGame.company.fireEmployee(employee);
    updateDisplays();
    clickDepartment(employee.currentDepartment);
}


function hireEmployee(empIndex,depName){
    document.getElementById('allNewHires').children[empIndex].children[1].style.display = "none";
    document.getElementById('allNewHires').children[empIndex].children[0].style.display = "none";
    
    realGame.company.hireEmployee(depName,employeesToHire[empIndex]);
    updateDisplays();
}
function updateDisplays(){
    realGame.updateDisplays();
}
function removeEmployeeInfo(){
    while(document.getElementById('empAttributes').children[1].children.length > 0){
        document.getElementById('empAttributes').children[1].removeChild(document.getElementById('empAttributes').children[1].lastChild);
    }
}
//will make the errorLog undisplay
function resetErrorLog(){
    document.getElementById('errorLog').innerText = "";
}
function resetSwitchEmpMenu(){
    document.getElementById('switchDepartmentsMenu').style.display = "none";
}
//will return html for 1 employee for hiring,
//the num is for making the document id

function createEmpHiringObject(num){
    let MMString = "";
    if(realGame.company.getDepartment('Middle Management') != undefined){
        MMString = "<button onclick='hireEmployee(" + (num-1) +",\"Middle Management\")'>Middle Management</button>"
    }
        let htmlEmployee =      "<div id='switchHiringMenu" + num +"' class = 'modal'>" +
                                    "<span id='closeModalButton" + num +"' class='close'>&times;</span>" + 
                                    "<div class = 'modal-content'>Which Department would you like to hire them at?</div>" +
                                    "<div class ='buttonHolder'>" +
                                    "<button onclick='hireEmployee(" + (num-1) +",\"Aid Station\")'>Aid Station</button>"+
                                    "<button onclick='hireEmployee(" + (num-1) +",\"Custodian\")'>Custodian</button>"+
                                    "<button onclick='hireEmployee(" + (num -1)+ ",\"Human Resources\")'>Human Resources</button>" +
                                    "<button onclick='hireEmployee(" + (num-1) +",\"Marketing\")'>Marketing</button>" +
                                    "<button onclick='hireEmployee("+ (num-1) +",\"Onboarding\")'>Onboarding</button>" +
                                    "<button onclick='hireEmployee(" + (num-1) +",\"Recruiting\")'>Recruiting</button>"+
                                    "<button onclick='hireEmployee(" + (num-1) +",\"Sales\")'>Sales</button>" +
                                    MMString +
                                    "</div>" +
                                "</div>" +
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
        temp.children[1].children[2].onclick = function() {hiringMenu(num);};
        return temp;
}
function toggleMenu(){
    let menu = document.getElementById('hiddenMenu');
    if(menu.style.display != "none"){
        menu.style.display = "none";
    }
    else{
        menu.style.display = "block";
    }
}

function createMemoEmp(){
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
                                "</div>" 
                            ;
        let temp = document.createElement('div');
        temp.appendChild(document.createElement('div'));
        temp.innerHTML = htmlEmployee;
        return temp;
}
function pickRandomEmployee(){
    //will need two random numbers, one for dep, and one for employee
    let randDepNum = Math.floor(Math.random()*(realGame.company.departmentsArray.length));
    let randEmpNum = Math.floor(Math.random()*(realGame.company.departmentsArray[randDepNum].employees.length));
    return realGame.company.departmentsArray[randDepNum].employees[randEmpNum];
}

function sortByProd(){
    let dep = realGame.company.getDepartment(currentDepShown);
    dep.sortByProd();
    clickDepartment(currentDepShown);

}

function sortByExpense(){
    let dep = realGame.company.getDepartment(currentDepShown);
    dep.sortByExpense();
    clickDepartment(currentDepShown);

}
function sortByIdNumber(){
    let dep = realGame.company.getDepartment(currentDepShown);
    dep.sortByIdNum();
    clickDepartment(currentDepShown);

}
function hideBattleDetails(){
    let tempDoc = document.getElementById('allRounds');
    if(tempDoc.style.display == "none"){
        tempDoc.style.display = "flex";
    }
    else{
        tempDoc.style.display = "none";
    }
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


function swap(index1,index2,array){
    let a = array[index1];
    array[index1] = array[index2];
    array[index2] = a;
    return array;
}



