let specialMemo = [new Memo("<div>" + 
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
                                this.undisplayMemo();
                            },
                            function (){
                                this.undisplayMemo();
                            },
                            function (){
                                realGame.company.ignoreTracker = realGame.company.ignoreTracker +1;
                                realGame.memoArray.push(specialMemo[0]);
                                this.undisplayMemo();
                            }),]
                            ;