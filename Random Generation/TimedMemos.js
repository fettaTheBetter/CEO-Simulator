let timedMemos =[new Memo(  {toLine: "<b>To:</b> Our Beloved CEO",
                             fromLine: "<b>From:</b> The Board Of Directors",
                             body: "<p>&emsp;For your first act as CEO you get to choose how much money we give you." +
                             " Uhhhh, pick the biggest one for now I guess...</p>",
                             signature: "<p>Regards,</p> <p>&emsp;Your Friendly Board Of Directors :)</p>",
                             option1Text: "Give Me A Challenge",
                             option2Text: "A Moderate Amount Is Fine",
                             option3Text: "Gimme Lots Of Money",
                             subject: "<b>Subject:</b> Welcome Again",
                             option1Tag: "Gain $500",
                             option2Tag: "Gain $1000",
                             option3Tag: "Gain $1500"},
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
                new Memo(   {toLine: "<b>To:</b> Our Beloved CEO",
                             fromLine: "<b>From:</b> The Board Of Directors",
                             body: "<p>&emsp;Hey, just wanted to remind you we signed up the company for GCBA (Generic Company Battle Arena). " +
                             "We hope you've been training because the first match is in 4 weeks and we don't want to look stupid. Thanks!</p>",
                             signature: "<p>Regards,</p> <p>&emsp;Your Friendly Board Of Directors :)</p>",
                             option1Text: "Could You Run That By Me Again?",
                             option2Text: "Sounds Good",
                             option3Text: "Ignore It",
                             subject: "<b>Subject:</b> GCBA Reminder",
                             option1Tag: "Hear About Battles",
                             option2Tag: "Pretend To Care",
                             option3Tag: ignoreBoardTitle},
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
                                realGame.company.addFight();
                                realGame.updateDisplays();
                                return true;
                            }),
                    new Memo(   {toLine: "<b>To:</b> The New CEO",
                             fromLine: "<b>From:</b> The Board Of Directors",
                             body: "<p>&emsp;Hello, welcome to our company! We're excited to have you aboard. All we're asking is that you make it through the year (52 weeks) without putting our company in the red." +
                             " Before you start we have a quick question, have you ever been a CEO before?</p>",
                             signature: "<p>Regards,</p> <p>&emsp;Your Friendly Board Of Directors :)</p>",
                             option1Text: "Yes",
                             option2Text: "Yes, but I would like a refresher",
                             option3Text: "No; please help me",
                            subject: "<b>Subject:</b> Welcome",
                            option1Tag: "Start Game",
                            option2Tag: "Start Tutorial",
                            option3Tag: "Start Tutorial"},
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
                    new Memo(   {toLine: "<b>To:</b> The CEO",
                             fromLine: "<b>From:</b> The Board Of Directors",
                             body: "<p>&emsp;Just wanted to remind you that you have a match next week. Please don't embarass us!</p>",
                             signature: "<p>Regards,</p> <p>&emsp;Your Friendly Board Of Directors :)</p>",
                             option1Text: "Bring 'Em On",
                             option2Text: "It Might Be Tough",
                             option3Text: "I Am Not Prepared",
                            subject: "<b>Subject:</b> GCBA Match",
                            option1Tag: "Rally The Troops",
                            option2Tag: "You Can Do It",
                            option3Tag: "Cry"},
                            function (){
                                this.undisplayMemo();
                            },
                            function (){
                                this.undisplayMemo();
                            },
                            function (){
                                this.undisplayMemo();
                            }),
                    new Memo(   {toLine: "<b>To:</b> The CEO",
                             fromLine: "<b>From:</b> The Board Of Directors",
                             body: "<p>&emsp;We just wanted to say thanks! Our company has made it a full year without being in the red and it's all thanks to you!" +
                             "We appreciate all your efforts but we need to make way for a new CEO, one who we don't associate with financial hardships. So if you could just step down that would be great.</p>",
                             signature: "<p>Regards,</p> <p>&emsp;Your Friendly Board Of Directors :)</p>",
                             option1Text: "Ok",
                             option2Text: "No Change",
                             option3Text: "Ignore It",
                            subject: "<b>Subject:</b> Congratulations!!",
                            option1Tag: "End Game",
                            option2Tag: "Keep Playing",
                            option3Tag: ignoreBoardTitle},
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