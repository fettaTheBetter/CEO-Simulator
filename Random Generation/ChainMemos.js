let chainMemos = [new Memo("<div>" + 
                            "<div>" + memoIntroHTML + memoLine+
                            "<div class = 'memoBody'>&emsp;We've noticed you've been ignoring a majority of our memos. We understand you may think you're right but you're not! If you continue to ignore our advice there will be consequences! " + memoSignatureLine +
                            "</div></div>"+
                            "<div class ='optionButtonsHolder'>" +
                            "<button class = 'memoOptionButtons'>Whoops, Sorry</button>" +
                            "<button class = 'memoOptionButtons'>If You Say So</button>" +
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
                            "<div class = 'memoBody'>&emsp;One of your employees has been in the news and not for good reasons."+ 
                            "What are you planning to do about this?" + memoSignatureLine +
                            "</div></div>"+
                            "<div class ='optionButtonsHolder'>" +
                            "<button class = 'memoOptionButtons'>Try Again To Make It Go Away/button>" +
                            "<button class = 'memoOptionButtons'>Blame HR but Don't Fire Them</button>" +
                            "<button class = 'memoOptionButtons'>Fire Them</button></div>" +
                            "</div>",
                            function (){
                                let tempBool = realGame.company.checkProductivity('Marketing',25);
                                if(tempBool){
                                    //do nothing?
                                }
                                else{
                                    realGame.nextWeekMemos.push(chainMemos[0]);
                                }
                                realGame.company.gainMoney(-1000);
                                this.undisplayMemo();
                            },
                            function (){
                                this.undisplayMemo();
                            },
                            function (){
                                realGame.company.fireEmployee(realGame.company.scandalEmp);
                                this.undisplayMemo();
                            }),
                new Memo("<div>" + 
                            "<div>" + memoIntroHTML + memoLine+
                            "<div class = 'memoBody'>&emsp;Ok, we're putting our foot down, you really have to fire them this time. Otherwise THERE WILL BE CONSEQUENCES!"+ 
                             memoSignatureLine +
                            "</div></div>"+
                            "<div class ='optionButtonsHolder'>" +
                            "<button class = 'memoOptionButtons'>Fire Them But Blame HR</button>" +
                            "<button class = 'memoOptionButtons'>Fire Them/button>" +
                            "<button class = 'memoOptionButtons'>Ignore It</button></div>" +
                            "</div>",
                            function (){
                                realGame.company.fireEmployee(realGame.company.scandalEmp);
                                this.undisplayMemo();
                            },
                            function (){
                                realGame.company.fireEmployee(realGame.company.scandalEmp);
                                this.undisplayMemo();
                            },
                            function (){
                                realGame.company.ignoreTracker = realGame.company.ignoreTracker +1;
                                this.undisplayMemo();
                            }),];