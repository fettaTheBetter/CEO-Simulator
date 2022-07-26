let empNames = ["Steve","Doug","Ansel","Catherine","Asif","Georgie","Savannah","Quinn","Oswald","Jacquelyn","David","Caleb","Joseph","Pranav","Brunhilda","Jerry","Olivia","Constance","Michael","Biff","Stephanie","Narayana","Sunita","Vantou","Lewis","Cecelia","Benjamin","Franklin","Alexander","Louisa"];
let empLastNames = ["A.","B.","C.","D.","E.","F.","G.","H.","I.","J.","K.","L.","M.","N.","O.","P.","Q.","R.","S.","T.","U","V.","W.","X.","Y.","Z."];
let empSpecialization = ["Sales","Human Resources","Onboarding","Marketing","Recruiting","Aid Station","Custodian"];


//this will show the current enemy difficulty rating
//{prod, num of emp}
let enemyDifficulty = [25,30,40,45,55,65,75,85,90,95,100];

let ignoreBoardTitle = 'Ignore The Board';

let empPersonalities = ["Bland","Energetic","Ambitious","Meticulous","Efficient","Relaxed","Social"];


let helpInfoArrays = ["<div>Human Resources affects how well you know employees.</div>",
                      "<div>Marketing increases the maximum amount of money you can earn. Sales will then earn a percentage of that money.</div>",
                      "<div>Sales will gain money for your company. The amount is dependent on Marketing and your productivity.</div>",
                      "<div>Middle Management will affects your employees fighting values. You are also required to have 1 Middle Manager per 3 employees in a department. Otherwise you the department will take a hit to productivity and increase expenses.</div>",
                      "<div>Onboarding will reduce the training time for new hires.</div>",
                      "<div>The Aid station will help your employees recover from injuries.</div>",
                      "<div>Custodian help you scout out the competition.</div>",
                      "<div>Recruiting increases the quality of your new hires.</div>"]




//////////
//////////
//////////
//this will contain defaults for memos, I have moved the memo arrays to more specialized arrays
let memoIntroHTML ="<div><p><b>To:</b> Our Beloved CEO</p><p><b>From:</b> The Board Of Directors</p></div>";
let memoSignatureLine = "<p>Regards,</p> <p>&emsp;Your Friendly Board Of Directors :)</p>";
let memoLine = "<div class ='blackLine'></div>";
let memoIntroHTMLHR = "<div><p><b>To:</b> Our Beloved CEO</p><p><b>From:</b> Human Resources</p></div>";
let memoSignatureLineHR = "<p>Regards,</p> <p>&emsp;Your Friendly Human Resources Department</p>";
let memoIntroHTMLIT = "<div><p><b>To:</b> Our Beloved CEO</p><p><b>From:</b> IT</p></div>";
let memoSignatureLineIT = "<p>Regards,</p> <p>&emsp;Your IT Department</p>";
let memoIntroHTMLMarketing = "<div><p><b>To:</b> Our Beloved CEO</p><p><b>From:</b> Marketing</p></div>";
let memoSignatureLineMarketing = "<p>Regards,</p> <p>&emsp;Your Friendly Marketing Department</p>";
let memoIntroHTMLSales = "<div><p><b>To:</b> Our Beloved CEO</p><p><b>From:</b> Sales</p></div>";
let memoSignatureLineSales = "<p>Regards,</p> <p>&emsp;Your Friendly Sales Department</p>";

let empPictureHTML ="<div class = 'imageHolder'><img style = 'height: 200px' src ='https://office-mayhem.s3.us-east-2.amazonaws.com/tempFaceTrans.png'><div><b></b></div></div>";

