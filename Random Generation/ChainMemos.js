let chainMemos = [new Memo("<div>" + 
                            "<div>" + memoIntroHTML + memoLine+
                            "<div class = 'memoBody'>&emsp;So, our last memo was NOT a joke. You HAVE to hire them. Some of us got caught with prostites and this is our way out." + memoSignatureLine +
                            "</div></div>"+
                            "<div class ='optionButtonsHolder'>" +
                            "<button class = 'memoOptionButtons'>I Guess</button>" +
                            "<button class = 'memoOptionButtons'>I Guess</button>" +
                            "<button class = 'memoOptionButtons'>I Guess</button></div>" +
                            "</div>",
                            function (){
                                let employee = createEmployee(new HiringTracker());
                                employee.specialization = "Sales";
                                realGame.company.hireEmployee('Middle Management',employee);
                                this.undisplayMemo();
                            },
                            function (){
                                let employee = createEmployee(new HiringTracker());
                                employee.specialization = "Sales";
                                realGame.company.hireEmployee('Middle Management',employee);
                                this.undisplayMemo();
                            },
                            function (){
                                let employee = createEmployee(new HiringTracker());
                                employee.specialization = "Sales";
                                this.undisplayMemo();
                            }),
                new Memo("<div>" + 
                            "<div>" + memoIntroHTML + memoLine+
                            "<div class = 'memoBody'>&emsp;The news cycle has still latched on to your employee. Can you please do SOMETHING about it?" + memoSignatureLine +
                            "</div></div>"+
                            "<div class ='optionButtonsHolder'>" +
                            "<button class = 'memoOptionButtons'>Try Again To Make It Go Away</button>" +
                            "<button class = 'memoOptionButtons'>Blame HR but Don't Fire Them</button>" +
                            "<button class = 'memoOptionButtons'>Fire Them</button></div>" +
                            "</div>",
                            function (){
                                let tempBool = realGame.company.checkProductivity('Marketing',25);
                                if(tempBool){
                                    //do nothing?
                                }
                                else{
                                    realGame.nextWeekMemos.push(chainMemos[2]);
                                }
                                realGame.company.gainMoney(-1000);
                                this.undisplayMemo();
                            },
                            function (){
                                realGame.nextWeekMemos.push(chainMemos[2]);
                                this.undisplayMemo();
                            },
                            function (){
                                
                                realGame.company.fireEmployee(realGame.company.scandalEmp);
                                realGame.company.scandalEmp = undefined;
                                this.undisplayMemo();
                            }),
                new Memo("<div>" + 
                            "<div>" + memoIntroHTML + memoLine+
                            "<div class = 'memoBody'>&emsp;Ok, we're putting our foot down, you really have to fire them this time. Otherwise THERE WILL BE CONSEQUENCES!"+ 
                             memoSignatureLine +
                            "</div></div>"+
                            "<div class ='optionButtonsHolder'>" +
                            "<button class = 'memoOptionButtons'>Fire Them But Blame HR</button>" +
                            "<button class = 'memoOptionButtons'>Fire Them</button>" +
                            "<button class = 'memoOptionButtons'>Ignore It</button></div>" +
                            "</div>",
                            function (){
                                realGame.company.fireEmployee(realGame.company.scandalEmp);
                                realGame.company.scandalEmp = undefined;
                                this.undisplayMemo();
                            },
                            function (){
                                realGame.company.fireEmployee(realGame.company.scandalEmp);
                                realGame.company.scandalEmp = undefined;
                                this.undisplayMemo();
                            },
                            function (){
                                realGame.company.ignoreTracker = realGame.company.ignoreTracker +1;
                                realGame.company.scandalEmp = undefined;
                                this.undisplayMemo();
                            }),
                    new Memo("<div>" + 
                            "<div>" + memoIntroHTML + memoLine+
                            "<div class = 'memoBody'>&emsp;Oh, you must not have gotten the memo about that. How fights work is our employees will fight a random companies employees. It'll mostly be a brawl with some weapons" +
                            "It's not a fight to the death so don't worry but sometimes people get hurt. It's ok, it's just employees getting hurt."+ 
                             memoSignatureLine +
                            "</div></div>"+
                            "<div class ='optionButtonsHolder'>" +
                            "<button class = 'memoOptionButtons'>Makes Sense</button>" +
                            "<button class = 'memoOptionButtons'>We'll Try Our Best</button>" +
                            "<button class = 'memoOptionButtons'>Ignore It</button></div>" +
                            "</div>",
                            function (){
                                this.undisplayMemo();
                            },
                            function (){
                                this.undisplayMemo();
                            },
                            function (){
                                realGame.company.ignoreTracker = realGame.company.ignoreTracker +1;
                                this.undisplayMemo();
                            }),];