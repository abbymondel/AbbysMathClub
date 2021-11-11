const VERYEASY = 10;
const EASY = 20;
const MEDIUM = 100;
const HARD = 10000;
const NIGHTMARE = 100000000;

$("#ask").on("click",function(){
    let myDif = eval($("#dif").val());
    $("#val1").html(Math.floor((Math.random() * myDif) + 1));
    $("#val2").html(Math.floor((Math.random() * myDif) + 1));
    let opers = getOperator(myDif);
    $("#oper").html(opers[Math.floor(Math.random()*opers.length)]);
});

$("#checkAns").on("click",function(){
    let val1 = parseInt($("#val1").html());
    let val2 = parseInt($("#val2").html());
    let oper = $("#oper").html().trim();
    let cval;
    let userVal = parseFloat($("#ans").val());
    if(isNaN(userVal)) {
        updateResponse("PLease Enter a valid Number",false);
        return;
    }
    switch(oper) {
        case '+':
            cval = val1 + val2;
            break;
        case '-':
            cval = val1 - val2;
            break;
        case '*':
            cval = val1 * val2;
            break;
        case '/':
            cval = val1 / val2;
            break;
    }
    cval = roundOff(cval);
    userVal = roundOff(userVal);
    if( cval === userVal) {
         updateResponse("That is Correct",true);
    } else {
          updateResponse("Please Try Again",false);
    }

});

function updateResponse(msg,isCorrect) {
    $("#isCorrect").html('');
    if(isCorrect) {
        $("#isCorrect").addClass('good');
        $("#isCorrect").removeClass('error');
    } else {
        $("#isCorrect").addClass('error');
        $("#isCorrect").removeClass('good');
    }
    $("#isCorrect").html(msg);
}

function getOperator(dif) {
    let arr;
    switch(dif) {
        case NIGHTMARE:
        case HARD:
            arr = ['+','-','*','/'];
        break;
        case MEDIUM:
            arr = ['+','-','*'];
            break;
        case EASY:
            arr = ['+','-'];
            break;
        case VERYEASY:
            arr = ['+'];
            break;
        default:
           arr = ['+','-']
    }
    return arr;
}

var roundOff = (num) => {
    return Math.round(num * 100) / 100
}