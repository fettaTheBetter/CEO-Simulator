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
                                employee.specialization = realGame.company.tempDepartment;
                                realGame.company.hireEmployee('Middle Management',employee);
                                this.undisplayMemo();
                            },
                            function (){
                                let employee = createEmployee(new HiringTracker());
                                employee.specialization = realGame.company.tempDepartment;
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
                             body: "<p>&emsp;The news cycle has still latched on to your employee. Can you please do SOMETHING about it?</p>",
                             signature: "<p>Regards,</p> <p>&emsp; Your Friendly Board Of Directors</p>",
                             option1Text: "Try Again To Make It Go Away",
                             option2Text: "Don't Fire Them",
                             option3Text: "Fire Them",
                             subject: "<b>Subject:</b> Employee Issues",
                             option1Tag: "Lose $1000, Chance To Make It Go Away",
                             option2Tag: "Don&#39;t Fire Them",
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
                            },
                            function (){
                                let empDisplay = createMemoEmp();
                                document.getElementById('fullMemo').appendChild(empDisplay);
                                realGame.company.getDepartment('Human Resources').showEmployee(document.getElementById('fullMemo').children[1].children[0].children[1].children[0],realGame.company.scandalEmp);
                                document.getElementById('fullMemo').children[1].children[0].style.display = "flex";
                                return true;
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
                            },
                            function (){realGame.company.scandalEmp = pickRandomEmployee();
                                let empDisplay = createMemoEmp();
                                document.getElementById('fullMemo').appendChild(empDisplay);
                                realGame.company.getDepartment('Human Resources').showEmployee(document.getElementById('fullMemo').children[1].children[0].children[1].children[0],realGame.company.scandalEmp);
                                document.getElementById('fullMemo').children[1].children[0].style.display = "flex";
                                return true;
                            }),
                    new Memo(
                            {toLine: "<b>To:</b> Our CEO  ",
                             fromLine: "<p><b>From:</b> The Board Of Directors</p>",
                             body: "<p>&emsp;Oh, you must not have gotten the memo about that. How fights work is our employees will fight a random companies employees. It'll mostly be a brawl with some weapons," +
                             " It's not a fight to the death so don't worry but sometimes people get hurt. It's ok, it's just employees getting hurt. <br>" +
                             "&emsp; Our employees will pair off 1-on-1 against our competitors employees. Then any extra employees on either side will join the other fights to create an unfair advantage. The fight will continue until there is nobody left to field on at least one side. So generally the more employees you have the better chance you have. </p>",
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
                                body: "<p>&emsp; Individual productivity is affected by a large amount of variables. Productivity is decreased if they are currently going through training, injured in any way, or some other things." +
                                 " Employee productivity can also be increased by putting them in their specialized department or by pretending to care about them. In contrast to employee productivity, department productivity is an average of all the employees.</p>",
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
                                body: "<p>&emsp;Each department will effect the company in different ways. How much it effects the company depends on how productive that department is." +
                                " The higher the productivity the more positive affect the department will have on the company. </p>",
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
                                body: "<p>&emsp;You make money through the sales and marketing departments. If your money goes negative you will be fired; so just don't let that happen :)" +
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