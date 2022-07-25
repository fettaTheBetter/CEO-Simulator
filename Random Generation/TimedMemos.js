let timedMemos =[new Memo( "<div>" +
                            "<div>" + memoIntroHTML + memoLine +
                            "<div class = 'memoBody'><p>&emsp;Greetings {CEO}, we're very happy to be welcoming you into our business family." +
                            " We're hoping you may be able to right the ship our previous CEO ran into an iceberg with. Unfortunately all our employees left and we grabbed some people off the stree to help. You're welcome!" +
                            "Anyways, good luck and if it doesn't work out we'll just fire you. Haha just kidding...</p>" + memoSignatureLine + 
                            "</div></div>"+
                            "<div class ='optionButtonsHolder'>" +
                            "<button class = 'memoOptionButtons'>$500</button>" +
                            "<button class = 'memoOptionButtons'>$1000</button>" +
                            "<button class = 'memoOptionButtons'>$1500</button></div>"+
                            "</div>",
                            function (){
                                realGame.company.gainMoney(500);
                                this.special1stMemo();
                            },
                            function (){
                                realGame.company.gainMoney(1000);
                                this.special1stMemo();
                            },
                            function (){
                                console.log("we have hit option1");
                                realGame.company.gainMoney(1500);
                                this.special1stMemo();
                            }),
                new Memo( "<div>" +
                            "<div>" + memoIntroHTML + memoLine +
                            "<div class = 'memoBody'><p>&emsp;Hey, just wanted to remind you we signed up the company for GCBA (Generic Company Battle Arena). " +
                            "We hope you've been training because the first match is in four weeks and we don't want to look stupid. Thanks!" + memoSignatureLine + 
                            "</div></div>"+
                            "<div class ='optionButtonsHolder'>" +
                            "<button class = 'memoOptionButtons'>Could Run That By Again?</button>" +
                            "<button class = 'memoOptionButtons'>Sounds Good</button>" +
                            "<button class = 'memoOptionButtons'>Ignore It</button></div>"+
                            "</div>",
                            function (){
                                realGame.memoArray.push(chainMemos[3])
                                this.undisplayMemo();
                            },
                            function (){
                                this.undisplayMemo();
                            },
                            function (){
                                realGame.company.ignoreTracker = realGame.company.ignoreTracker +1;
                                this.undisplayMemo();
                            },
                            function (){
                                console.log("Prememo for fight club");
                                realGame.company.addFight();
                                realGame.updateDisplays();
                                return true;
                            }),
                        ];