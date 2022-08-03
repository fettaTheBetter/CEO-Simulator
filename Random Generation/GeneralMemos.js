
let generalMemos = [new Memo( {   toLine: "<p><b>To:</b> Our Beloved CEO</p>",
                                    fromLine: "<p><b>From:</b> The Board Of Directors</p>",
                                    body: "<p>&emsp;Hi if you're receiving this that means we don't care enough about you to send an actual memo. Just choose some amount of money you want.</p>",
                                    signature: "<p>Regards,</p> <p>&emsp;Your Friendly Board Of Directors :)</p>",
                                    option1Text: "$100",
                                    option2Text: "$150",
                                    option3Text: "$200"},
                                function (){
                                    console.log("we have hit option1");
                                    realGame.company.gainMoney(100);
                                    this.undisplayMemo();
                                },
                                function (){
                                    console.log("we have hit option2");
                                    realGame.company.gainMoney(150);
                                    this.undisplayMemo();
                                },
                                function (){
                                    console.log("we have hit option3");
                                    realGame.company.gainMoney(200);
                                    this.undisplayMemo();
                                }),
                    new Memo(
                            {toLine: "<p><b>To:</b> Our Beloved CEO</p>",
                             fromLine: "<p><b>From:</b> The Board Of Directors</p>",
                             body: "<p>&emsp;Hi, we've noticed some complaints about the decor of the office. Some people think it could use some plants and art and other random crap normal people like.</p>",
                             signature: "<p>Regards,</p> <p>&emsp;Your Friendly Board Of Directors :)</p>",
                             option1Text: "Lavishly Decorate Office",
                             option2Text: "Decorate Office",
                             option3Text: "Ignore It"},
                                function (){
                                    realGame.company.gainMoney(-300);
                                    realGame.company.increaseAllProductivity(2)
                                    this.undisplayMemo();
                                },
                                function (){
                                    realGame.company.gainMoney(-100);
                                    realGame.company.increaseDepartmentProductivity('Human Resources',2);
                                    this.undisplayMemo();
                                },
                                function (){
                                    realGame.company.ignoreTracker = realGame.company.ignoreTracker +1;
                                    this.undisplayMemo();
                                }),
                    new Memo(
                            {toLine: "<p><b>To:</b> Our Beloved CEO</p>",
                             fromLine: "<p><b>From:</b> The Board Of Directors</p>",
                             body: "<p>&emsp;We've been hearing online about a new technology called blockchain. We think it should be implemented into our business. We're not sure how it works but you'll figure it out! Thanks buddy!</p>",
                             signature: "<p>Regards,</p> <p>&emsp;Your Friendly Board Of Directors :)</p>",
                             option1Text: "Implement Blockchain",
                             option2Text: "Say Yes But Don't Do Anything",
                             option3Text: "Ignore It"},
                                function (){
                                    realGame.company.gainMoney(-200);
                                    let tempBool = realGame.company.checkProductivity('IT',25);
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
                            {toLine: "<p><b>To:</b> Our Beloved CEO</p>",
                             fromLine: "<p><b>From:</b> The Board Of Directors</p>",
                             body: "<p>&emsp;Happy Holidays! We've hope you've given some though to giving your employees a little holiday bonus." +
                             "We're not here to tell you what to do... but we think it's a good idea</p>",
                             signature: "<p>Regards,</p> <p>&emsp;Your Friendly Board Of Directors :)</p>",
                             option1Text: "Give Large Bonus",
                             option2Text: "Give Little Bonus",
                             option3Text: "Ignore It"},
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
                            {toLine: "<p><b>To:</b> Our Dear CEO</p>",
                             fromLine: "<p><b>From:</b> Human Resources</p>",
                             body: "<p>&emsp;Hey Boss, some employees thought it might be a good time to throw an office party. We're wondering what kind of budget we can get for the party.</p>",
                             signature: "<p>Regards,</p> <p>&emsp;Human Resources</p>",
                             option1Text: "As Much As You Want",
                             option2Text: "We Can Afford One Cake",
                             option3Text: "Ignore It"},
                            function (){
                                realGame.company.gainMoney(-150);
                                this.undisplayMemo();
                            },
                            function (){
                                realGame.company.gainMoney(-50);
                                this.undisplayMemo();
                            },
                            function (){
                                realGame.company.increaseDepartmentProductivity('Human Resources',-2);
                                this.undisplayMemo();
                            }),
                    new Memo(
                            {toLine: "<p><b>To:</b> CEO</p>",
                             fromLine: "<p><b>From:</b> IT</p>",
                             body: "<p>&emsp;Some employees have complained about their computers being a little slower than usual and we think an upgrade is needed. " +
                             "You think we could get some funds for a full server and PC upgrade for everyone?</p>",
                             signature: "<p>Regards,</p> <p>&emsp;IT</p>",
                             option1Text: "Hell Yeah!",
                             option2Text: "Only Minor Upgrades",
                             option3Text: "Ignore It"},
                                function (){
                                    realGame.company.gainMoney(-500);
                                    this.undisplayMemo();
                                },
                                function (){
                                    realGame.company.gainMoney(-100);
                                    this.undisplayMemo();
                                },
                                function (){
                                    realGame.company.increaseDepartmentProductivity('IT',-2);
                                    this.undisplayMemo();
                                }),
                    new Memo({toLine: "<p><b>To:</b> Our Beloved CEO</p>",
                             fromLine: "<p><b>From:</b> The Board Of Directors</p>",
                             body: "<p>&emsp;One of your employees has been in the news recently for drug related crimes. What are you planning on doing about that?",
                             signature: "<p>Regards,</p> <p>&emsp;Your Friendly Board Of Directors :)</p>",
                             option1Text: "Make It Go Away",
                             option2Text: "Fire Them",
                             option3Text: "Ignore It"},
                            function (){
                                let tempBool = realGame.company.checkProductivity('Marketing',25);
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
                            {toLine: "<p><b>To:</b> A CEO</p>",
                             fromLine: "<p><b>From:</b> Quizzes R US</p>",
                             body: "<p>&emsp;Hi! We're part of Online Quizzes R US and we're wondering if you had some time to answer a few questions!"+ 
                             "You'll find out how the type of desk you work on effects your spirit animal!</p>",
                             signature: "<p>Best Wishes,</p> <p>&emsp;The Quizzes R US Team</p>",
                             option1Text: "Sure",
                             option2Text: "How Did This Get Past My Assistant?",
                             option3Text: "Ignore It"},
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
                            {toLine: "<p><b>To:</b> Our CEO Friend </p>",
                             fromLine: "<p><b>From:</b> Mr. and Mrs. Moocher</p>",
                             body: "<p>&emsp;Hey, do you remember us? We sat next to you at a Twins game? Anyway our duaghter is getting married and we were wondering if you would attend the wedding."+ 
                             "Also we wedding gifts aren't necessary but they are appreciated!</p>",
                             signature: "<p>Regards,</p> <p>&emsp;Mr. and Mrs. Moocher</p>",
                             option1Text: "Send Them A Gift",
                             option2Text: "Wish Them Well",
                             option3Text: "Ignore It"},
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