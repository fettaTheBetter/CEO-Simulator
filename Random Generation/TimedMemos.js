let timedMemos =[new Memo(  {toLine: "<p><b>To:</b> Our Beloved CEO</p>",
                             fromLine: "<p><b>From:</b> The Board Of Directors</p>",
                             body: "<p>&emsp;Greetings {CEO}, we're very happy to be welcoming you into our business family." +
                             " We're hoping you may be able to right the ship our previous CEO ran into an iceberg with. Unfortunately all our employees left and we grabbed some people off the stree to help. You're welcome!" +
                             "Anyways, good luck and if it doesn't work out we'll just fire you. Haha just kidding...</p>",
                             signature: "<p>Regards,</p> <p>&emsp;Your Friendly Board Of Directors :)</p>",
                             option1Text: "$5000",
                             option2Text: "$10000",
                             option3Text: "$15000"},
                            function (){
                                realGame.company.gainMoney(5000);
                                this.special1stMemo();
                            },
                            function (){
                                realGame.company.gainMoney(10000);
                                this.special1stMemo();
                            },
                            function (){
                                console.log("we have hit option1");
                                realGame.company.gainMoney(15000);
                                this.special1stMemo();
                            }),
                new Memo(   {toLine: "<p><b>To:</b> Our Beloved CEO</p>",
                             fromLine: "<p><b>From:</b> The Board Of Directors</p>",
                             body: "<p>&emsp;Hey, just wanted to remind you we signed up the company for GCBA (Generic Company Battle Arena). " +
                             "We hope you've been training because the first match is in four weeks and we don't want to look stupid. Thanks!</p>",
                             signature: "<p>Regards,</p> <p>&emsp;Your Friendly Board Of Directors :)</p>",
                             option1Text: "Could Run That By Again?",
                             option2Text: "Sounds Good",
                             option3Text: "Ignore It"},
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
                                realGame.company.getDepartment('IT').canvas.children[0].innerText = "IT/Hospital";
                                realGame.updateDisplays();
                                return true;
                            }),
                        ];