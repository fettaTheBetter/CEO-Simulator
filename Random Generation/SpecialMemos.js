let specialMemos = [new Memo(
                            {toLine: "<b>To:</b> Our Beloved CEO",
                             fromLine: "<b>From:</b> The Board Of Directors",
                             body: "<p>&emsp;We've noticed you've been ignoring a majority of our memos. We understand you may think you're right but you're not! If you continue to ignore our advice there will be consequences! </p>",
                             signature: "<p>Regards,</p> <p>&emsp;Your Exasparated Board Of Directors :)</p>",
                             option1Text: "Whoops, Sorry",
                             option2Text: "If You Say So",
                             option3Text: "Ignore It",
                             subject: "<b>Subject:</b> Please Don't Ignore Us",
                             option1Tag: "Get Back On The Boards Good Side",
                             option2Tag: "Sass The Board",
                             option3Tag: ignoreBoardTitle},
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
                    new Memo(
                            {toLine: "<b>To:</b> Our Beloved CEO",
                             fromLine: "<b>From:</b> The Board Of Directors",
                             body: "<p>&emsp;Looks like one of your departments has a few too many employees. That's ok! We've made a new department for you called middle management." 
                             + "This will help you manage all those extra people; our research has shown that for every five employees in a department you need a middle manager. Oh also the middle manager has to have a specialization in that department in order to manage it. <br>"
                              + "&emsp;We've also taken the liberty to hire your first middle manager!" +
                             " They're family so please be nice to them.</p>",
                             signature: "<p>Regards,</p> <p>&emsp;Your Friendly Board Of Directors :)</p>",
                             option1Text: "Sounds Great!",
                             option2Text: "Ok...",
                             option3Text: "Refuse To Hire Them",
                             subject: "<b>Subject:</b> Middle Management",
                             option1Tag: "Hire Them",
                             option2Tag: "I Hate It Here",
                             option3Tag: "Don't Engage In Nepotism"},
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
                                realGame.company.addMM();
                                realGame.updateDisplays();
                                return true;
                            }),
                    new Memo(
                            {toLine: "<b>To:</b> Our Beloved CEO",
                             fromLine: "<b>From:</b> The Board Of Directors",
                             body: "<p>&emsp;Come on! We're trying to give you constructive criticism but you seem determined to ignore us. We are both want this company to succeed and we are asking for your cooperation.</p>",
                             signature: "<p>Regards,</p> <p>&emsp;Your Very Exasperated Board Of Directors :)</p>",
                             option1Text: "Ok, I understand",
                             option2Text: "Please Stop Messaging Me",
                             option3Text: "Ignore It",
                             subject: "<b>Subject:</b> PLEASE DON'T IGNORE US",
                             option1Tag: "Get Back On The Boards Good Side",
                             option2Tag: "Sass The Board",
                             option3Tag: ignoreBoardTitle},
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
                    new Memo(
                            {toLine: "<b>To:</b> Our Beloved CEO",
                             fromLine: "<b>From:</b> The Board Of Directors",
                             body: "<p>&emsp;This is the last straw, either listen to us or suffer MAJOR consequences!!!</p>",
                             signature: "<p>Regards,</p> <p>&emsp;Your Friendly Board Of Directors :)</p>",
                             option1Text: "Sorry, I'll Pay More Attention",
                             option2Text: "Of Course My Bad",
                             option3Text: "Ignore It",
                             subject: "<b>Subject:</b> DON'T IGNORE US OR ELSE",
                             option1Tag: "Get Back On The Boards Good Side",
                             option2Tag: "Accept Responsibility",
                             option3Tag: ignoreBoardTitle},
                            function (){
                                realGame.company.ignoreTracker = realGame.company.ignoreTracker -12;
                                realGame.company.ignoreMemoTracker--;
                                this.undisplayMemo();
                            },
                            function (){
                                realGame.company.ignoreTracker = realGame.company.ignoreTracker - 2;
                                //realGame.company.ignoreMemoTracker--;
                                this.undisplayMemo();
                            },
                            function (){
                                realGame.company.ignoreTracker = realGame.company.ignoreTracker +2;
                                this.undisplayMemo();
                            }),]
                            ;