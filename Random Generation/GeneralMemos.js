
let generalMemos = [new Memo( "<div>" + 
                                "<div>" + memoIntroHTML + memoLine+
                                "<div class = 'memoBody'>&emsp;Hi please choose how much money you want. It's ok, don't be shy. You won something or whatever." + memoSignatureLine +
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
                            "<div class = 'memoBody'>&emsp;One of your employees has been in the news for alleged drug related crims. (I WILL CHANGE THE WORDING ON THIS)"+ 
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
                                    console.log("Here is the empDisplay: " + empDisplay);
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
                    new Memo("<div>" + 
                            "<div>" + memoIntroHTML + memoLine+
                            "<div class = 'memoBody'>&emsp;Hi! We're part of Online Quizzes R US and we're wondering if you had some time to answer a few questions!"+ 
                            "You'll find out how the type of desk you work on effects your spirit animal!" + memoSignatureLine +
                            "</div></div>"+
                            "<div class ='optionButtonsHolder'>" +
                            "<button class = 'memoOptionButtons'>Sure</button>" +
                            "<button class = 'memoOptionButtons'>How Did This Get Past My Assistant?</button>" +
                            "<button class = 'memoOptionButtons'>Ignore It</button></div>" +
                            "</div>",
                            function (){
                                this.undisplayMemo();
                            },
                            function (){
                                this.undisplayMemo();
                            },
                            function (){
                                this.undisplayMemo();
                            }),
                    new Memo("<div>" + 
                            "<div>" + memoIntroHTML + memoLine+
                            "<div class = 'memoBody'>&emsp;Hey, do you remember us? We sat next to you at a Twins game? Anyway our duaghter is getting married and we were wondering if you would attend the wedding."+ 
                            "Also we wedding gifts aren't necessary but they are appreciated!" + memoSignatureLine +
                            "</div></div>"+
                            "<div class ='optionButtonsHolder'>" +
                            "<button class = 'memoOptionButtons'>Of Course!!</button>" +
                            "<button class = 'memoOptionButtons'>No Thanks</button>" +
                            "<button class = 'memoOptionButtons'>Divorce Rates Are Too High As Is</button></div>" +
                            "</div>",
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