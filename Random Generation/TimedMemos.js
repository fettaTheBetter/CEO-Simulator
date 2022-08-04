let timedMemos =[new Memo(  {toLine: "<p><b>To:</b> Our Beloved CEO</p>",
                             fromLine: "<p><b>From:</b> The Board Of Directors</p>",
                             body: "<p>&emsp;Greetings {CEO}, we're very happy to be welcoming you into our business family." +
                             " We're hoping you may be able to right the ship our previous CEO ran into an iceberg with. Unfortunately all our employees left and we grabbed some people off the stree to help. You're welcome!" +
                             "Anyways, good luck and if it doesn't work out we'll just fire you. Haha just kidding...</p>",
                             signature: "<p>Regards,</p> <p>&emsp;Your Friendly Board Of Directors :)</p>",
                             option1Text: "$5000",
                             option2Text: "$10000",
                             option3Text: "$15000",
                             subject: "<p><b>Subject:</b> Welcome Again</p>"},
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
                             option3Text: "Ignore It",
                             subject: "<p><b>Subject:</b> GCBA Reminder</p>"},
                            function (){
                                realGame.memoArray.push(chainMemos[3]);
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
                    new Memo(   {toLine: "<p><b>To:</b> The New CEO</p>",
                             fromLine: "<p><b>From:</b> The Board Of Directors</p>",
                             body: "<p>&emsp;Hello it's us; The Board Of Directors. We believe you're the only candidate who can turn this company around, so no pressure." +
                             " Quick question, have you ever been a CEO before?</p>",
                             signature: "<p>Regards,</p> <p>&emsp;Your Friendly Board Of Directors :)</p>",
                             option1Text: "Yes",
                             option2Text: "Yes, but I would like a refresher",
                             option3Text: "No; please help me",
                            subject: "<p><b>Subject:</b> Welcome</p>"},
                            function (){
                                realGame.memoArray.push(timedMemos[0]);
                                this.undisplayMemo();
                            },
                            function (){
                                realGame.memoArray.push(chainMemos[4]);
                                this.undisplayMemo();
                            },
                            function (){
                                realGame.memoArray.push(chainMemos[4]);
                                this.undisplayMemo();
                            }),
                    new Memo(   {toLine: "<p><b>To:</b> The CEO</p>",
                             fromLine: "<p><b>From:</b> The Board Of Directors</p>",
                             body: "<p>&emsp;Just wanted to remind you that you have a match next week. Please don't embarass us!</p>",
                             signature: "<p>Regards,</p> <p>&emsp;Your Friendly Board Of Directors :)</p>",
                             option1Text: "Bring 'Em On",
                             option2Text: "It Might Be Tough",
                             option3Text: "Can We Reschedule Please?",
                            subject: "<p><b>Subject:</b> GCBA Match</p>"},
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