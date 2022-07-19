function createMemo(){
    //this function will grab a random memo from the GeneralMemos Array
    let memo;

    let memoIndex = Math.floor(Math.random()*generalMemos.length);
    memo = generalMemos[memoIndex];
    //need to convert the string to html
   /* document.getElementById('fullMemo').innerHTML = memo.memoHTML;
    document.getElementById('fullMemo').children[0].children[1].children[0].onclick = function(){memo.option1()};
    document.getElementById('fullMemo').children[0].children[1].children[1].onclick = function(){memo.option2()};
    document.getElementById('fullMemo').children[0].children[1].children[2].onclick = function(){memo.option3()};*/

    
    return memo;
}