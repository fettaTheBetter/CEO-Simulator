let chainMemos = [new Memo(
                            {toLine: "<b>To:</b> Our Beloved CEO",
                             fromLine: "<b>From:</b> The Board",
                             body: "<p>&emsp;So, our last memo was NOT a joke. You HAVE to hire them. Some of us got caught with prostites and this is our way out.</p>",
                             signature: "<p>Regards,</p> <p>&emsp; Your Board Of Directors</p>",
                             option1Text: "I Guess",
                             option2Text: "I Guess",
                             option3Text: "I Guess",
                             subject: "<b>Subject:</b> Middle Management Hiring RE:",
                             option1Tag: "I Guess",
                             option2Tag: "I Guess",
                             option3Tag: "I Guess"},
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
                            {toLine: "<b>To:</b> Our CEO ",
                             fromLine: "<b>From:</b> The Board Of Directors",
                             body: "<p>&emsp&emsp;The news cycle has still latched on to your employee. Can you please do SOMETHING about it?</p>",
                             signature: "<p>Regards,</p> <p>&emsp; Your Friendly Board Of Directors</p>",
                             option1Text: "Try Again To Make IT Go Away",
                             option2Text: "Don't Fire Them",
                             option3Text: "Fire Them",
                             subject: "<b>Subject:</b> Employee Issues",
                             option1Tag: "Lose $1000, Chance To Make It Go Away",
                             option2Tag: "Don't Fire Them",
                             option3Tag: "FIRE THEM"},
                            function (){
                                let tempBool = realGame.company.checkProductivity('Marketing',50);
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
                            {toLine: "<b>To:</b> Our CEO ",
                             fromLine: "<b>From:</b> The Angry Board Of Directors",
                             body: "<p>&emsp;Ok, we're putting our foot down, you really have to fire them this time. Otherwise THERE WILL BE CONSEQUENCES!</p>",
                             signature: "<p>Regards,</p> <p>&emsp;Your Angry Board Of Directors</p>",
                             option1Text: "Fire Them But Blame HR",
                             option2Text: "Fire Them",
                             option3Text: "Ignore It",
                             subject: "<b>Subject:</b> IMPORTANT Employee Issues",
                             option1Tag: "Fire Them, And HR Takes The Blame",
                             option2Tag: "Fire Them",
                             option3Tag: ignoreBoardTitle},
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
                            {toLine: "<b>To:</b> Our CEO  ",
                             fromLine: "<p><b>From:</b> The Board Of Directors</p>",
                             body: "<p>&emsp;Oh, you must not have gotten the memo about that. How fights work is our employees will fight a random companies employees. It'll mostly be a brawl with some weapons," +
                             " It's not a fight to the death so don't worry but sometimes people get hurt. It's ok, it's just employees getting hurt.</p>",
                             signature: "<p>Regards,</p> <p>&emsp;The Board Of Directors</p>",
                             option1Text: "Makes Sense",
                             option2Text: "We'll Try Our Best",
                             option3Text: "Ignore It",
                             subject: "<b>Subject:</b> GCBA Rules and Regulations",
                             option1Tag: "This Does Not Make Sense",
                             option2Tag: "On It",
                             option3Tag: ignoreBoardTitle},
                            function (){
                                this.undisplayMemo();
                            },
                            function (){
                                this.undisplayMemo();
                            },
                            function (){
                                realGame.company.ignoreTracker = realGame.company.ignoreTracker +1;
                                this.undisplayMemo();
                            }),
                    new Memo(
                            {toLine: "<b>To:</b> Our CEO  ",
                                fromLine: "<b>From:</b> The Board Of Directors",
                                body: "<p>&emsp; Individual productivity is affected by a large amount of variables. Productivity is decreased if they are currently going through training, injured in any way, or some other things. Those are the main ones." +
                                 " In contrast to employee productivity, department producitivy is an average of all the employees.</p>",
                                signature: "<p>Regards,</p> <p>&emsp;The Board Of Directors</p>",
                                option1Text: "How Do I Make Money?",
                                option2Text: "What are departments?",
                                option3Text: "I'm good to go.",
                                subject: "<b>Subject:</b> Productivity",
                                option1Tag: "Tutorial On Money",
                                option2Tag: "Tutorial On Departments",
                                option3Tag: "End Tutorial"},
                            function (){
                                realGame.memoArray.push(chainMemos[6]);
                                this.undisplayMemo();
                            },
                            function (){
                                realGame.memoArray.push(chainMemos[5]);
                                this.undisplayMemo();
                            },
                            function (){
                                realGame.memoArray.push(timedMemos[0]);
                                this.undisplayMemo();
                            }),
                    new Memo(
                            {toLine: "<b>To:</b> Our CEO  ",
                                fromLine: "<b>From:</b> The Board Of Directors",
                                body: "<p>&emsp;Each department has different ways they will impact the company. There are two different things that effect the company in a departmnet." +
                                " The number of employees in said department and the overall productivity of the department. </p>",
                                signature: "<p>Regards,</p> <p>&emsp;The Board Of Directors</p>",
                                option1Text: "What is productivity?",
                                option2Text: "How do I make money?",
                                option3Text: "I'm good to go.",
                                subject: "<b>Subject:</b> Departments",
                                option1Tag: "Tutorial On Productivity",
                                option2Tag: "Tutorial On Money",
                                option3Tag: "End Tutorial"},
                            function (){
                                realGame.memoArray.push(chainMemos[4]);
                                this.undisplayMemo();
                            },
                            function (){
                                realGame.memoArray.push(chainMemos[6]);
                                this.undisplayMemo();
                            },
                            function (){
                                realGame.memoArray.push(timedMemos[0]);
                                this.undisplayMemo();
                            }),
                    new Memo(
                            {toLine: "<b>To:</b> Our CEO  ",
                                fromLine: "<b>From:</b> The Board Of Directors",
                                body: "<p>&emsp;You make money through the sales and marketing departments. If your money goes negative you won't be fired right away don't worry, we'll give you a little leeway." +
                                " </p>",
                                signature: "<p>Regards,</p> <p>&emsp;The Board Of Directors</p>",
                                option1Text: "What is productivity?",
                                option2Text: "What about departments?",
                                option3Text: "I'm good to go.",
                                subject: "<b>Subject:</b> Making Money",
                                option1Tag: "Tutorial On Productivity",
                                option2Tag: "Tutorial On Departments",
                                option3Tag: "End Tutorial"},
                            function (){
                                realGame.memoArray.push(chainMemos[4]);
                                this.undisplayMemo();
                            },
                            function (){
                                realGame.memoArray.push(chainMemos[5]);
                                this.undisplayMemo();
                            },
                            function (){
                                realGame.memoArray.push(timedMemos[0]);
                                this.undisplayMemo();
                            }),
                        ];