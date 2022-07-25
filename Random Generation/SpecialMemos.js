let specialMemos = [new Memo("<div>" + 
                            "<div>" + memoIntroHTML + memoLine+
                            "<div class = 'memoBody'>&emsp;We've noticed you've been ignoring a majority of our memos. We understand you may think you're right but you're not! If you continue to ignore our advice there will be consequences! " + memoSignatureLine +
                            "</div></div>"+
                            "<div class ='optionButtonsHolder'>" +
                            "<button class = 'memoOptionButtons'>Whoops, Sorry</button>" +
                            "<button class = 'memoOptionButtons'>If You Say So</button>" +
                            "<button class = 'memoOptionButtons'>Ignore It</button></div>" +
                            "</div>",
                            function (){
                                realGame.company.ignoreTracker = realGame.company.ignoreTracker -5;
                                this.undisplayMemo();
                            },
                            function (){

                                this.undisplayMemo();
                            },
                            function (){
                                realGame.company.ignoreTracker = realGame.company.ignoreTracker +2;
                                this.undisplayMemo();
                            }),
                    new Memo("<div>" + 
                            "<div>" + memoIntroHTML + memoLine+
                            "<div class = 'memoBody'>&emsp;Looks like one of your departments has a few too many employees. That's ok! We've made a new department for you called middle management." 
                             + "This will help you manage all those extra people, trust me you'll need it. <br>" + "&emsp;We've also taken the liberty to hire your first middle manager!" +
                             " They're family so please be nice to them." + memoSignatureLine +
                            "</div></div>"+
                            "<div class ='optionButtonsHolder'>" +
                            "<button class = 'memoOptionButtons'>Sounds Great!</button>" +
                            "<button class = 'memoOptionButtons'>Ok...</button>" +
                            "<button class = 'memoOptionButtons'>Refuse to hire them</button></div>" +
                            "</div>",
                            function (){
                                realGame.company.ignoreTracker = realGame.company.ignoreTracker -1;
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
                                realGame.company.ignoreTracker = realGame.company.ignoreTracker +1;
                                realGame.memoArray.push(chainMemos[0]);
                                this.undisplayMemo();
                            },
                            function (){
                                console.log("Prememo for middle management");
                                realGame.company.addMM();
                                realGame.updateDisplays();
                                return true;
                            }),
                    new Memo("<div>" + 
                            "<div>" + memoIntroHTML + memoLine+
                            "<div class = 'memoBody'>&emsp;Come on! We're trying to give you constructive criticism but you seem determined to ignore us. We are both want this company to succeed and we are asking for your cooperation." + memoSignatureLine +
                            "</div></div>"+
                            "<div class ='optionButtonsHolder'>" +
                            "<button class = 'memoOptionButtons'>Ok, I understand</button>" +
                            "<button class = 'memoOptionButtons'>Please Stop Messaging Me</button>" +
                            "<button class = 'memoOptionButtons'>Ignore It</button></div>" +
                            "</div>",
                            function (){
                                realGame.company.ignoreTracker = realGame.company.ignoreTracker -5;
                                realGame.company.ignoreMemoTracker--;
                                this.undisplayMemo();
                            },
                            function (){
                                realGame.company.ignoreTracker = realGame.company.ignoreTracker +1;
                                this.undisplayMemo();
                            },
                            function (){
                                realGame.company.ignoreTracker = realGame.company.ignoreTracker +2;
                                this.undisplayMemo();
                            }),
                    new Memo("<div>" + 
                            "<div>" + memoIntroHTML + memoLine+
                            "<div class = 'memoBody'>&emsp;This is the last straw, either listen to us or suffer MAJOR consequences!!!" + memoSignatureLine +
                            "</div></div>"+
                            "<div class ='optionButtonsHolder'>" +
                            "<button class = 'memoOptionButtons'>Sorry I'll Pay More Attention</button>" +
                            "<button class = 'memoOptionButtons'>Of Course My Bad</button>" +
                            "<button class = 'memoOptionButtons'>Ignore It</button></div>" +
                            "</div>",
                            function (){
                                realGame.company.ignoreTracker = realGame.company.ignoreTracker -5;
                                realGame.company.ignoreMemoTracker--;
                                this.undisplayMemo();
                            },
                            function (){
                                realGame.company.ignoreTracker = realGame.company.ignoreTracker - 2;
                                realGame.company.ignoreMemoTracker--;
                                this.undisplayMemo();
                            },
                            function (){
                                realGame.company.ignoreTracker = realGame.company.ignoreTracker +2;
                                this.undisplayMemo();
                            }),]
                            ;