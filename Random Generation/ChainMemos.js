let chainMemos = [new Memo(
                            {toLine: "<p><b>To:</b> Our Beloved CEO</p>",
                             fromLine: "<p><b>From:</b> The Board</p>",
                             body: "<p>&emsp;So, our last memo was NOT a joke. You HAVE to hire them. Some of us got caught with prostites and this is our way out.</p>",
                             signature: "<p>Regards,</p> <p>&emsp; Your Board Of Directors</p>",
                             option1Text: "I Guess",
                             option2Text: "I Guess",
                             option3Text: "I Guess"},
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
                new Memo(
                            {toLine: "<p><b>To:</b> Our CEO </p>",
                             fromLine: "<p><b>From:</b> The Board Of Directors</p>",
                             body: "<p>&emsp&emsp;The news cycle has still latched on to your employee. Can you please do SOMETHING about it?</p>",
                             signature: "<p>Regards,</p> <p>&emsp; Your Friendly Board Of Directors</p>",
                             option1Text: "Try Again To Make IT Go Away",
                             option2Text: "Don't Fire Them",
                             option3Text: "Fire Them"},
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
                new Memo(
                            {toLine: "<p><b>To:</b> Our CEO </p>",
                             fromLine: "<p><b>From:</b> The Angry Board Of Directors</p>",
                             body: "<p>&emsp;Ok, we're putting our foot down, you really have to fire them this time. Otherwise THERE WILL BE CONSEQUENCES!</p>",
                             signature: "<p>Regards,</p> <p>&emsp;Your Angry Board Of Directors</p>",
                             option1Text: "Fire Them But Blame HR",
                             option2Text: "Fire Them",
                             option3Text: "Ignore It"},
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
                    new Memo(
                            {toLine: "<p><b>To:</b> Our CEO  </p>",
                             fromLine: "<p><b>From:</b> The Board Of Directors</p>",
                             body: "<p>&emsp;Oh, you must not have gotten the memo about that. How fights work is our employees will fight a random companies employees. It'll mostly be a brawl with some weapons," +
                             " It's not a fight to the death so don't worry but sometimes people get hurt. It's ok, it's just employees getting hurt.</p>",
                             signature: "<p>Regards,</p> <p>&emsp;The Board Of Directors</p>",
                             option1Text: "Makes Sense",
                             option2Text: "We'll Try Our Best",
                             option3Text: "Ignore It"},
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