
let generalMemos = [new Memo( {   toLine: "<b>To:</b> Our Beloved CEO",
                                    fromLine: "<b>From:</b> The Board Of Directors",
                                    body: "<p>&emsp;Hi if you're receiving this that means we don't care enough about you to send an actual memo. Just choose some amount of money you want.</p>",
                                    signature: "<p>Regards,</p> <p>&emsp;Your Friendly Board Of Directors :)</p>",
                                    option1Text: "Don't Ask For Money",
                                    option2Text: "Ask For A Little",
                                    option3Text: "Beg For A Lot",
                                    subject: "<b>Subject:</b> Generic Memo",
                                    option1Tag: "Gain $0",
                                    option2Tag: "Gain $200",
                                    option3Tag: "Gain $700"},
                                function (){
                                    this.undisplayMemo();
                                },
                                function (){
                                    realGame.company.gainMoney(200);
                                    this.undisplayMemo();
                                },
                                function (){
                                    realGame.company.gainMoney(700);
                                    this.undisplayMemo();
                                }),
                    new Memo(
                            {toLine: "<b>To:</b> Our Beloved CEO",
                             fromLine: "<b>From:</b> Human Resources",
                             body: "<p>&emsp;Hi, we've noticed some complaints about the decor of the office. Some people think it could use some plants and art and other random crap normal people like.</p>",
                             signature: "<p>Regards,</p> <p>&emsp;Your Friendly Board Of Directors :)</p>",
                             option1Text: "Lavishly Decorate Office",
                             option2Text: "Decorate Office",
                             option3Text: "Ignore It",
                             subject: "<b>Subject:</b> Decor Issue",
                             option1Tag: "Lose $300, Increase Productivity For Everyone",
                             option2Tag: "Lose $100, Increase Productivity",
                             option3Tag: "Ignore HR"},
                                function (){
                                    realGame.company.gainMoney(-300);
                                    realGame.company.increaseAllProductivity(2);
                                    realGame.company.checkDecor();
                                    this.undisplayMemo();
                                },
                                function (){
                                    realGame.company.gainMoney(-100);
                                    realGame.company.increaseDepartmentProductivity('Human Resources',2);
                                    this.undisplayMemo();
                                },
                                function (){
                                    realGame.company.increaseDepartmentProductivity('Human Resources',-2);
                                    this.undisplayMemo();
                                }),
                    new Memo(
                            {toLine: "<b>To:</b> Our Beloved CEO",
                             fromLine: "<b>From:</b> The Board Of Directors",
                             body: "<p>&emsp;We've been hearing online about a new technology called blockchain. We think it should be implemented into our business. We're not sure how it works but you'll figure it out! Thanks buddy!</p>",
                             signature: "<p>Regards,</p> <p>&emsp;Your Friendly Board Of Directors :)</p>",
                             option1Text: "Implement Blockchain",
                             option2Text: "Say Yes But Don't Do Anything",
                             option3Text: "Ignore It",
                             subject: "<b>Subject:</b> Technological Improvements",
                             option1Tag: "Lose $200, Chance To Gain Productivity",
                             option2Tag: "Pretend To Listen To The Board",
                             option3Tag: ignoreBoardTitle},
                                function (){
                                    realGame.company.gainMoney(-200);
                                    let tempBool = realGame.company.checkProductivity('Onboarding',50);
                                    if(tempBool){
                                        realGame.company.increaseAllProductivity(2);
                                    }
                                    else{
                                        realGame.company.increaseAllProductivity(-2);
                                    }
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
                            {toLine: "<b>To:</b> Our Beloved CEO",
                             fromLine: "<b>From:</b> The Board Of Directors",
                             body: "<p>&emsp;Happy Holidays! We've hope you've given some though to giving your employees a little holiday bonus." +
                             "We're not here to tell you what to do... but we think it's a good idea</p>",
                             signature: "<p>Regards,</p> <p>&emsp;Your Friendly Board Of Directors :)</p>",
                             option1Text: "Give Large Bonus",
                             option2Text: "Give Little Bonus",
                             option3Text: "Ignore It",
                             subject: "<b>Subject:</b> Holiday Bonus",
                             option1Tag: "Give $25 To Each Employee",
                             option2Tag: "Give $10 To Each Employee",
                             option3Tag: ignoreBoardTitle},
                                function (){
                                    realGame.company.gainMoney(-(realGame.company.getNumOfEmployees()*25));
                                    this.undisplayMemo();
                                },
                                function (){
                                    realGame.company.gainMoney(-(realGame.company.getNumOfEmployees()*10));
                                    this.undisplayMemo();
                                },
                                function (){
                                    realGame.company.ignoreTracker = realGame.company.ignoreTracker +1;
                                    this.undisplayMemo();
                                }),
                    new Memo(
                            {toLine: "<b>To:</b> Our Dear CEO",
                             fromLine: "<b>From:</b> Human Resources",
                             body: "<p>&emsp;Hey Boss, some employees thought it might be a good time to throw an office party. We're wondering what kind of budget we can get for the party.</p>",
                             signature: "<p>Regards,</p> <p>&emsp;Human Resources</p>",
                             option1Text: "As Much As You Want",
                             option2Text: "We Can Afford One Cake",
                             option3Text: "Ignore It",
                             subject: "<b>Subject:</b> Office Party",
                             option1Tag: "Lose $150",
                             option2Tag: "Lose $50",
                             option3Tag: "Ignore HR"},
                            function (){
                                realGame.company.checkParty();
                                realGame.company.gainMoney(-150);
                                this.undisplayMemo();
                            },
                            function (){
                                realGame.company.checkParty();
                                realGame.company.gainMoney(-50);
                                this.undisplayMemo();
                            },
                            function (){
                                realGame.company.increaseDepartmentProductivity('Human Resources',-2);
                                this.undisplayMemo();
                            }),
                    new Memo(
                            {toLine: "<b>To:</b> CEO",
                             fromLine: "<b>From:</b> Onboarding",
                             body: "<p>&emsp;Some employees have complained about their computers being a little slower than usual and we think an upgrade is needed. " +
                             "You think we could get some funds for a full server and PC upgrade for everyone?</p>",
                             signature: "<p>Regards,</p> <p>&emsp;Onboarding</p>",
                             option1Text: "Hell Yeah!",
                             option2Text: "Only Minor Upgrades",
                             option3Text: "Ignore It",
                             subject: "<b>Subject:</b> Technological Upgrade",
                             option1Tag: "Lose $500, Increase Productivity",
                             option2Tag: "Lose $100",
                             option3Tag: "Ignore Onboarding"},
                                function (){
                                    realGame.company.increaseAllProductivity(2);
                                    realGame.company.gainMoney(-500);
                                    this.undisplayMemo();
                                },
                                function (){
                                    realGame.company.gainMoney(-100);
                                    this.undisplayMemo();
                                },
                                function (){
                                    realGame.company.increaseDepartmentProductivity('Onboarding',-2);
                                    this.undisplayMemo();
                                }),
                    new Memo({toLine: "<b>To:</b> Our Beloved CEO",
                             fromLine: "<b>From:</b> The Board Of Directors",
                             body: "<p>&emsp;One of your employees has been in the news recently for drug related crimes. What are you planning on doing about that?",
                             signature: "<p>Regards,</p> <p>&emsp;Your Friendly Board Of Directors :)</p>",
                             option1Text: "Make It Go Away",
                             option2Text: "Fire Them",
                             option3Text: "Ignore It",
                             subject: "<b>Subject:</b> Employee Moral Clauses",
                             option1Tag: "Lose $500, Chance To Make It Disappear",
                             option2Tag: "Fire The Employee",
                             option3Tag: ignoreBoardTitle},
                            function (){
                                let tempBool = realGame.company.checkProductivity('Marketing',50);
                                if(tempBool){

                                }
                                else{
                                    realGame.nextWeekMemos.push(chainMemos[1]);
                                }
                                realGame.company.gainMoney(-500);
                                this.undisplayMemo();
                            },
                            function (){
                                realGame.company.fireEmployee(realGame.company.scandalEmp);
                                this.undisplayMemo();
                            },
                            function (){
                                realGame.company.ignoreTracker = realGame.company.ignoreTracker +1;
                                realGame.nextWeekMemos.push(chainMemos[1]);
                                this.undisplayMemo();
                            },
                            function (){
                                if(realGame.company.scandalEmp == undefined){
                                    realGame.company.scandalEmp = pickRandomEmployee();
                                    let empDisplay = createMemoEmp();
                                    document.getElementById('fullMemo').appendChild(empDisplay);
                                    realGame.company.getDepartment('Human Resources').showEmployee(document.getElementById('fullMemo').children[1].children[0].children[1].children[0],realGame.company.scandalEmp);
                                    document.getElementById('fullMemo').children[1].children[0].style.display = "flex";
                                    return true;
                                }
                                else{
                                    console.log("Unable to use this memo");
                                    realGame.memoArray.push(createMemo());
                                    return false;
                                }
                            }),
                    new Memo(
                            {toLine: "<b>To:</b> A CEO",
                             fromLine: "<b>From:</b> Quizzes R US",
                             body: "<p>&emsp;Hi! We're part of Online Quizzes R US and we're wondering if you had some time to answer a few questions!"+ 
                             "You'll find out how the type of desk you work on effects your spirit animal!</p>",
                             signature: "<p>Best Wishes,</p> <p>&emsp;The Quizzes R US Team</p>",
                             option1Text: "Sure",
                             option2Text: "How Did This Get Past My Assistant?",
                             option3Text: "Ignore It",
                             subject: "<b>Subject:</b> TAKE FREE QUIZZES",
                             option1Tag: "Your Animal Is A Panda",
                             option2Tag: "Think About Firing Assistant",
                             option3Tag: "Ignore"},
                            function (){
                                this.undisplayMemo();
                            },
                            function (){
                                this.undisplayMemo();
                            },
                            function (){
                                this.undisplayMemo();
                            }),
                    new Memo(
                            {toLine: "<b>To:</b> Our CEO Friend ",
                             fromLine: "<b>From:</b> Mr. and Mrs. Moocher",
                             body: "<p>&emsp;Hey, do you remember us? We sat next to you at a Twins game? Anyway our daughter is getting married and we were wondering if you would attend the wedding."+ 
                             "Also we wedding gifts aren't necessary but they are appreciated!</p>",
                             signature: "<p>Regards,</p> <p>&emsp;Mr. and Mrs. Moocher</p>",
                             option1Text: "Send Them A Gift",
                             option2Text: "Wish Them Well",
                             option3Text: "Ignore It",
                             subject: "<b>Subject:</b> Wedding Notification",
                             option1Tag: "Lose $50",
                             option2Tag: "Send A Letter, Lose $5",
                             option3Tag: "You Hate Love"},
                            function (){
                                realGame.company.gainMoney(-50);
                                this.undisplayMemo();
                            },
                            function (){
                                realGame.company.gainMoney(-5);
                                this.undisplayMemo();
                            },
                            function (){
                                this.undisplayMemo();
                            }),
                    new Memo(
                            {toLine: "<b>To:</b> Our Beloved CEO  ",
                                fromLine: "<b>From:</b> The Board Of Directors",
                                body: "<p>&emsp;Hello, we've noticed other companies have started to encourage remote work. We're not sure how we feel about it."+ 
                                "What do you think the company should do</p>",
                                signature: "<p>Regards,</p> <p>&emsp;Your Friendly Board Of Directors</p>",
                                option1Text: "Let's Encourage Remote",
                                option2Text: "We Can Try Hybrid",
                                option3Text: "Can't They Just Come To The Office?",
                                subject: "<b>Subject:</b> Remote Work",
                                option1Tag: "Workers Become Remote",
                                option2Tag: "Go Hybrid",
                                option3Tag: "Workers Must Come Into Office"},
                            function (){
                                //change it to remote
                                realGame.company.isRemote = true;
                                realGame.company.checkRemote(realGame.company.isRemote);
                                this.undisplayMemo();
                            },
                            function (){
                                //increase some productivity?
                                this.undisplayMemo();
                            },
                            function (){
                                //change to inOffice
                                realGame.company.isRemote = false;
                                realGame.company.checkRemote(realGame.company.isRemote);
                                this.undisplayMemo();
                            },
                            function (){
                                //only run it if we are only remote
                                if(realGame.company.isRemote){
                                    console.log("Unable to use this memo");
                                    realGame.memoArray.push(createMemo());
                                    return false;
                                }
                                return true;
                            }),
                    new Memo(
                            {toLine: "<b>To:</b> Our CEO Friend ",
                                fromLine: "<b>From:</b> The Board Of Directors",
                                body: "<p>&emsp;Hey, some companies have started to head back to the office? Do you think we should start bringing back our employees to the office?</p>" ,
                                signature: "<p>Regards,</p> <p>&emsp;The Board Of Directors</p>",
                                option1Text: "Let's Stay Remote",
                                option2Text: "We Can Try Hybrid",
                                option3Text: "Yeah! Bring Them In",
                                subject: "<b>Subject:</b> Remote Work",
                                option1Tag: "Workers Stay Remote",
                                option2Tag: "Go Hybrid",
                                option3Tag: "Bring Them In"},
                            function (){
                                realGame.company.isRemote = true;
                                realGame.company.checkRemote(realGame.company.isRemote);
                                this.undisplayMemo();
                            },
                            function (){
                                this.undisplayMemo();
                            },
                            function (){
                                realGame.company.isRemote = false;
                                realGame.company.checkRemote(realGame.company.isRemote);
                                this.undisplayMemo();
                            },
                            function (){
                                //only run it if we are only remote
                                if(!(realGame.company.isRemote)){
                                    console.log("Unable to use this memo");
                                    realGame.memoArray.push(createMemo());
                                    return false;
                                }
                                return true;
                            }),
                    new Memo(
                            {toLine: "<b>To:</b> Our CEO ",
                                fromLine: "<b>From:</b> Human Resources",
                                body: "<p>&emsp;We would like to remind all employees about breakroom ettiquette. Stealing a co-workers lunch, microwaving fish, and also playing music loudly while telling everyone it's karaoke time and forcing your co-workers to uncomfortably sing along are all STRICTLY PROHIBITED. Thank you.</p>" ,
                                signature: "<p>Regards,</p> <p>&emsp;HR Department</p>",
                                option1Text: "Why Would Someone Do That???",
                                option2Text: "Don't Send Me These Memos",
                                option3Text: "Ignore It",
                                subject: "<b>Subject:</b> Remote Work",
                                option1Tag: "Thank God I Don&#39;t Use The Break Room",
                                option2Tag: "Gross",
                                option3Tag: "I Don&#39;t Care"},
                            function (){
                                this.undisplayMemo();
                            },
                            function (){
                                this.undisplayMemo();
                            },
                            function (){
                                this.undisplayMemo();
                            }),
                            ];