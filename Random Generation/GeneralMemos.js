
let generalMemos = [new Memo( "<div>" + 
                                "<div>" + memoIntroHTML + memoLine+
                                "<div class = 'memoBody'>&emsp;Hi this is the 2nd memo, click the amount of money you would like." + memoSignatureLine +
                                "</div></div>"+
                                "<div class ='optionButtonsHolder'>" +
                                "<button class = 'memoOptionButtons'>$100</button>" +
                                "<button class = 'memoOptionButtons'>$150</button>" +
                                "<button class = 'memoOptionButtons'>$200</button></div>" +
                                "</div>",
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
                    new Memo( "<div>" + 
                                "<div>" + memoIntroHTML + memoLine+
                                "<div class = 'memoBody'>&emsp;Hi, we've noticed some complaints about the decor of the office. Some people think it could use some plants and art and other random crap normal people like." + memoSignatureLine +
                                "</div></div>"+
                                "<div class ='optionButtonsHolder'>" +
                                "<button class = 'memoOptionButtons'>Lavishly Decorate Office</button>" +
                                "<button class = 'memoOptionButtons'>Decorate Office</button>" +
                                "<button class = 'memoOptionButtons'>Ignore It</button></div>" +
                                "</div>",
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
                    new Memo( "<div>" + 
                                "<div >" + memoIntroHTML + memoLine+
                                "<div class = 'memoBody'>&emsp;We've been hearing online about a new technology called blockchain. We think it should be implemented into our business. We're not sure how it works but you'll figure it out! Thanks buddy!" + memoSignatureLine +
                                "</div></div>"+
                                "<div class ='optionButtonsHolder'>" +
                                "<button class = 'memoOptionButtons'>Implement Blockchain Technology</button>" +
                                "<button class = 'memoOptionButtons'>Respond yes but don't do anything</button>" +
                                "<button class = 'memoOptionButtons'>Ignore It</button></div>" +
                                "</div>",
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
                    new Memo("<div>" + 
                                "<div>" + memoIntroHTML + memoLine+
                                "<div class = 'memoBody'>&emsp;Happy Holidays! We've hope you've given some though to giving your employees a little holiday bonus." +
                                "We're not here to tell you what to do... but we think it's a good idea" + memoSignatureLine +
                                "</div></div>"+
                                "<div class ='optionButtonsHolder'>" +
                                "<button class = 'memoOptionButtons'>Give Large Bonus</button>" +
                                "<button class = 'memoOptionButtons'>People Don't Deserve Bonuses</button>" +
                                "<button class = 'memoOptionButtons'>Ignore It</button></div>" +
                                "</div>",
                                function (){
                                    realGame.company.gainMoney(-(realGame.company.getNumOfEmployees()*10));
                                    this.undisplayMemo();
                                },
                                function (){
                                    this.undisplayMemo();
                                },
                                function (){
                                    realGame.company.ignoreTracker = realGame.company.ignoreTracker +1;
                                    this.undisplayMemo();
                                }),
                    new Memo("<div>" + 
                            "<div>" + memoIntroHTMLHR + memoLine+
                            "<div class = 'memoBody'>&emsp;Hey Boss, some employees thought it might be a good time to throw an office party. We're wondering what kind of budget we can get for the party." + memoSignatureLineHR +
                            "</div></div>"+
                            "<div class ='optionButtonsHolder'>" +
                            "<button class = 'memoOptionButtons'>As Much As You Want</button>" +
                            "<button class = 'memoOptionButtons'>We Can Afford One Cake</button>" +
                            "<button class = 'memoOptionButtons'>Ignore It</button></div>" +
                            "</div>",
                            function (){
                                realGame.company.gainMoney(-500);
                                this.undisplayMemo();
                            },
                            function (){
                                realGame.company.gainMoney(-100);
                                this.undisplayMemo();
                            },
                            function (){
                                realGame.company.increaseDepartmentProductivity('Human Resources',-2);
                                this.undisplayMemo();
                            }),
                    new Memo("<div>" + 
                                "<div>" + memoIntroHTMLIT + memoLine+
                                "<div class = 'memoBody'>&emsp;Some employees have complained about their computers being a little slower than usual and we think an upgrade is needed." +
                                "You think we could get some funds for a full server and PC upgrade for everyone?" + memoSignatureLineIT +
                                "</div></div>"+
                                "<div class ='optionButtonsHolder'>" +
                                "<button class = 'memoOptionButtons'>Go Crazy</button>" +
                                "<button class = 'memoOptionButtons'>Only Minor Upgrades</button>" +
                                "<button class = 'memoOptionButtons'>Ignore It</button></div>" +
                                "</div>",
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
                    new Memo("<div>" + 
                            "<div>" + memoIntroHTML + memoLine+
                            "<div class = 'memoBody'>&emsp;One of your employees has been in the news and not for good reasons."+ 
                            "What are you planning to do about this?" + memoSignatureLine +
                            "</div></div>"+
                            "<div class ='optionButtonsHolder'>" +
                            "<button class = 'memoOptionButtons'>Make It Go Away</button>" +
                            "<button class = 'memoOptionButtons'>Fire Them</button>" +
                            "<button class = 'memoOptionButtons'>Ignore It</button></div>" +
                            "</div>",
                            function (){
                                let tempBool = realGame.company.checkProductivity('Marketing',25);
                                if(tempBool){

                                }
                                else{
                                    realGame.nextWeekMemos.push(chainMemos[0]);
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
                                this.undisplayMemo();
                            },
                            function (){
                                realGame.company.scandalEmp = realGame.company.departmentsArray[0].employees[0];
                            }),
                            ];