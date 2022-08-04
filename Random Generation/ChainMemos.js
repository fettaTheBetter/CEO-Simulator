let chainMemos = [new Memo(
                            {toLine: "<p><b>To:</b> Our Beloved CEO</p>",
                             fromLine: "<p><b>From:</b> The Board</p>",
                             body: "<p>&emsp;So, our last memo was NOT a joke. You HAVE to hire them. Some of us got caught with prostites and this is our way out.</p>",
                             signature: "<p>Regards,</p> <p>&emsp; Your Board Of Directors</p>",
                             option1Text: "I Guess",
                             option2Text: "I Guess",
                             option3Text: "I Guess",
                             subject: "<p><b>Subject:</b> Middle Management Hiring RE:</p>"},
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
                             option3Text: "Fire Them",
                             subject: "<p><b>Subject:</b> Employee Issues</p>"},
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
                             option3Text: "Ignore It",
                             subject: "<p><b>Subject:</b> IMPORTANT Employee Issues</p>"},
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
                             option3Text: "Ignore It",
                             subject: "<p><b>Subject:</b> GCBA Rules and Regulations</p>"},
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
                            {toLine: "<p><b>To:</b> Our CEO  </p>",
                                fromLine: "<p><b>From:</b> The Board Of Directors</p>",
                                body: "<p>&emsp; We'll be honest, productivity is a mystery to us. We're not sure how it works because there's a lot of factors that go into a workers productivity. " +
                                "Productivity can be decreased by going through training, being specialized and even physical injury. Also departments can have their own productivity and that is, for the most part, only affected by workers.</p>",
                                signature: "<p>Regards,</p> <p>&emsp;The Board Of Directors</p>",
                                option1Text: "How Do I Make Money?",
                                option2Text: "What are departments?",
                                option3Text: "I'm good to go.",
                                subject: "<p><b>Subject:</b> Productivity</p>"},
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
                            {toLine: "<p><b>To:</b> Our CEO  </p>",
                                fromLine: "<p><b>From:</b> The Board Of Directors</p>",
                                body: "<p>&emsp;Each department has different ways they will impact the company. There are two different things that effect the company in a departmnet." +
                                " The number of employees in said department and the overall productivity of the department. </p>",
                                signature: "<p>Regards,</p> <p>&emsp;The Board Of Directors</p>",
                                option1Text: "What is productivity?",
                                option2Text: "How do I make money?",
                                option3Text: "I'm good to go.",
                                subject: "<p><b>Subject:</b> Departments</p>"},
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
                            {toLine: "<p><b>To:</b> Our CEO  </p>",
                                fromLine: "<p><b>From:</b> The Board Of Directors</p>",
                                body: "<p>&emsp;You make money by selling it is we sell. That is on your sales department." +
                                " </p>",
                                signature: "<p>Regards,</p> <p>&emsp;The Board Of Directors</p>",
                                option1Text: "What is productivity?",
                                option2Text: "What about departments?",
                                option3Text: "I'm good to go.",
                                subject: "<p><b>Subject:</b> Making Money</p>"},
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