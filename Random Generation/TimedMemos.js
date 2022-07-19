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
                        ];